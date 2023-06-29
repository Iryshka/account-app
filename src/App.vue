<template>
  <div class="app">
    <default-layout>
      <router-view />
    </default-layout>
  </div>
  <!-- <div>
    <component :is="activeComponent" @click="toggleModals"></component>
  </div> -->
</template>

<script setup>
import DefaultLayout from '@/layouts/default-layout.vue'

// import { ref, reactive, computed } from 'vue'

// const components = reactive({
//   0: {
//     component: 'DefaultHeader'
//   },
//   1: {
//     component: 'MainContent'
//   }
// })

// const activeKey = ref(0)

// const activeComponent = computed(() => components[activeKey.value].component)

// function toggleModals() {
//   activeKey.value = activeKey.value === 0 ? 1 : 0
// }
</script>

<style scoped lang="scss"></style>
