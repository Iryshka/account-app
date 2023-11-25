import { defineStore } from 'pinia'

export const useTariffsStore = defineStore('tariffs', {
  // 1. сделать в state поле tariffs и перенести их сюда из компонента plansSection/index.vue - const cards
  // 2. сделать поле filters и перенести сюда из того же компонента - const options
  // General task - каждый тариф будет содерждать массив доступных ему опций, т.е
  // 3. вынести активную опцию в стор filter =>
  state: () => {}
  // getters: {},
  //
  // actions: {
  //
  // }
})

// мобилка и десктоп хеддер, хиро полностью включая навигацию все косяки надо закрывть вообще поностью,
