import Vue from 'vue'
import Vuex from 'vuex'

import {AUTO_INCREMENT, AUTO_DECREMENT, ADMIN_INFO} from './mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    adminInfo: {
      name: '系统管理员'
    }
  },
  mutations: {
    [AUTO_INCREMENT] (state) {
      state.counter++
    },
    [AUTO_DECREMENT] (state) {
      state.counter--
    },
    [ADMIN_INFO] (state, data) {
      state.adminInfo = data
    }
  }
})

export default store
