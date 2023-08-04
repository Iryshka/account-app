<template>
  <div class="app">
    <default-layout>
      <router-view> </router-view>
    </default-layout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/default-layout.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log(DefaultLayout)
})
</script>

<style lang="scss">
//body {
//  margin: 0;
//}
</style>
