<template>
  <div class="header container">
    <h2 class="logo">enty</h2>

    <default-nav />

    <div class="burger">
      <span class="burger-line-up"></span>
      <span class="burger-line-down"></span>
    </div>
    <default-button text="Get Started" theme="primary" />
  </div>
</template>
<script setup>
import DefaultNav from '../ui/DefaultNav.vue'
import DefaultButton from '../ui/DefaultButton.vue'
</script>
<style lang="scss">
body {
  margin: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: $black;
  font-size: 16px;
}

.logo {
  color: $white;
  font-size: 26px;
  margin: 0;
}

.button {
  display: none;

  @include breakpoints-up(medium) {
    display: block;
  }
}

.burger {
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  cursor: pointer;

  @include breakpoints-up(medium) {
    display: none;
  }

  &-line-up,
  &-line-down {
    display: block;
    width: 100%;
    background-color: $white;
    height: 4px;
  }

  &-line-up.active {
    transform: rotate(45deg);
  }

  &-line-down.active {
    transform: rotate(-45deg);
  }
}
</style>
