<template>
  <div
    @click="clickOptionSelect"
    :class="['plans__button', { 'm-active': modelValue.id === option.id }]"
  >
    <label :for="props.id" class="plans__label">{{ props.option.label }}</label>
    <input
      type="radio"
      class="plans__input"
      name="plans-radio-buttons"
      :value="props.option"
      :id="props.id"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  option: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['update:modelValue'])

function clickOptionSelect() {
  console.log('Selected option: ', props.option)

  // то то же самое, что, если бы мы в index.vue написали бы
  // activeOption.value = option
  emit('update:modelValue', props.option)
}
</script>

<style lang="scss" scoped>
.plans {
  &__button {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  &__button.m-active {
    background-color: lightpink;
  }

  &__label {
    border: 2px solid $gray-light;
    background-color: $white;
    padding: 15px 30px;
    width: 230px;
    cursor: pointer;
    border-radius: 21px;
    text-align: center;
  }

  &__input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
    cursor: pointer;
  }
}
</style>
