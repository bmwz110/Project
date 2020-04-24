const fs = require('fs')
const path = require('path')

// callback method to get file content
function getFileContent(fileName, callback) {
  const fullFileName = path.resolve(__dirname, 'files', fileName)
  fs.readFile(fullFileName, (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    callback( 
      JSON.parse(data.toString())
    )
  })
}

// callback hell
getFileContent('a.json', aData => {
  console.log('aData: ', aData)
  getFileContent(aData.next, bData => {
    console.log('bData: ', bData);
    getFileContent(bData.next, cData => {
      console.log('cData: ', cData);
    })
  })
})

// Promise method to get file content
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)

    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}

getFileContent('a.json').then(aData => {
  console.log('aData: ', aData)
  return getFileContent(aData.next)
}).then(bData => {
  console.log('bData: ', bData)
  return getFileContent(bData.next)
}).then(cData => {
  console.log('cData: ', cData)
  return getFileContent(cData.next)
})
