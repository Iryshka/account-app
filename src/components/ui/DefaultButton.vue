<template>
  <div>
    <button :class="['button', `m-${theme}`]" @click="onButton">{{ text }}</button>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  },

  theme: {
    type: String,
    default: 'primary'
  }
})
</script>
<style scoped lang="scss">
div {
  display: none;

  @include breakpoints-up(medium) {
    display: block;
  }
}
.button {
  padding: 10px 25px;
  white-space: nowrap;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;
}

.m-primary {
  background-color: $white;
  color: $black;
  border: 2px solid transparent;

  &:hover {
    background-color: $black;
    color: $white;
    border: 2px solid $white;
  }
}

.m-secondary {
  padding: 20px 50px;
  color: $white;
  background-color: $pink;
  border-radius: 18px;
  font-size: 24px;
  border: 3px solid transparent;

  &:hover {
    background-color: $white;
    color: $pink;
    border: 3px solid $pink;
  }
}

.m-tertiary {
  padding: 15px 50px;
  color: $white;
  border-radius: 10px;
}
</style>
