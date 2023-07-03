<template>
  <nav :class="['default-nav', `m-${modifier}`]">
    <ul class="list">
      <li v-for="(listItem, index) in listItems" :key="index" class="item">
        <router-link to="/home" class="link">{{ listItem }}</router-link>
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
  &.m-desktop {
    display: none;
    //display: none;
    //
    //@include breakpoints-up(medium) {
    //  display: flex;
    //  justify-content: flex-end;
    //  width: 80%;
    //}

    .list {
      display: flex;
      justify-content: end;
      align-items: flex-end;
      list-style: none;
    }
  }

  &.m-mobile {
    //@include breakpoints-up(medium) {
    //  display: none;
    //}

    .list {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      list-style: none;
      width: 100%;
      height: 100vh;
      margin: 0;
      background-color: $black;
      transform: translateX(100%);
      transition: transform 0.2s ease-in;

      //@include breakpoints-up(medium) {
      //  display: none;
      //}
    }
  }
}

.active {
  transform: translateX(0%);
}

.link {
  color: $white;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  white-space: nowrap;
}
</style>
