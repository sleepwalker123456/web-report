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
import {getAdminInfo} from '../../../network/home'
import {ADMIN_INFO} from "../../../store/mutations-type";

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
        url: '/login',
        method: 'post',
        params: {
          username: this.formLine.username,
          password: this.formLine.password,
          comId: 'SH01'
        }
      }
      getAdminInfo(config).then(res => {
        console.info(res)
        if (res.statusCode === 200) {
          this.$store.commit(ADMIN_INFO, res.entity)
          this.$router.push('/home')
        } else {
          alert(res.message)
        }
      }).catch(err => {
        console.info(err)
        alert(err)
      })
    }
  }
}
</script>

<style scoped>
@import "../../../style/css/login.css";

</style>
