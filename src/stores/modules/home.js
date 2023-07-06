import { getHotSuggest, getCategory } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: [],
    categories: []
  }),
  actions: {
    async fatchGetHotSuggest() {
      const res = await getHotSuggest()
      this.hotSuggest = res.data
    },
    async fetchGetCategory() {
      const res = await getCategory()
      this.categories = res.data
    }
  }
})

export default useHomeStore