<template>
  <div class="login-body">
    <div class="form-wrapper">
      <div class="header">
        login
      </div>
      <div class="input-wrapper">
        <div class="border-wrapper">
          <input type="text" name="username" placeholder="username" class="border-item" autocomplete="off">
        </div>
        <div class="border-wrapper">
          <input type="password" name="password" placeholder="password" class="border-item" autocomplete="off">
        </div>
      </div>
      <div class="action">
        <div class="btn" @click="handlerSubmit">LOGIN</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAdminInfo} from './common/getData'

export default {
  name: 'Login',
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
      const config = {
        url: '/api/sayHello',
        method: 'get'
      }
      getAdminInfo(config).then(res => {
        console.info(res)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped>
@import "../style/css/login.css";

.login-body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #0e92b3;*/
  background-image: url('../assets/img/login.jpg');
  background-size: 100% 100%;
}
</style>
