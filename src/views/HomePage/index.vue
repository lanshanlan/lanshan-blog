<template>
  <main class="main-container">
    <ScrollList />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ScrollList from './ScrollList'

export default{
  name: 'HomePage',
  data() {
    return {
      name: '首页'
    }
  },
  components: {
    ScrollList,
  },
  computed: {
    ...mapGetters({
      websiteName: 'websiteName',
      username: 'user/username'
    })
  }
}
</script>
<style lang="less" scoped>
.main-container {
  text-align: center;
  padding: 2.4rem 0;
}
</style>