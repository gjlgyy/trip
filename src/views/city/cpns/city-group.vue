<template>
  <div class="city-group">
    <van-index-bar :index-list="hotList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item,index) in groupData.hotCities">
          <div class="city" @click="clickCity(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(item, indexs) in group.cities" :key="indexs">
          <van-cell :title="item.cityName" @click="clickCity(item)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"
import useCityStore from "@/stores/modules/city.js"
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const hotList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})
const cityStore = useCityStore()
const router = useRouter()
const clickCity = (item) => {
  router.back()
  cityStore.currentCity = item
}
</script>

<style lang="less" scoped>
  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
    .city {
      height: 30px;
      width: 70px;
      line-height: 30px;
      border-radius: 10px;
      text-align: center;
      background-color: #ece2dc;
      margin-top: 10px;
    }
  
  }
</style>