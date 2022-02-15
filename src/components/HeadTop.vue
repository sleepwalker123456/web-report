<template>
  <div>
    <ul>
      <li>
        <a href="">用户名</a>
        <dl>
          <dd>
            <a href="">基本资料</a>
          </dd>
          <dd>
            <a href="">安全设置</a>
          </dd>
        </dl>
      </li>
      <li><a @click="logout">注销</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeadTop',
  methods: {
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
