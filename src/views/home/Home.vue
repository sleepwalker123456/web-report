<template>
  <div class="home-menu">
    <ul>
      <li><a class="active" href="#home">主页</a></li>
      <li><a href="#news">新闻</a></li>
      <li><a href="#contact">联系</a></li>
      <li><a href="#about">关于</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      menus: [
        {id: 1, name: '数据查询', url: '', link: require('../../assets/img/menus/solutionbg3.jpg')},
        {id: 2, name: '数据导入', url: '', link: require('../../assets/img/menus/solutionbg6.jpg')},
        {id: 3, name: '系统配置', url: '', link: require('../../assets/img/menus/solutionbg5.jpg')},
        {id: 4, name: '辅助功能', url: '', link: require('../../assets/img/menus/solutionbg1.jpg')},
        {id: 5, name: '数据可视化', url: '', link: require('../../assets/img/menus/solutionbg2.jpg')},
        {id: 6, name: '系统继承', url: '', link: require('../../assets/img/menus/solutionbg9.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>
