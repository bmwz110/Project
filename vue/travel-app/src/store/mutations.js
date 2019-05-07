export default {
  changeCity (state, city) {
    state.city = city
    // 使用localStorage来存储上次选择的城市，避免刷新后重置
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
