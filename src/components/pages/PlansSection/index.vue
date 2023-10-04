<template>
  <div class="plans container">
    <h2 class="plans__title">We’ll help you choose the package that suits exactly what you need</h2>
    <p class="plans__question">Do you have a VAT number?</p>
    <component :is="currentComponent" :options="options" v-model="currentTab" />

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
import useWindowSize from '@/composables/useWindowSize'
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'

const { windowSize } = useWindowSize()

const currentComponent = ref(null)

const currentTab = ref(null)

const handleResize = () => {
  if (windowSize.value === 'xxs' || windowSize.value === 'xs' || windowSize.value === 's') {
    currentComponent.value = defineAsyncComponent(() =>
      import('@/components/pages/PlansSection/PlansDropdownSelectWrapper.vue')
    )
  } else {
    currentComponent.value = defineAsyncComponent(() =>
      import('@/components/pages/PlansSection/PlansRadioButtonList.vue')
    )
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const activeOption = ref({})

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
</style>
