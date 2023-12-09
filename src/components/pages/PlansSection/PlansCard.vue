<template>
  <div class="plans__card">
    <h3 class="plans__card-title">{{ title }}</h3>
    <h4 class="plans__card-price">{{ price }}</h4>
    <p class="plans__card-description">{{ description }}</p>
    <div class="plans__card-articles">
      <p class="plans__card-article">{{ firstArticle }}</p>
      <p class="plans__card-article">{{ secondArticle }}</p>
      <p class="plans__card-article">{{ thirdArticle }}</p>
      <p class="plans__card-article">{{ fourthArticle }}</p>
      <p class="plans__card-article">{{ fifthArticle }}</p>
      <p class="plans__card-article">{{ sixthArticle }}</p>
    </div>
    <default-button theme="tertiary">Choose Plan</default-button>
  </div>
</template>
<script setup>
import DefaultButton from '@/components/ui/DefaultButton.vue'

defineProps({
  id: {
    type: Number,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  price: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  firstArticle: {
    type: String,
    default: undefined
  },
  secondArticle: {
    type: String,
    default: undefined
  },
  thirdArticle: {
    type: String,
    default: undefined
  },
  fourthArticle: {
    type: String,
    default: undefined
  },
  fifthArticle: {
    type: String,
    default: undefined
  },
  sixthArticle: {
    type: String,
    default: undefined
  }
})
</script>

<style scoped lang="scss">
.plans__card {
  display: flex;
  flex-direction: column;
  border: 4px solid transparent;
  border-radius: 20px;
  width: 300px;
  background-color: $white;
  padding: 30px;
  margin: 20px;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: $blue-light;
  }

  &-title {
    margin-bottom: 5px;
    font-size: 34px;
    font-weight: normal;
  }

  &-price {
    margin-bottom: 10px;
    font-size: 28px;
  }

  &-description {
    color: $gray-dark;
    font-size: 15px;
  }

  &-articles {
    padding-bottom: 20px;
  }

  &-article {
    margin: 10px 0;
  }
}
</style>
