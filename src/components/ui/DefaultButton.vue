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
  padding: 10px 25px;
  white-space: nowrap;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;

  .m-primary {
    background-color: $white;
    color: $black;
    border-color: transparent;

    &:hover {
      background-color: $black;
      color: $white;
      border-color: $white;
    }
  }

  .m-secondary {
    padding: 20px 50px;
    color: $white;
    background-color: $pink;
    border-radius: 18px;
    font-size: 24px;
    border: 2px solid transparent;

    &:hover {
      background-color: $white;
      color: $pink;
      border: 2px solid $pink;
    }
  }
}

.m-tertiary {
  padding: 15px 50px;
  color: $white;
  border-radius: 10px;
}
</style>
