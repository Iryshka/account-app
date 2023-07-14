import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      mobileNavigationDisplay: false
    }
  },
  actions: {
    toggleMobileNavigationDisplay() {
      this.mobileNavigationDisplay = !this.mobileNavigationDisplay
    }
  }
})
