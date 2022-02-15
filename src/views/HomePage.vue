<template>
  <div>
    <head-top></head-top>
    <main-tab-bar></main-tab-bar>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MainTabBar from '../components/tabbar/MainTabBar'
import HeadTop from '../components/HeadTop'

export default {
  name: 'HomePage',
  components: {
    MainTabBar,
    HeadTop
  }
}
</script>

<style scoped>

</style>
