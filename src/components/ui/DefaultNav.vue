<template>
  <div>
    <nav class="nav-desktop">
      <ul class="list-desktop">
        <li v-for="(listItem, index) in listItems" :key="index" class="list-item">
          <routerl-link to="/home" class="list-link">{{ listItem }}</routerl-link>
        </li>
      </ul>
    </nav>
    <nav class="nav-mobile">
      <ul class="list-mobile">
        <li v-for="(listItem, index) in listItems" :key="index" class="list-item">
          <routerl-link to="/home" class="list-link">{{ listItem }}</routerl-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const listItems = reactive(['Control Panel', 'Incorporation', 'Accounting', 'Pricing', 'Explore'])
</script>

<style scoped lang="scss">
div {
  width: 85%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-mobile {
  @include breakpoints-up(medium) {
    display: none;
  }
}

.list-mobile {
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

  @include breakpoints-up(medium) {
    display: none;
  }
}

.list-link {
  color: $white;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  white-space: nowrap;
}

.nav-desktop {
  display: none;

  @include breakpoints-up(medium) {
    display: flex;
    justify-content: flex-end;
    width: 80%;
  }
}

.list-desktop {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  list-style: none;
}

.active {
  transform: translateX(0%);
}
</style>
