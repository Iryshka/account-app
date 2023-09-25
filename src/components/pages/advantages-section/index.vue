<template>
  <section class="advantages">
    <ul class="list container">
      <li
        :class="[`m-${color} m-${size} m-${position}`]"
        v-for="{ id, title, description, image, color, size, position, buttons } in cards"
        :key="id"
      >
        <advantage-card :id="id" :title="title" :description="description">
          <div v-if="buttons" class="advantage-card-desktop">
            <ul>
              <advantage-radio-button
                v-for="{ id, label, image } in buttons"
                :id="id"
                :key="id"
                :label="label"
                :image="image"
                v-model="activeImage"
              />
            </ul>
            <img :src="activeImage" alt="" />
          </div>
          <img v-else :src="image" alt="Advantage Image" class="image" />
        </advantage-card>
      </li>
    </ul>
    <advantage-card-mobile-content v-if="windowSize" />
    <p>{{ windowSize }}</p>
    <common-plans />
  </section>
</template>

<script setup>
import AdvantageCard from '@/components/pages/advantages-section/AdvantageCard.vue'
import AdvantageRadioButton from '@/components/pages/advantages-section/AdvantageRadioButton.vue'
import AdvantageCardMobileContent from '@/components/pages/advantages-section/AdvantageCardMobileContent.vue'
import CommonPlans from '@/components/pages/PlansSection/CommonPlans.vue'

import useWindowSize from '@/composables/useWindowSize.js'

const { windowSize } = useWindowSize()

import { ref } from 'vue'

const activeImage = ref(null)

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

const cards = ref([
  {
    id: 1,
    title: 'Upload the Document How You Want',
    description:
      'Mobile app, web app, designated email & more ways to upload documents. Once you do that, we will file reports on the behalf of your company',
    image: 'src/assets/images/upload-main.svg',
    imageLabel: 'src/assets/images/Calculator.svg',
    size: 'big',
    color: 'gradient',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'All types of reporting',
    description:
      'Annual reports, VAT returns, OSS/IOSS declarations, TSDs, you name it. We can take care of all reports that exist in Estonia. ',
    image: 'src/assets/images/illustration.svg',
    size: 'small',
    color: 'pink',
    position: 'start'
  },
  {
    id: 3,
    title: 'Professional Accountant by your side',
    description:
      'You don’t need to know anything about accounting. Free consultations with professional accountants and constant support from your personal manager ',
    image: 'src/assets/images/person.svg',
    size: 'small',
    color: 'blue',
    position: 'reverse'
  },
  {
    id: 4,
    title: 'Unlimited Invoicing, Connection to Bank account, Multi-currency Accounting',
    description:
      'Will help you make accounting even easier. Spend less time and money on boring paperwork ',
    image: 'src/assets/images/select-4-mobile.svg',
    size: 'big',
    color: 'yellow',
    position: 'top-left',
    buttons: buttonOptions.value
  }
])
</script>

<style scoped lang="scss">
.advantages {
  background-color: $black;
}
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 0 10px;
  background-color: $black;

  @include breakpoints-up(small) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 50px;
  }
}

li {
  box-sizing: border-box;
  border-radius: 25px;
  list-style: none;

  padding: 60px 15px 0 15px;
  line-height: 1.4;
  width: 100%;

  @include breakpoints-up(small) {
    padding: 60px 75px 0 75px;
  }

  @include breakpoints-up(medium) {
    padding: 60px 135px 0 135px;
  }

  @include breakpoints-up(big) {
    padding: 60px 165px 0 165px;
  }
}

.m-big {
  @include breakpoints-up(small) {
    grid-column: span 2;
  }
}

.m-small {
  @include breakpoints-up(small) {
    grid-column: span 1;
  }
}

.image {
  width: 100%;
}

// MODIFIER CLASSES

.m-gradient {
  background: linear-gradient($green-light, $blue-light);
}

.m-pink {
  background-color: $pink;
}

.m-blue {
  background-color: $blue-light;
}

.m-yellow {
  background-color: $yellow;
  margin-bottom: 100px;
  transform: translateX(100px);
  overflow: hidden;
  padding: 50px 0 50px 50px;
}

.m-reverse .advantage-card {
  flex-direction: column-reverse;
}

.m-start .advantage-card {
  @include breakpoints-up(small) {
    text-align: left;
  }
}

.advantage-card-desktop {
  display: flex;
  flex-direction: row;
  position: relative;

  ul {
    flex: 1;
    padding-bottom: 130px;
  }

  img {
    flex: 1;
    width: 600px;
    position: absolute;
    right: 0;
  }

  li {
    padding: 20px 0;
  }
}
</style>
