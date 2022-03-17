<template>
  <a-dropdown :placement="bottomRight" :trigger="['click']">
    <slot name="avatar"></slot>
    <template #overlay>
      <a-menu>
        <a-menu-item key="personal">
          <a target="_blank" href="https://www.baidu.com/" class="a-link">我的主页</a>
        </a-menu-item>
        <a-menu-item key="collection">
          <a target="_blank" href="https://www.baidu.com/" class="a-link">我的收藏</a>
        </a-menu-item>
        <a-menu-item key="logoff">
          <span class="a-link">退出登录</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
export default {
  name: "AvatarDropDown",
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.a-link {
  color: rgb(78, 89, 105);
  &:hover {
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.01);
  }
}
</style>
