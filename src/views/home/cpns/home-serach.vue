<template>
  <div class="search">
    <div class="localtion">
      <div class="city" @click="cityClick">广州</div>
      <div class="current" @click="getLocaltion">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()
const cityClick = () => {
  router.push("/city")
}

const getLocaltion = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("成功的回调",res);
  }, err => {
    console.log("失败的回调",res);
  })
}

</script>

<style lang="less" scoped>
.localtion {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  .city {
    flex: 1;
  }
  .current {
    display: flex;
    align-items: center;
    width: 74px;
    height: 100%;
    .text {
      position: relative;
      top: 1px;
      font-size: 12px;
    }
    img {
      width: 20px;
      margin-left: 5px;
    }
  }
}
</style>