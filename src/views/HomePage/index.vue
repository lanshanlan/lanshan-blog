<template>
  <main class="main-container">
    <div>{{ name }}</div>
    <div>{{ websiteName }} 欢迎您，{{ username}}</div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  name: 'HomePage',
  data() {
    return {
      name: '首页'
    }
  },
  computed: {
    ...mapGetters({
      websiteName: 'websiteName',
      username: 'user/username'
    })
  }
}
</script>
<style lang="less">
.main-container {
  text-align: center;
  padding: 2.4rem 0;
}
</style>