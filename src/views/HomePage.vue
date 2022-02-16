<template>
  <div class="content">
    <head-top>
      <template v-slot:head_left>
        <h3>DataReport</h3>
      </template>
      <template v-slot:head_center>
        <ul class="head_center">
          <li><a href="">主页</a></li>
          <li><a href="">说明</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">我的</a></li>
        </ul>
      </template>
      <template v-slot:head_right>
        <div class="dropdown">
          <button class="dropbtn">用户</button>
          <div class="dropdown-content">
            <a href="#">个人资料</a>
            <a href="#">修改密码</a>
            <a href="#">注销</a>
          </div>
        </div>
      </template>
    </head-top>
<!--    <main-tab-bar></main-tab-bar>-->
    <div class="fileContent">
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
  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 5px;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/*鼠标移动到选项上修改背景颜色 */
li a:hover {
  background-color: #111;
}

/* 下拉按钮样式 */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* 容器 <div> - 需要定位下拉内容 */
.dropdown {
  position: relative;
  display: inline-block;
}

/* 下拉内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* 下拉菜单的链接 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 鼠标移上去后修改下拉菜单链接颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}

/* 在鼠标移上去后显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
