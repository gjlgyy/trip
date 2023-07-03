<template>
  <div class="city-home">
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="城市/区域/位置"
      show-action
      @cancel="cancelClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const searchValue = ref("")
const cancelClick = () => {
  router.back()
}
</script>

<style scoped>

</style>