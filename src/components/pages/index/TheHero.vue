<template>
  <div class="hero container">
    <div class="hero__text">
      <h1 class="hero__title">Accounting for Estonian Company</h1>
      <p class="hero__paragraph1">Don’t sweat yourself with Accounting!</p>
      <p class="hero__paragraph2">Save time and money with Enty</p>
      <default-button theme="secondary">Let's Start</default-button>
    </div>
  </div>
</template>
<script setup>
import DefaultButton from '@/components/ui/DefaultButton.vue'
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $black;

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px 0;
    text-align: center;
  }

  &__title {
    font-size: 49px;
    @include breakpoints-up(medium) {
      font-size: 58px;
      width: 70%;
    }
    color: $white;
  }

  &__paragraph1,
  &__paragraph2 {
    font-size: 24px;
    color: $gray-dark;
  }

  &__paragraph2 {
    margin-bottom: 30px;
  }
}
</style>
