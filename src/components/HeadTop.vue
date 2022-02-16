<template>
  <div>
    <div class="head-left" style="float: left">
      <slot name="head_left"></slot>
    </div>
    <div class="head-center" style="text-align: center">
      <slot name="head_center"></slot>
    </div>
    <div class="head-right" style="float: right">
      <slot name="head_right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadTop'
}
</script>

<style scoped>

</style>
