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
  transition: color 0.3s ease-in, background-color 0.3s ease-in, box-shadow 0.3s ease-in;

  @include breakpoints-up(medium) {
    padding: 6px 16px;
    font-size: 18px;
  }
}

.m-primary {
  background-color: $white;
  color: $black;
  border-color: transparent;

  &:active {
    background-color: $blue-light;
    color: $black;
  }

  &:hover {
    box-shadow: 0 3px 10px $yellow;
  }

  @include breakpoints-up(large) {
    padding: 10px 30px;
  }
}

.m-secondary {
  padding: 16px 44px;
  color: $white;
  background-color: $pink;
  border-radius: 12px;
  font-size: 22px;
  border: 5px solid transparent;

  &:active {
    background-color: $yellow;
    color: $black;
  }

  &:hover {
    box-shadow: 0 3px 10px $pink;
  }

  @include breakpoints-up(medium) {
    padding: 10px 30px;
  }

  @include breakpoints-up(large) {
    padding: 20px 50px;
  }
}

.m-tertiary {
  padding: 7px 18px;
  color: $white;
  background-color: $pink;
  border-radius: 12px;
  font-size: 18px;

  &:active {
    background-color: $yellow;
    color: $black;
  }

  &:hover {
    box-shadow: 0 3px 10px $pink;
  }

  @include breakpoints-up(medium) {
    padding: 10px 30px;
  }

  @include breakpoints-up(large) {
    padding: 20px 50px;
  }
}
</style>
