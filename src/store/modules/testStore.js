// vuex 初始属性
const state = {
  title: 'chu shi'
}

// dispatch
const actions = {
  testGu (state, a) {
    state.state.title = a
    console.log('dispatch')
  }
}

// commit
const mutations = {
  setTitle (state, data) {
    state.title = data
  }
}

// 计算属性
const getters = {
  title: state => state.title,
  doneTodosCount: (state, getters) => {
    return getters.title.length
  }
}

export default {
  state,
  actions,
  mutations,
  getters

}
