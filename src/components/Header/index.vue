<template>
  <header class="main-header">
    <div class="container">
      <a href="/" class="logo">
        <img :src="logo" alt="img">
      </a>
      <nav role="navigation" class="main-nav">
        <ul class="main-nav-list">
          <ul class="nav-nav-list">
            <li>首页</li>
            <li>活动</li>
          </ul>
          <ul class="avatar-nav-list">
            <li>搜索</li>
            <li>
              <img class="avatar" :src="avatar" alt="avatar">
            </li>
          </ul>

        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      logo: require('@/assets/longmao.jpg'),
      avatar: require('@/assets/avatar1.jpg'),
    }
  }
}
</script>
<style lang="less">
.main-header {
  height: 6rem;
  padding: 0 5rem;
  background: #fff;
  border-bottom: 0.1rem solid #f1f1f1;
  color: #909090;
  z-index: 250;
}
.container {
  display: flex;
  align-items: center;
  height: 6rem;
  .logo {
    height: 4rem;
    width: 14rem;
    margin: 0 2.4rem;
    img {
      height: 4rem;
      width: 4rem;
      margin: auto;
      display: block;
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
        li {
          margin: 0 1.6rem;
          line-height: 100%;
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