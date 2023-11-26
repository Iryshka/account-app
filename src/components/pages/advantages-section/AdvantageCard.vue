<template>
  <div class="advantage-card">
    <h3 class="advantage-card__title">{{ title }}</h3>
    <p class="advantage-card__description">{{ description }}</p>
  </div>

  <slot />
  <div class="advantage-card-info"></div>
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
    type: String,
    default: undefined
  },
  imageLabel: {
    type: String,
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

  &-info {
    margin: auto;
    max-width: 380px;

    @include breakpoints-up(small) {
      max-width: 580px;
    }

    @include breakpoints-up(medium) {
      max-width: 800px;
    }

    @include breakpoints-up(big) {
      max-width: 1000px;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: bolder;
    line-height: 1.2;
    margin: 0 auto 10px auto;
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
</style>
