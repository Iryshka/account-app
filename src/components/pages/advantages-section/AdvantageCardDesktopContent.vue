<template>
  <div class="desktop-card container">
    <div class="desktop-card__info">
      <h3 class="desktop-card__title">
        Unlimited Invoicing, Connection to Bank account, Multi-currency Accounting
      </h3>
      <p class="desktop-card__description">
        Will help you make accounting even easier. Spend less time and money on boring paperwork
      </p>
    </div>
    <div class="advantage-card-desktop">
      <ul>
        <advantage-radio-button
          v-for="{ id, label, image } in buttonOptions"
          :id="id"
          :key="id"
          :label="label"
          :image="image"
          v-model="activeImage"
        />
      </ul>
      <div class="desktop-card__image">
        <img :src="activeImage" alt="" class="desktop-card__img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AdvantageRadioButton from '@/components/pages/advantages-section/AdvantageRadioButton.vue'
import { onMounted, ref } from 'vue'

const buttonOptions = ref([
  {
    id: 1,
    label: 'Connect your bank account',
    image: 'src/assets/images/Group 11990.jpg'
  },
  {
    id: 2,
    label: 'Issue and send invoices to your clients',
    image: 'src/assets/images/Group 11990 (1).jpg'
  },
  {
    id: 3,
    label: 'Upload invoices for the period',
    image: 'src/assets/images/Group 11992.jpg'
  },
  {
    id: 4,
    label: 'Our accountant will create and file the report',
    image: 'src/assets/images/Group 12010.jpg'
  }
])

const activeImage = ref(null)

function setDefaultState() {
  activeImage.value = buttonOptions.value[0].image
}

onMounted(() => setDefaultState())
</script>
<style scoped lang="scss">
.advantage-card-desktop {
  position: relative;
  right: 0;
  bottom: 0;
  display: flex;
  width: 1150px;
}

.desktop-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: $yellow;
  margin: 10px 0 0 50px;
  height: 800px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  overflow: hidden;

  &__info {
    text-align: center;
    padding-top: 60px;
    width: 700px;
    margin: 0 auto;
  }

  &__title {
    font-size: 30px;
    font-weight: bolder;
    line-height: 1.2;
  }

  &__description {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 55px;
  }

  &__image {
    flex: 1;
    position: absolute;
    right: 0;
  }

  &__img {
    border-radius: 35px;
  }

  ul {
    flex: 1;
    padding-bottom: 130px;
  }

  img {
    width: 600px;
  }

  li {
    padding: 20px 0;
  }
}
</style>
