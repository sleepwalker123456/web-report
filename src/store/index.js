import Vue from 'vue'
import Vuex from 'vuex'

import {
  AUTO_INCREMENT,
  AUTO_DECREMENT,
  ADMIN_INFO,
  ADMIN_INFO_CLEAR,
  ADMIN_INFO_INIT
} from './mutations-type'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    adminInfo: {
      name: '',
      menus: [],
      token: ''
    }
  },
  mutations: {
    [AUTO_INCREMENT](state) {
      state.counter++
    },
    [AUTO_DECREMENT](state) {
      state.counter--
    },
    [ADMIN_INFO](state, data) {
      state.adminInfo.token = data.token
      state.adminInfo.name = data.username
      sessionStorage.setItem('username', data.username)
      sessionStorage.setItem('Authentication', data.token)
    },
    [ADMIN_INFO_CLEAR](state) {
      state.adminInfo.token = ''
      state.adminInfo.name = ''
      sessionStorage.clear()
    },
    [ADMIN_INFO_INIT](state) {
      state.adminInfo.name = sessionStorage.getItem('username')
      state.adminInfo.token = sessionStorage.getItem('Authentication')
    }
  },
  actions
})

export default store
