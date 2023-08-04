<template>
  <section class="hero container">
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
  height: calc(100dvh - 75px);
  background-color: $black;
  text-align: center;

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
</style>
