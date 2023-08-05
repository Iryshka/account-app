<template>
  <section class="advantages">
    <ul class="list">
      <li
        :class="[`m-${color} m-${size} m-${position}`]"
        v-for="{ id, title, description, image, color, size, position } in cards"
        :key="id"
      >
        <advantage-card :id="id" :title="title" :description="description" :image="image" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import AdvantageCard from '@/components/pages/advantages-section/AdvantageCard.vue'
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    title: 'Upload the Document How You Want',
    description:
      'Mobile app, web app, designated email & more ways to upload documents. Once you do that, we will file reports on the behalf of your company',
    image: '@/assets/images/upload-main.svg',
    size: 'big',
    color: 'gradient',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'All types of reporting',
    description:
      'Annual reports, VAT returns, OSS/IOSS declarations, TSDs, you name it. We can take care of all reports that exist in Estonia. ',
    image: '@/assets/images/illustration.svg',
    size: 'small',
    color: 'pink',
    position: 'top-left'
  },
  {
    id: 3,
    title: 'Professional Accountant by your side',
    description:
      'You don’t need to know anything about accounting. Free consultations with professional accountants and constant support from your personal manager ',
    image: '@/assets/images/person.svg',
    size: 'small',
    color: 'blue',
    position: 'top-left'
  },
  {
    id: 4,
    title: 'Unlimited Invoicing, Connection to Bank account, Multi-currency Accounting ',
    description:
      'Will help you make accounting even easier. Spend less time and money on boring paperwork ',
    image: '@/assets/images/select-4-mobile.svg',
    size: 'big',
    color: 'yellow',
    position: 'top-left'
  }
])
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 0 10px;
  background-color: $black;

  @include breakpoints-up(small) {
    grid-template-columns: 1fr 1fr;
  }
}

li {
  box-sizing: border-box;
  border-radius: 25px;
  list-style: none;
  margin: 0 auto;
  padding: 60px 10px 0 10px;
  line-height: 1.4;
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
}
</style>
