import { reg, login, getSliders } from '../../api/session'
// vuex 初始属性
const state = {
  userInfo: null,
  slider: []
}

// dispatch
const actions = {
  reg ({commit}, user) {
    return new Promise((resolve, reject) => {
      reg(user).then((data) => {
        resolve(data)
      }, (error) => {
        reject(error)
      })
    })
  },
  login ({commit}, user) {
    return new Promise((resolve, reject) => {
      login(user).then((data) => {
        resolve(data)
        if (data.code === 0) {
          commit('setUserInfo', data.user)
        }
      }, (error) => {
        reject(error)
      })
    })
  },
  getSliders ({commit}) {
    return new Promise((resolve, reject) => {
      getSliders().then((data) => {
        resolve(data)
        if (data && data.length > 0) {
          commit('setSlider', data)
        }
      }, (error) => {
        reject(error)
      })
    })
  }
}

// commit
const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  },
  setSlider (state, data) {
    state.slider = data
  }
}

// 计算属性
const getters = {
}

export default {
  state,
  actions,
  mutations,
  getters

}
