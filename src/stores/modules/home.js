import { getHotSuggest } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: []
  }),
  actions: {
    async fatchGetHotSuggest() {
      const res = await getHotSuggest()
      this.hotSuggest = res.data
    }
  }
})

export default useHomeStore