import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
/* eslint-disable no-new */

Vue.prototype.Trim = function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
