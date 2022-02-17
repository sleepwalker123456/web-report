<template>
  <div>
    <Menu active-name="1-2" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics"/>
          Navigation One
        </template>
        <MenuGroup title="Item 1">
          <MenuItem name="1-1" to="/home/middle">中间表</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem name="1-3">Option 3</MenuItem>
          <MenuItem name="1-4">Option 4</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing"/>
          Navigation Two
        </template>
        <MenuItem name="2-1">Option 5</MenuItem>
        <MenuItem name="2-2">Option 6</MenuItem>
        <Submenu name="3">
          <template slot="title">Submenu</template>
          <MenuItem name="3-1">Option 7</MenuItem>
          <MenuItem name="3-2">Option 8</MenuItem>
        </Submenu>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-cog"/>
          Navigation Three
        </template>
        <MenuItem name="4-1">Option 9</MenuItem>
        <MenuItem name="4-2">Option 10</MenuItem>
        <MenuItem name="4-3">Option 11</MenuItem>
        <MenuItem name="4-4">Option 12</MenuItem>
      </Submenu>
    </Menu>
    <div class="content-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      menus: [
        {id: 1, name: '数据查询', url: '/home/middle', link: require('../../assets/img/menus/solutionbg3.jpg')},
        {id: 2, name: '数据导入', url: '', link: require('../../assets/img/menus/solutionbg6.jpg')},
        {id: 3, name: '系统配置', url: '', link: require('../../assets/img/menus/solutionbg5.jpg')},
        {id: 4, name: '辅助功能', url: '', link: require('../../assets/img/menus/solutionbg1.jpg')},
        {id: 5, name: '数据可视化', url: '', link: require('../../assets/img/menus/solutionbg2.jpg')},
        {id: 6, name: '系统集成', url: '', link: require('../../assets/img/menus/solutionbg9.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
.content-body {
  width: 70%;
  float: right;
  position:absolute;
  top: 60px;
  left: 20%;
}
</style>
