<template>
  <div class="header container">
    <a href="#" class="header__logo-link"><h1 class="logo">enty</h1></a>
    <Transition name="slide-fade">
      <default-nav v-if="isMobileNavigationOpen" class="mobile" modifier="mobile" />
    </Transition>
    <default-nav class="desktop" modifier="desktop" />

    <default-button theme="primary">Get Started!</default-button>
    <the-burger @burger="toggleMobileNavigationDisplay" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import TheBurger from '@/components/ui/TheBurger.vue'
import DefaultNav from '@/components/layouts/default-layout/DefaultNav.vue'
import DefaultButton from '@/components/ui/DefaultButton.vue'

const isMobileNavigationOpen = ref(false)

function toggleMobileNavigationDisplay() {
  isMobileNavigationOpen.value = !isMobileNavigationOpen.value
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  height: 75px;
  background-color: $black;
  font-size: 16px;

  &__logo-link {
    text-decoration: none;
  }
}

.logo {
  color: $white;
  font-size: 26px;
  margin: 0;

  @include breakpoints-up(small) {
    font-size: 30px;
  }

  @include breakpoints-up(medium) {
    font-size: 34px;
  }
}

.button {
  display: none;

  @include breakpoints-up(small) {
    display: block;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.9, 0.9, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(70px);
  opacity: 0;
}
</style>
