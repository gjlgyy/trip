<template>
  <div class="home">
    <router-view/>
    <tabbar v-if="!route.meta.hiddenTar"/>
  </div>
</template>

<script setup>
  import TabBar from "@/components/tabbar/index.vue"
  import { useRoute } from "vue-router";


  const route = useRoute()
</script>

<style scoped>
  

</style>