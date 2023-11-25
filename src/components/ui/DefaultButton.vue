<template>
  <button :class="['button', `m-${theme}`]" @click="onButton">
    <slot />
  </button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  size: {
    type: String,
    default: 'default'
  },
  theme: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['onButton'])

function onButton() {
  emit('onButton')
}
</script>

<style scoped lang="scss">
.button {
  font-size: 16px;
  padding: 6px 20px;
  white-space: nowrap;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  @include breakpoints-up(medium) {
    padding: 8px 22px;
    font-size: 18px;
  }
}

.m-primary {
  background-color: $white;
  color: $black;
  border-color: transparent;

  &:active {
    transition: 0.3s ease;
    background-color: $blue-light;
    color: $black;
  }
}

.m-secondary {
  padding: 16px 44px;
  color: $white;
  background-color: $pink;
  border-radius: 12px;
  font-size: 22px;
  transition: transform 0.3s ease;
  border: 5px solid transparent;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transition: 0.3s ease;
    background-color: $yellow;
    color: $black;
  }

  @include breakpoints-up(medium) {
    padding: 20px 50px;
  }
}
</style>
