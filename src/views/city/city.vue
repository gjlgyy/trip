<template>
  <div class="city">
    <div class="top">
      <city-search/>
      <van-tabs v-model:active="activeValue" line-height="2">
        <template v-for="(value, key,index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value,key,index) in allCities">
        <city-group v-show="activeValue === key " :groupData="value"/>
      </template>
    </div>
  </div> 
</template>

<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city.js"

import CitySearch from "./cpns/city-search.vue"
import CityGroup from "./cpns/city-group.vue"
const activeValue = ref("")
const cityStore = useCityStore()
cityStore.fetchAllCitesData()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[activeValue.value])
</script>

<style lang="less" scoped>
  .city {
    .top {
      position: relative;
      z-index: 1000;
    }
    .content {
      height: calc(100vh - 98px);
      overflow-y: scroll;
    }
  }
</style>