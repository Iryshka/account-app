<template>
  <div class="plans container">
    <h2 class="plans__title">We’ll help you choose the package that suits exactly what you need</h2>
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

    <ul class="plans__list">
      <li v-for="card in cards" :key="card.id" class="plans__item">
        <plans-card
          :title="card.title"
          :price="card.price"
          :description="card.description"
          :firstArticle="card.firstArticle"
          :secondArticle="card.secondArticle"
          :thirdArticle="card.thirdArticle"
          :fourthArticle="card.fourthArticle"
          :fifthArticle="card.fifthArticle"
          :sixthArticle="card.fifthArticle"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import PlansCard from '@/components/pages/PlansSection/PlansCard.vue'
import DefaultButton from '@/components/ui/DefaultButton.vue'
import { ref } from 'vue'

const buttonLabel = ref([
  'I have VAT number',
  'No VAT number',
  'E-commerce business',
  "I don't know"
])

const cards = ref([
  {
    id: 1,
    title: 'Standard',
    price: '42 euro / month',
    description:
      "Covers the necessary accounting needs. Choose it if you don't have VAT number nad your workflow is small.",
    firstArticle: 'Documents yearly',
    secondArticle: 'Documents yearly',
    thirdArticle: 'Documents yearly',
    fourthArticle: 'Documents yearly',
    fifthArticle: 'Documents yearly',
    sixthArticle: 'Documents yearly'
  },
  {
    id: 2,
    title: 'Pro',
    price: '42 euro / month',
    description:
      "Covers the necessary accounting needs. Choose it if you don't have VAT number nad your workflow is small.",
    firstArticle: 'Documents yearly',
    secondArticle: 'Documents yearly',
    thirdArticle: 'Documents yearly',
    fourthArticle: 'Documents yearly',
    fifthArticle: 'Documents yearly',
    sixthArticle: 'Documents yearly'
  },
  {
    id: 3,
    title: 'E-commerce',
    price: '42 euro / month',
    description:
      "Covers the necessary accounting needs. Choose it if you don't have VAT number nad your workflow is small.",
    firstArticle: 'Documents yearly',
    secondArticle: 'Documents yearly',
    thirdArticle: 'Documents yearly',
    fourthArticle: 'Documents yearly',
    fifthArticle: 'Documents yearly',
    sixthArticle: 'Documents yearly'
  }
])
</script>
<style scoped lang="scss">
.plans {
  background-color: $gray-light;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 42px;
    font-weight: normal;
    max-width: 600px;
    text-align: center;
    margin: 50px 0;
  }

  &__list {
    display: flex;
    list-style: none;
    padding: 50px 0;
  }

  &__button {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    list-style: none;

    @include breakpoints-up(small) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoints-up(medium) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.default-button {
  margin: 5px;
  width: 230px;
}
</style>
