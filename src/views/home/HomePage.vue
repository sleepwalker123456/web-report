<template>
  <div id="home">
    <div>
      <nav-bar>
        <template v-slot:left>
          <div><p>DataReport</p></div>
          <div><p>主页</p></div>
        </template>
        <template v-slot:center>
        </template>
        <template v-slot:right>
          <div><p>{{ $store.state.adminInfo.name }}</p></div>
          <div>
            <div @click="logout">注销</div>
          </div>
        </template>
      </nav-bar>
    </div>
    <home></home>
  </div>
</template>

<script>
import MainTabBar from '../../components/tabbar/MainTabBar'
import NavBar from '../../components/common/navbar/NavBar'
import Home from './Home'
import {fetch} from '../../network/request'
import {ADMIN_INFO_CLEAR} from '../../store/mutations-type'

export default {
  name: 'HomePage',
  components: {
    MainTabBar,
    NavBar,
    Home
  },
  data: function () {
    return {}
  },
  methods: {
    logout: function () {
      const config = {
        url: '/logout',
        method: 'POST'
      }
      fetch(config).then(res => {
        this.$store.commit(ADMIN_INFO_CLEAR, res)
        alert(res.message)
        this.$router.replace('/')
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
