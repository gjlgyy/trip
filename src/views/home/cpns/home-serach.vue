<template>
  <div class="search">
    <div class="localtion">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="current" @click="getLocaltion">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="section" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <div class="live">入住</div>
          <div class="time">{{ startDate }}</div>
        </div>
      </div>
      <div class="statistics">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <div class="live">离店</div>
          <div class="time">{{ endDate }}</div>
        </div>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :show-confirm="false"
      @confirm="onConfirm" 
    />
    <div class="section title">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section title">
      关键字/位置/民宿名
    </div>
    <div class="section hot-suggest">
      <template v-for="(item,index) in hotSuggest" :key="index">
        <div class="suggest" :style="{color: item.tagText.color, background: item.tagText.background.color}">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city.js";
import { storeToRefs } from "pinia";
import { formatMonthDay,getDiffDays } from "@/utils/format_date.js"
import { ref } from "vue";

const router = useRouter();
const cityClick = () => {
  router.push("/city");
};

const getLocaltion = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("成功的回调", res);
    },
    (err) => {
      console.log("失败的回调", res); 
    }
  );
};
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)

const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))

const showCalendar = ref(false)
const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  showCalendar.value = false
}

defineProps({
  hotSuggest: {
    type: Array,
    default: []
  }
})
</script>

<style lang="less" scoped>
.search {
  
  .localtion {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    .city {
      flex: 1;
      font-size: 16px;
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
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
    .end {
      margin-right: 30px;
    }
    .start, .end {
      .date {
        .live {
          color: #999;
          font-size: 12px;
        }
        .time {
          font-size: 16px;
          margin-top: 3px;
        }
      }
    }
    &.title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #999;
    }
    &.hot-suggest {
      justify-content: start;
      .suggest {
        padding: 5px 10px;
        margin: 5px;
        border-radius: 10px;
        font-size: 12px;
      }
    }
  }
}
</style>