<template>
  <div class="plans__button">
    <label :for="props.id" class="plans__label">{{ props.label }}</label>
    <input
      type="radio"
      class="plans__input"
      name="plans-radio-buttons"
      :value="props.options"
      v-model="buttonValue"
      :id="props.id"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Object,
    default: () => {}
  },
  label: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const buttonValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="scss" scoped>
.plans {
  .plans__button {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    list-style: none;
  }

  &__label {
    border: 2px solid $gray-light;
    background-color: $white;
    padding: 15px 30px;
    width: 230px;
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
