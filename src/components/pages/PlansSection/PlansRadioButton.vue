<template>
  <div
    @click="clickOptionSelect"
    :class="['plans__button', { 'm-active': modelValue.id === option.id }]"
  >
    <input
      type="radio"
      class="plans__input"
      name="plans-radio-buttons"
      :value="props.option"
      :id="props.id"
    />
    <label :for="props.id" class="plans__label">{{ props.option.label }}</label>
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
  if (props.option.id === 1) {
    console.log('1')
  } else {
    console.log('2')
  }
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
    z-index: 0;
  }

  &__label {
    display: inline-block;
    border: 2px solid $gray-light;
    background-color: $white;
    padding: 15px 30px;
    width: 230px;
    cursor: pointer;
    border-radius: 21px;
    text-align: center;
    z-index: 90;
    transition: background-color 0.3s ease-in, box-shadow 0.3s ease-in;

    &:hover {
      box-shadow: 0 3px 10px pink;
    }
  }

  &__input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
    cursor: pointer;
  }
}
.m-active label {
  background-color: $pink;
}
</style>
