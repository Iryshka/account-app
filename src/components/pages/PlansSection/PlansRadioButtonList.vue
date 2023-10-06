<template>
  <ul class="desktop">
    <plans-radio-button
      v-for="option in options"
      :id="option.id"
      :key="option.id"
      :label="option.label"
      :class="['plans__radio', { active: option.id === modelValue.id }]"
      @click="onButton(option)"
    />
  </ul>
</template>

<script setup>
import PlansRadioButton from '@/components/pages/PlansSection/PlansRadioButton.vue'
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['update:modelValue'])

const options = ref([
  {
    id: 1,
    label: 'I have VAT number'
  },
  {
    id: 2,
    label: 'No VAT number'
  },
  {
    id: 3,
    label: 'E-commerce business'
  },
  {
    id: 4,
    label: "I don't know"
  }
])

function onButton(option) {
  emit('update:modelValue', option)
}
</script>

<style scoped lang="scss">
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

.plans__radio.active {
  background-color: red;
}
</style>
