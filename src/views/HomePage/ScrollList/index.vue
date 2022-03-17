<template>
<div class="list-container">
  <a-list size="small" bordered :data-source="dataList">
    <template #renderItem="{ item }">
      <a-list-item>
        <div class="item-container">
          <div class="item-top">
            <div class="item-name ellipsis">{{ item.name }}</div>
            <div class="dividing"></div>
            <div class="item-lastTime">{{ item.lastTime }}</div>
          </div>
          <div class="item-content">
            <div class="item-content-left">
              <div class="item-title ellipsis-1">{{ item.title }}</div>
              <div class="item-desc ellipsis-2">{{ item.description }}</div>
            </div>
            <img class="item-cover-right" :src="item.cover" alt="cover">
          </div>
        </div>
      </a-list-item>
    </template>
    <!-- <template #header>
      <div>Header</div>
    </template> -->
    <!-- <template #footer>
      <div>Footer</div>
    </template> -->
  </a-list>
</div>
  
</template>

<script>
import cover from '@/assets/view1.jpg'
export default {
  name: "ScrollList",
  data() {
    return {
      
    }
  },
  computed: {
  dataList() {
    const item = {
      name: 'userTest',
      lastTime: '3天前',
      title: '这是一个测试用标题',
      description: '这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。这是一段测试文字。',
      cover: cover,
    }
    return new Array(11).fill(item);
  }
  }
}
</script>

<style lang="less" scoped>
@totalWidth: 70rem;
.list-container {
  background-color: white;
  width: @totalWidth;
  margin: 0 auto;
  .item-container {
    height: 12rem;
    width: @totalWidth;
    .item-top {
      display: flex;
      align-content: center;
      height: 2rem;
      .item-name {
        max-width: 16.2rem;
        font-size: 1.3rem;
        line-height: 2.2rem;
        color: #4e5969;
      }
      .item-lastTime {
        font-size: 13px;
        color: #86909c;
      }
      .dividing {
        width: 1px;
        height: 14px;
        background: #e5e6eb;
        margin: 0 8px;
      }
    }
    .item-content {
      height: 10rem;
      padding: 1.2rem 0;
      text-align: left;
      display: flex;
      .item-content-left {
        width: 50rem;
        flex: 1;
        .item-title {
          font-weight: 700;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: #1d2129;
          margin-bottom: 0.8rem;
        }
        .item-desc {
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 2.2rem;
          color: #86909c;
        }
      }
      .item-cover-right {
        width: 12rem;
        height: 8rem;
        margin-left: 2.4rem;
      }
    }
  }
}
</style>
