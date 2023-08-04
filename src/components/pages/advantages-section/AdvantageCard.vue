<template>
  <div class="advantage-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: undefined
  },
  position: {
    type: String,
    default: undefined
  }
})
</script>

<style scoped lang="scss"></style>
