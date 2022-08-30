<template>
  <div class="login-body">
    <div class="form-wrapper">
      <div class="header">
        login
      </div>
      <div class="input-wrapper">
        <div class="border-wrapper">
          <input type="text" v-model="formLine.username" name="username" placeholder="username" class="border-item"
                 autocomplete="off">
        </div>
        <div class="border-wrapper">
          <input type="password" v-model="formLine.password" name="password" placeholder="password" class="border-item"
                 autocomplete="off">
        </div>
      </div>
      <div class="action">
        <div class="btn" @click="handlerSubmit">LOGIN</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: function () {
    return {
      formLine: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handlerSubmit: function () {
      console.info('abc')
    }
  }
}
</script>

<style scoped>
@import "../../../style/css/login.css";
</style>
