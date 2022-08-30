<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {ADMIN_INFO_INIT} from './store/mutations-type'

export default {
  name: 'App',
  created: function () {
    this.$nextTick(function () {
      this.$store.commit(ADMIN_INFO_INIT)
    })
  }
}

</script>

<style>

</style>
