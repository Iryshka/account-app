<template>
  <section class="hero container">
    <div class="hero__figure hero__square"></div>
    <div class="hero__figure hero__circle"></div>
    <div class="hero__figure hero__line"></div>
    <h2 class="hero__title">Accounting for Estonian Company</h2>
    <p class="hero__paragraph">
      <span class="hero__paragraph-span">Don’t sweat yourself with Accounting!</span> Save time and
      money with Enty
    </p>

    <default-button theme="secondary">Let's Start</default-button>
  </section>
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
  position: relative;
  z-index: 0;
  height: calc(100vh - $header-height);
  background-color: $black;
  text-align: center;

  &__figure {
    position: absolute;
    background-repeat: no-repeat;
    z-index: -1;
  }

  &__square {
    background-image: url('@/assets/images/redsquare.svg');
    width: 100px;
    height: 100px;
    top: 50%;
    right: 10%;
    animation: clockwise 6s infinite linear;
  }

  &__circle {
    top: 20%;
    right: 20%;
    background-image: url('@/assets/images/pinkcircle.svg');
    width: 80px;
    height: 80px;
    animation: counterclockwise 6s infinite linear;
  }

  &__line {
    top: 25%;
    right: 22%;
    background-color: $blue-light;
    width: 15px;
    height: 15px;
    transform: rotate(-25deg);
    animation: clockwise 6s infinite linear;
  }

  &__title {
    font-size: 46px;
    color: $white;
    margin-bottom: 40px;
    @include breakpoints-up(small) {
      font-size: 52px;
    }
    @include breakpoints-up(medium) {
      font-size: 68px;
    }
  }
  &__title-span,
  &__title-span2 {
    display: block;
  }

  &__paragraph {
    font-size: 22px;
    color: $gray-dark;
    margin-bottom: 30px;
    @include breakpoints-up(small) {
      font-size: 24px;
    }
    @include breakpoints-up(medium) {
      font-size: 28px;
    }
  }

  &__paragraph-span {
    display: block;
  }
}

@keyframes clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterclockwise {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
