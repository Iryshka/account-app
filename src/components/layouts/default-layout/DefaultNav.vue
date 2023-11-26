<template>
  <nav :class="['default-nav', `m-${modifier}`]">
    <ul class="list">
      <li v-for="(listItem, index) in listItems" :key="index" class="item">
        <router-link to="#" class="link">{{ listItem }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'

const listItems = reactive(['Control Panel', 'Incorporation', 'Accounting', 'Pricing', 'Explore'])

defineProps({
  modifier: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped lang="scss">
.default-nav {
  width: 70%;

  &.mobile {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    background-color: $black;
  }
}

.mobile {
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 28px;
    align-items: center;
    height: 100vh;
    .link {
      font-size: 19px;
    }
  }
}

.desktop {
  display: none;

  @include breakpoints-up(small) {
    display: flex;
    justify-content: end;
  }
  .list {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    list-style: none;
  }
}

.link {
  color: $white;
  text-decoration: none;
  font-size: 16px;
  margin: 15px;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -10px;
    left: 0;
    background-color: $blue-light;
    transform-origin: bottom right;

    transition: 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @include breakpoints-up(medium) {
    font-size: 18px;
  }

  &:active {
    color: $blue-light;
  }
}
</style>
