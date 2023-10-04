<template>
  <PlansDropdownSelect :options="options" />
</template>

<script setup>
import PlansDropdownSelect from '@/components/pages/PlansSection/PlansDropdownSelect.vue'
import { defineProps } from 'vue'

defineProps({
  options: {
    type: Array,
    default: () => []
  }
})

// const options = ref([
//   {
//     id: 1,
//     label: 'I have VAT number'
//   },
//   {
//     id: 2,
//     label: 'No VAT number'
//   },
//   {
//     id: 3,
//     label: 'E-commerce business'
//   },
//   {
//     id: 4,
//     label: "I don't know"
//   }
// ])
</script>
