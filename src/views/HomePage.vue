<template>
  <div id="home">
    <div>
      <nav-bar>
        <template v-slot:left>
          <div>DataReport</div>
        </template>
        <template v-slot:center>
          <div><p>主页</p></div>
            <div>说明</div>
            <div>关于</div>
            <div>我的</div>
        </template>
        <template v-slot:right>
          <div>
            <div >注销</div>
          </div>
        </template>
      </nav-bar>
    </div>
    <div class="content-body" style="margin-left:25%;padding:1px 16px;height:1000px;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MainTabBar from '../components/tabbar/MainTabBar'
import NavBar from '../components/common/navbar/NavBar'
export default {
  name: 'HomePage',
  components: {
    MainTabBar,
    NavBar
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
.content-body {
}
</style>
