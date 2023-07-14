<template>
  <div @click="onBurger" class="burger">
    <span class="first-line"></span>
    <span class="second-line"></span>
  </div>
</template>

<script setup>
import { useLayoutStore } from '@/store/layout'

const layoutStore = useLayoutStore()
function onBurger() {
  layoutStore.toggleMobileNavigationDisplay()
}
</script>

<style scoped lang="scss">
.burger {
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  cursor: pointer;

  @include breakpoints-up(small) {
    display: none;
  }
}

.first-line,
.second-line {
  display: block;
  width: 100%;
  background-color: $white;
  height: 4px;
}
</style>
