<template>
  <div class="mobile-card container">
    <div class="mobile-card__info">
      <h3 class="mobile-card__title">
        Unlimited Invoicing, Connection to Bank account, Multi-currency Accounting
      </h3>
      <p class="mobile-card__description">
        Will help you make accounting even easier. Spend less time and money on boring paperwork
      </p>
    </div>
    <carousel-mobile />
  </div>
</template>
<script setup>
import CarouselMobile from '@/components/pages/advantages-section/CarouselMobile.vue'
</script>

<style lang="scss" scoped>
.mobile-card {
  margin: 10px;
  border-radius: 15px;
  padding: 30px 0;
  background-color: $yellow;

  &__info {
    max-width: 380px;
    margin: 0 auto;
    text-align: center;
  }

  &__title {
    font-size: 30px;
    font-weight: bolder;
    line-height: 1.2;
    margin-bottom: 20px;
    color: $black;
  }
}
</style>
