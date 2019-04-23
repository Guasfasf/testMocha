import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/testStore'
import session from './modules/session'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    testStore,
    session
  }
})
