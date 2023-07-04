<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-serach class="backgroumd" :hotSuggest="hotSuggest"/>
  </div>
  
</template>

<script setup>
  import homeNavBar from "./cpns/home-nav-bar.vue";
  import homeSerach from "./cpns/home-serach.vue";
  import useHomeStore from "@/stores/modules/home.js"
import { storeToRefs } from "pinia";
  const homeStore = useHomeStore()
  homeStore.fatchGetHotSuggest()
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