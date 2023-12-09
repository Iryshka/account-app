<template>
  <div class="plans container">
    <h2 class="plans__title">We’ll help you choose the package that suits exactly what you need</h2>
    <p class="plans__question">Do you have a VAT number?</p>
    <plans-dropdown-select :options="options" class="mobile" v-model="activeOption" />

    <ul class="desktop">
      <plans-radio-button
        v-for="option in options"
        :key="option.id"
        :option="option"
        class="plans__radio"
        v-model="activeOption"
      />
    </ul>

    <ul class="plans__list">
      <li v-for="card in filteredCards" :key="card.id" class="plans__item">
        <plans-card
          :title="card.title"
          :price="card.price"
          :description="card.description"
          :firstArticle="card.firstArticle"
          :secondArticle="card.secondArticle"
          :thirdArticle="card.thirdArticle"
          :fourthArticle="card.fourthArticle"
          :fifthArticle="card.fifthArticle"
          :sixthArticle="card.sixthArticle"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import PlansCard from '@/components/pages/PlansSection/PlansCard.vue'
import PlansDropdownSelect from '@/components/pages/PlansSection/PlansDropdownSelect.vue'
import PlansRadioButton from '@/components/pages/PlansSection/PlansRadioButton.vue'

import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  const result = 'answer'
  console.log('zapros')
})

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

const activeOption = ref({})

const cards = ref([
  {
    id: 1,
    title: 'Standard',
    price: '42 euro / month',
    description:
      "Covers the necessary accounting needs. Choose it if you don't have a VAT number and your workflow is small.",
    firstArticle: 'Invoice and Expense Tracking',
    secondArticle: 'Bank Reconciliation',
    thirdArticle: 'Financial Statements',
    fourthArticle: 'Tax Preparation Assistance',
    fifthArticle: 'Customer Support (Email)',
    sixthArticle: 'Basic Reporting Features',
    tariffs: [1, 2, 4]
  },
  {
    id: 2,
    title: 'Pro',
    price: '59 euro / month',
    description:
      'Ideal for growing businesses with more complex needs. Suitable if you have a VAT number.',
    firstArticle: 'All Standard features',
    secondArticle: 'Advanced Reporting and Analytics',
    thirdArticle: 'Multi-currency Support',
    fourthArticle: 'Priority Customer Support',
    fifthArticle: 'Integration with 3rd Party Apps',
    sixthArticle: 'Customizable Templates',
    tariffs: [1, 4]
  },
  {
    id: 3,
    title: 'E-commerce',
    price: '79 euro / month',
    description:
      'Tailored for online businesses. Includes features to manage e-commerce transactions.',
    firstArticle: 'All Standard features',
    secondArticle: 'E-commerce Transaction Tracking',
    thirdArticle: 'Inventory Management',
    fourthArticle: 'Order Processing',
    fifthArticle: 'E-commerce Reporting',
    sixthArticle: '24/7 E-commerce Support',
    tariffs: [3]
  }
])

const filteredCards = computed(() => {
  if (!activeOption.value.id) {
    return cards.value
  }
  return cards.value.filter((card) => card.tariffs.includes(activeOption.value.id))
})
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

  &__question {
    font-size: 26px;
    margin-bottom: 30px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 20px 0;

    @include breakpoints-up(medium) {
      flex-direction: row;
    }
  }

  &__radio {
    width: 230px;
  }
}

.desktop {
  display: none;

  @include breakpoints-up(small) {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoints-up(medium) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    justify-content: center;
    align-items: center;
  }
}

.mobile {
  @include breakpoints-up(small) {
    display: none;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
