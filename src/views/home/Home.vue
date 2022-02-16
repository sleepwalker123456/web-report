<template>
  <div>
    <div v-for="menu in menus" v-bind:key="menu.id">
      <div class="Nav-Img">
        <img v-bind:src="menu.link">
        <div><a v-bind:href="menu.url">{{ menu.name }}</a></div>
      </div>
    </div>
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
.Content-Home .ContentText .ContentNav .Nav-Img {
  margin-top: 10px;
  margin-left: 18px;
  max-width: 295px;
  max-height: 200px;
  width: 25%;
  height: 50%;
  overflow: hidden;
  cursor: pointer;
}

.Content-Home .ContentText .ContentNav .Nav-Img .Image {
  width: 100%;
  height: 100%;
  transition: .8s;
}

.Content-Home .ContentText .ContentNav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  max-width: 1250px;
  min-width: 300px;
  float: left;
}

.Content-Home .ContentText {
  width: 100%;
  height: 410px;
  padding-left: calc(50% - 610px);
  padding-right: calc(50% - 610px);
  overflow: hidden;
}
</style>
