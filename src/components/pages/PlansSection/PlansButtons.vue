<template>
  <div class="plans">
    <ul class="plans__buttons">
      <li class="plans__button">
        <default-button
          v-for="(label, index) in buttonLabel"
          :key="index"
          theme="primary"
          class="default-button"
          >{{ label }}</default-button
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import DefaultButton from '@/components/ui/DefaultButton.vue'
import { ref } from 'vue'

const buttonLabel = ref([
  'I have VAT number',
  'No VAT number',
  'E-commerce business',
  "I don't know"
])
</script>
