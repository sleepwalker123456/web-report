<template>
  <div>
    <tar-bar>
      <tab-bar-item v-for="(menu,index) in menus" v-bind:key="index" v-bind:link="menu.path"
                    v-bind:active-color="menu.color">
        <template v-slot:item-icon>
          <img v-bind:src="menu.icon" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img v-bind:src="menu.activeIcon" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            {{ menu.text }}
          </div>
        </template>
      </tab-bar-item>
      <!--    <tab-bar-item link="/home" active-color="red">
            <template v-slot:item-icon>
              <img src="@/assets/img/tabbar/home.svg" alt="">
            </template>
            <template v-slot:item-icon-active>
              <img src="@/assets/img/tabbar/home-active.svg" alt="">
            </template>
            <template v-slot:item-text>
              <div>
                首页
              </div>
            </template>
          </tab-bar-item>
          <tab-bar-item link="/category" active-color="red">
            <template v-slot:item-icon>
              <img src="@/assets/img/tabbar/category.svg" alt="">
            </template>
            <template v-slot:item-icon-active>
              <img src="@/assets/img/tabbar/category-active.svg" alt="">
            </template>
            <template v-slot:item-text>
              <div>分类</div>
            </template>
          </tab-bar-item>
          <tab-bar-item link="/cart" active-color="red">
            <template v-slot:item-icon>
              <img src="@/assets/img/tabbar/cart.svg" alt="">
            </template>
            <template v-slot:item-icon-active>
              <img src="@/assets/img/tabbar/cart-active.svg" alt="">
            </template>
            <template v-slot:item-text>
              <div>购物车</div>
            </template>
          </tab-bar-item>
          <tab-bar-item link="/profile" active-color="red">
            <template v-slot:item-icon>
              <img src="@/assets/img/tabbar/profile.svg" alt="">
            </template>
            <template v-slot:item-icon-active>
              <img src="@/assets/img/tabbar/profile-active.svg" alt="">
            </template>
            <template v-slot:item-text>
              <div>我的</div>
            </template>
          </tab-bar-item>-->
    </tar-bar>
  </div>
</template>

<script>
import TarBar from './TarBar'
import TabBarItem from './TabBarItem'

export default {
  name: 'MainTabBar',
  data: function () {
    return {
      menus: [
        {
          path: '/home',
          icon: require('../../assets/img/tabbar/home.svg'),
          activeIcon: require('../../assets/img/tabbar/home-active.svg'),
          text: '首页',
          color: 'red'
        },
        {
          path: '/category',
          icon: require('../../assets/img/tabbar/category.svg'),
          activeIcon: require('../../assets/img/tabbar/category-active.svg'),
          text: '分类',
          color: 'red'
        },
        {
          path: '/cart',
          icon: require('../../assets/img/tabbar/cart.svg'),
          activeIcon: require('../../assets/img/tabbar/cart-active.svg'),
          text: '购物车',
          color: 'red'
        },
        {
          path: '/profile',
          icon: require('../../assets/img/tabbar/profile.svg'),
          activeIcon: require('../../assets/img/tabbar/profile-active.svg'),
          text: '我的',
          color: 'red'
        }
      ]
    }
  },
  methods: {},
  components: {
    TarBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
