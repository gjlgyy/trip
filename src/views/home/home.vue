<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-serach/>
  </div>
  
</template>

<script setup>
  import homeNavBar from "./cpns/home-nav-bar.vue";
  import homeSerach from "./cpns/home-serach.vue";
</script>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }
    
  }
</style>