<template>
  <div class="advantage-card-mobile">
    <h3 class="advantage-card__title">{{ option }}</h3>
    <img :src="activeImage" alt="" />
    <div class="advantage-card__toggle">
      <img src="@/assets/images/arrowleft.svg" alt="" class="advantage-card__left" />
      <img src="@/assets/images/arrowright.svg" alt="" class="advantage-card__right" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
<style scoped lang="scss"></style>
