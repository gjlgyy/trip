<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.category {
  display: flex;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    img {
      width: 40px;
    }
    .title {
      margin-top: 5px;
    }
  }
  
}
</style>