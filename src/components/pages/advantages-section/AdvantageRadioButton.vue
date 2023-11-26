<template>
  <li>
    <input
      class="radio"
      type="radio"
      :id="props.id"
      name="images"
      :value="props.image"
      v-model="inputValue"
    />
    <label class="radio__text" :for="props.id">{{ props.label }}</label>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

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

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const emit = defineEmits(['update:modelValue'])

// function onButton() {
//   emit('update:modelValue', props.image)
// }
</script>

<style scoped lang="scss">
.radio__text {
  font-size: 20px;
}
</style>
