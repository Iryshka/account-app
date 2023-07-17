<template>
  <div class="app">
    <default-layout>
      <router-view />
    </default-layout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/default-layout.vue'
import TheBurger from '@/components/ui/TheBurger.vue'
</script>

<style lang="scss">
//body {
//  margin: 0;
//}
</style>
