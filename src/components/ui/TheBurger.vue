<template>
  <div class="burger" @click="onBurger">
    <span class="first-line"></span>
    <span class="second-line"></span>
    <span class="third-line"></span>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['burger'])

function onBurger() {
  emit('burger')
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
.second-line,
.third-line {
  display: block;
  width: 100%;
  background-color: $white;
  height: 4px;
}
</style>
