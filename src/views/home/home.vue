<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-serach class="backgroumd" :hotSuggest="hotSuggest"/>
    <home-category/>
    <home-content/>
  </div>
  
</template>

<script setup>
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSerach from "./cpns/home-serach.vue";
import homeCategory from "./cpns/home-category.vue"
import homeContent from "./cpns/home-content.vue";
import useHomeStore from "@/stores/modules/home.js"
import { storeToRefs } from "pinia";

const homeStore = useHomeStore()
homeStore.fatchGetHotSuggest()
homeStore.fetchGetCategory()
const { hotSuggest } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  .home {
    .backgroumd {
      background-color: #f8fafc;
    }
    .banner {
      img {
        width: 100%;
      }
    }
    
  }
</style>