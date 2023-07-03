import { getCityAll } from "@/services"
import { defineStore } from "pinia"

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: "合肥"
    }
  }),
  actions: {
    async fetchAllCitesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore