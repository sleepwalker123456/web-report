<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    background-color: #333;
    list-style-type: none;
    margin: 0;
    padding: 5px;
    overflow: hidden;
    color: white;
  }
  .nav-bar div{
    display: inline-block;
    margin-left: 50px;
    margin-right: 50px;
  }
  .left .right {
    width: 10%;
  }
  .center {
    flex: 1;
    color: white;
  }
  .center div {
    margin-left: 100px;
    margin-right: 100px;
  }
</style>
