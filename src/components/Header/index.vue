<template>
  <header class="main-header">
    <div class="container">
      <a href="/" class="logo">
        <img :src="logo" alt="img">
        <span class="logo-name">Lanshan Blog</span>
      </a>
      <nav role="navigation" class="main-nav">
        <ul class="main-nav-list">
          <ul class="nav-nav-list">
            <li>首页</li>
            <li>活动</li>
          </ul>
          <ul class="avatar-nav-list">
            <li>
              <a-input-search 
                v-model:value="searchvValue"
                placeholder="search"
                style="width: 200px"
                @search="onSearch"
              />
            </li>
            <li>
              <AvatarDropDown>
                <template #avatar>
                  <img class="avatar" :src="avatar" alt="avatar">
                </template>
              </AvatarDropDown>
            </li>
          </ul>

        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import AvatarDropDown from "./AvatarDropDown"
export default {
  name: "HeaderComp",
  data() {
    return {
      logo: require('@/assets/longmao.jpg'),
      avatar: require('@/assets/avatar1.jpg'),
      searchvValue: '',
    }
  },
  components: {
    AvatarDropDown,
  },
  methods: {
    onSearch() {
      console.log('searchvValue', this.searchvValue)
    }
  }
}
</script>
<style lang="less" scoped>
.main-header {
  height: 6rem;
  padding: 0 5rem;
  background: #fff;
  border-bottom: 0.1rem solid #f1f1f1;
  color: #515767;;
  z-index: 250;
}
.container {
  display: flex;
  align-items: center;
  height: 6rem;
  .logo {
    height: 4rem;
    margin: 0 2.4rem;
    display: flex;
    align-items: center;
    img {
      height: 4rem;
      width: 4rem;
      margin: auto;
    }
    .logo-name {
      font-size: 2rem;
      font-weight: 500;
      color: #2c3e50;
      margin-left: 0.8rem;
    }
  }
  .main-nav {
    height: 100%;
    flex: 1 0 auto;
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 100%;
    }
    .main-nav-list {
      .nav-list();
      .nav-nav-list {
        .nav-list();
        font-size: 1.6rem;
        cursor: pointer;
        li {
          margin: 0 1.6rem;
          line-height: 100%;
          &:hover {
            color: rgba(0, 0, 0, 0.9);
          }
        }
      }
      .avatar-nav-list {
        .nav-list();
        font-size: 1.6rem;
        li {
          margin: 0 1.6rem;
          line-height: 100%;
        }
        .avatar {
          height: 4rem;
          width: 4rem;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
}
ul {
  list-style-type: disc;
  display: flex;
}
li {
  list-style: none;
}
</style>