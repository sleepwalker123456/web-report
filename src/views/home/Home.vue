<template>
  <div>
    <Menu :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics"/>
          Navigation One
        </template>
        <MenuItem name="1-1" to="/home/middle">中间表</MenuItem>
        <MenuItem name="1-2" to="/home/out">出库单</MenuItem>
        <MenuItem name="1-3" to="/home/storage">入库单</MenuItem>
        <MenuItem name="1-4" to="/home/rework">返工条码</MenuItem>
        <MenuItem name="1-5">BOM导出</MenuItem>
        <MenuItem name="1-6" to="/home/rotation">转序领用入库</MenuItem>
        <MenuItem name="1-7" to="/home/transfer">一步式调拨单</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing"/>
          Navigation Two
        </template>
        <MenuItem name="2-1" to="/home/transfer">一步式调拨单</MenuItem>
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
  name: 'Home'
}
</script>

<style scoped>
.content-body {
  width: 80%;
  float: right;
  position: absolute;
  top: 60px;
  left: 16%;
  margin-left: 2%;
}
</style>
