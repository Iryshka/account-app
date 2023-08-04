<template>
  <button :class="['button', 'btn-slide-left', `m-${theme}`]" @click="onButton">
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
  transition: all 0.5s ease;
  background: linear-gradient(to left, transparent 50%, $black 50%);
  background-size: 200% 100%;
  background-position: right bottom;

  &:hover {
    background-position: left bottom;
  }
}

.m-primary {
  background-color: $white;
  color: $black;
  border-color: transparent;

  &:hover {
    color: $white;
    border-color: $white;
  }
}

.m-secondary {
  padding: 20px 50px;
  color: $white;
  background-color: $pink;
  border-radius: 12px;
  font-size: 24px;
  border: 3px solid transparent;

  &:hover {
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
