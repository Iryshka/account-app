<template>
  <div class="advantage-card">
    <div class="advantage-info">
      <h3 class="advantage-card__title">{{ title }}</h3>
      <p class="advantage-card__description">{{ description }}</p>
    </div>
    <img :src="image" alt="Advantage Image" class="image" />
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
  image: {
    type: URL,
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

<style scoped lang="scss">
.advantage-card {
  display: flex;
  flex-direction: column;
  text-align: center;

  &__title {
    font-size: 40px;
    font-weight: bolder;
    line-height: 1.2;
    margin: 0 auto 10px auto;

    @include breakpoints-up(medium) {
      font-size: 80px;
    }
  }

  &__description {
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 55px;

    @include breakpoints-up(medium) {
      font-size: 24px;
    }
  }
}

.advantage-info {
  margin: 0 auto;
}

.image {
  width: 100%;
}
</style>
