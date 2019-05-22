import axios from 'axios'

const ERR_OK = 0

// 对于同一个url，没必要每次都把url都作为参数传递
// 可以通过 ‘函数柯里化’
export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
      // errno不为ERR_OK时的处理
    })
  }
}
