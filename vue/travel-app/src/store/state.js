// 设置try catch函数，为了防止某些个人采用隐身浏览，或不开启浏览器本地存储导致抛出错误
let defaultCity = '杭州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
