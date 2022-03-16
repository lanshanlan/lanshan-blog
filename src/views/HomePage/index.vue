<template>
  <div>{{ name }}</div>
  <div>{{ websiteName }} 欢迎您，{{ username}}</div>
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
