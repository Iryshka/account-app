<template>
  <div class="header container">
    <h1 class="logo">enty</h1>

    <default-nav class="mobile" modifier="mobile" />
    <default-nav class="desktop" modifier="desktop" />

    <the-burger />
    <default-button theme="primary">Get Started!</default-button>
  </div>
</template>
<script setup>
// Components
import TheBurger from '@/components/ui/TheBurger.vue'
import DefaultNav from '@/components/layouts/default-layout/DefaultNav.vue'
import DefaultButton from '@/components/ui/DefaultButton.vue'

// // Composables
// import useWindowSize from '@/composables/useWindowSize'

import { computed } from 'vue'

// const { windowSize } = useWindowSize()

// const test = computed(() => window.innerWidth)

// const isMobile = computed(() => {
//   return windowSize.value === 'xs' || windowSize.value === 's'
// })
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: $black;
  font-size: 16px;
}

.logo {
  color: $white;
  font-size: 26px;
  margin: 0;
}

.button {
  display: none;

  @include breakpoints-up(small) {
    display: block;
  }
}
</style>
