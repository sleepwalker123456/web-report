<template>
  <div id="home">
    <div>
      <nav-bar>
        <template v-slot:left>
          <div>DataReport</div>
        </template>
        <template v-slot:center>
          <div><p>主页</p></div>
          <div><p>说明</p></div>
          <div><p>我的</p></div>
        </template>
        <template v-slot:right>
          <div>
            <div>注销</div>
          </div>
        </template>
      </nav-bar>
    </div>
    <home></home>
  </div>
</template>

<script>
import MainTabBar from '../components/tabbar/MainTabBar'
import NavBar from '../components/common/navbar/NavBar'
import Home from './home/Home'

export default {
  name: 'HomePage',
  components: {
    MainTabBar,
    NavBar,
    Home
  },
  data: function () {
    return {}
  }
}
</script>

<style scoped>

</style>
