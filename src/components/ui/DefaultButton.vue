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
  font-size: 18px;
  padding: 8px 22px;
  white-space: nowrap;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
  }
}

.m-primary {
  background-color: $white;
  color: $black;
  border-color: transparent;

  &:hover {
  }
}

.m-secondary {
  padding: 20px 50px;
  color: $white;
  background-color: $pink;
  border-radius: 12px;
  font-size: 22px;
  border: 5px solid transparent;

  &:hover {
    background-color: white;
    border: 5px solid $pink;
    color: $pink;
  }
}

.m-tertiary {
  padding: 15px 50px;
  color: $white;
  border-radius: 10px;
}
</style>
