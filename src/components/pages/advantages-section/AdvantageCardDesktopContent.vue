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
  background-color: $yellow;
  margin: 10px 0 0 25px;
  min-height: 650px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  overflow: hidden;

  @include breakpoints-up(medium) {
    margin-left: 70px;
  }

  @include breakpoints-up(large) {
    margin-left: 150px;
    padding-bottom: 45px;
  }

  &__info {
    text-align: center;
    padding-top: 60px;
    width: 700px;
    margin: 0 auto;

    @include breakpoints-up(large) {
      width: 100%;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: bolder;
    line-height: 1.2;

    @include breakpoints-up(large) {
      font-size: 38px;
    }
  }

  &__description {
    font-size: 22px;
    line-height: 1.4;
    margin: 20px 0 55px 0;

    @include breakpoints-up(medium) {
      font-size: 24px;
    }

    @include breakpoints-up(large) {
      font-size: 28px;
    }
  }

  &__image {
    flex: 1;
    position: absolute;
    right: 0;
  }

  &__img {
    position: absolute;
    left: -700px;
    border-radius: 50px;

    @include breakpoints-up(small) {
      left: -820px;
    }

    @include breakpoints-up(medium) {
      left: -800px;
    }

    @include breakpoints-up(large) {
      left: -600px;
    }
  }

  ul {
    flex: 1;
  }

  li {
    padding: 10px 0;

    @include breakpoints-up(medium) {
      padding: 20px 0;
    }
  }
}
</style>
