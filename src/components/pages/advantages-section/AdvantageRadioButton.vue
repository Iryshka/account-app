<template>
  <li>
    <label :for="props.id">{{ props.label }}</label>
    <input type="radio" :id="props.id" name="images" :value="props.image" @input="onButton" />
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined
  },
  id: {
    type: Number,
    default: undefined
  },
  label: {
    type: String,
    default: undefined
  },
  image: {
    type: String,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])

function onButton() {
  emit('update:modelValue', props.image)
}
</script>

<style scoped lang="scss"></style>
