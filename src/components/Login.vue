<template>
  <div>
    <form>
      <div>
        <label>Username</label>
        <input v-model="formLine.username" type="text" placeholder="Enter your name......">
      </div>
      <div>
        <label>Password</label>
        <input v-model="formLine.password" type="password" placeholder="Enter your password......">
      </div>
    </form>
    <div>
      <button @click="handlerSubmit">login</button>
    </div>
  </div>
</template>

<script>
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
      console.info(this.$router)
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
