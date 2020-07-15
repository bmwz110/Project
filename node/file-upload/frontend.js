import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  SIZE = 10 * 1024 * 1024;
  data: Array<any>;
  container: {
    file: File,
  };
  url = "http://localhost:3000";

  constructor() {
  }

  // 封装原生 XHR
  request({
    url,
    method = "post",
    data,
    headers = {},
  }) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      Object.keys(headers).forEach(key =>
        xhr.setRequestHeader(key, headers[key])
      );
      xhr.send(data);
      xhr.onload = e => {
        resolve({
          data: e.target
        });
      };
    });
  }

  handleFileChange(e): void {
    let currentFile = e.srcElement.files[0];

    if (!this.container) {
      this.container = {file: null}
    }
    this.container.file = currentFile;
  }

  handleUpload() {
    if (!this.container.file) {
      return;
    }

    const fileChunkList = this.createFileChunk(this.container.file);
    this.data = fileChunkList.map(({ file }, index) => ({
      chunk: file,
      hash: this.container.file.name + "-" + index   // 文件名 + 数组下标
    }));
    this.uploadChunks();
  }

  private createFileChunk(file) {
    const fileChunkList = [];
    let cur = 0;
    while (cur < file.size) {
      fileChunkList.push({ file: file.slice(cur, cur + this.SIZE) });
      cur += this.SIZE;
    }
    return fileChunkList;
  }

  private uploadChunks() {
    const requestList = this.data
    .map(({ chunk, hash }) => {
      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("hash", hash);
      formData.append("filename", this.container.file.name);
      return { formData };
    })
    .map(({formData}) =>
      this.request({
        url: "http://localhost:3000",
        data: formData
      })
    )
    Promise.all(requestList); // 并发切片

    // 合并讯息
    this.mergeRequest();
  }

  private mergeRequest() {
    this.request({
      url: "http://localhost:3000",
      headers: {
        "contnet-type": "application/json"
      },
      data: JSON.stringify({
        filename: this.container.file.name
      })
    });
  }
}
