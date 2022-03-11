import Vue from 'vue'
import Vuex from 'vuex'

import {AUTO_INCREMENT, AUTO_DECREMENT, ADMIN_INFO, ADMIN_INFO_CLEAR} from './mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    adminInfo: {
      name: '系统管理员',
      menus: [
        {name: '中间表', link: '/home/middle'},
        {name: '出库单', link: '/home/profile'},
        {name: '入库单', link: '/home/category'}
      ],
      token: ''
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
      state.adminInfo.token = data.token
      state.adminInfo.name = data.username
    },
    [ADMIN_INFO_CLEAR] (state) {
      state.adminInfo.token = ''
      state.adminInfo.name = ''
    }
  }
})

export default store
