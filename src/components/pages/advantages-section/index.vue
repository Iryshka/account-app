<template>
  <section class="advantages">
    <ul class="list container">
      <li
        :class="[`m-${color} m-${size} m-${position}`]"
        v-for="{ id, title, description, image, color, size, position, buttons } in cards"
        :key="id"
      >
        <advantage-card :id="id" :title="title" :description="description">
          <div class="images">
            <img :src="image" alt="Advantage Image" class="image" />
          </div>
        </advantage-card>
      </li>
    </ul>
    <advantage-card-mobile-content v-if="windowSize === 'xxs' || windowSize === 'xs'" />
    <advantage-card-desktop-content v-else />

    <common-plans />
  </section>
</template>

<script setup>
import AdvantageCard from '@/components/pages/advantages-section/AdvantageCard.vue'
import AdvantageCardMobileContent from '@/components/pages/advantages-section/AdvantageCardMobileContent.vue'
import CommonPlans from '@/components/pages/PlansSection/CommonPlans.vue'

import useWindowSize from '@/composables/useWindowSize.js'

const { windowSize } = useWindowSize()

import { ref } from 'vue'
import AdvantageCardDesktopContent from '@/components/pages/advantages-section/AdvantageCardDesktopContent.vue'

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
  }
])
</script>

<style scoped lang="scss">
.images {
  width: 100%;
  display: flex;
  justify-content: center;
}
.advantages {
  background-color: $black;
}
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  background-color: $black;

  @include breakpoints-up(small) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    padding: 60px 35px 0 35px;
  }

  @include breakpoints-up(medium) {
    padding: 60px 55px 0 55px;
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

  @include breakpoints-up(small) {
    width: 440px;
  }

  @include breakpoints-up(medium) {
    width: 600px;
  }
}

// MODIFIER CLASSES

.m-gradient {
  background: linear-gradient($green-light, $blue-light);
  overflow: hidden;
}

.m-pink {
  background-color: $pink;
  overflow: hidden;
}

.m-blue {
  background-color: $blue-light;
  overflow: hidden;
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
</style>
