import Vue from 'vue'
import Vuex from 'vuex'

import {AUTO_INCREMENT, AUTO_DECREMENT} from './mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {
    [AUTO_INCREMENT] (state) {
      state.counter++
    },
    [AUTO_DECREMENT] (state) {
      state.counter--
    }
  }
})

export default store
