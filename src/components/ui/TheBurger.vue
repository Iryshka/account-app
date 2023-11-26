<template>
  <div class="click">
    <input @click="onBurger" id="toggle" type="checkbox" />
    <label for="toggle" class="burger">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </label>
  </div>
  <!--  <div class="burger" @click="onBurger">-->
  <!--    <span class="first-line"></span>-->
  <!--    <span class="second-line"></span>-->
  <!--    <span class="third-line"></span>-->
  <!--  </div>-->
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['burger'])

function onBurger() {
  console.log('click')
  emit('burger')
}
</script>

<style scoped lang="scss">
.click {
  display: flex;
}
#toggle {
  z-index: -1;
}

.burger {
  display: block;
  cursor: pointer;
}

.burger span {
  width: 35px;
  height: 4px;
  display: block;
  border-radius: 3px;
  background-color: $white;
  margin-top: 8px;
  transition: all 0.3s ease-in-out;
}

/**
Animations
**/
#toggle:checked + .burger .top {
  transform: rotate(-45deg);
  margin-top: 20px;
}
#toggle:checked + .burger .bottom {
  opacity: 0;
  transform: rotate(45deg);
}
#toggle:checked + .burger .middle {
  transform: rotate(45deg);
  margin-top: -4px;
}

.click {
  @include breakpoints-up(small) {
    display: none;
  }
}

//.burger {
//  width: 35px;
//  height: 25px;
//  display: flex;
//  flex-direction: column;
//  justify-content: space-between;
//  z-index: 1;
//  cursor: pointer;
//
//  @include breakpoints-up(small) {
//    display: none;
//  }
//}
//
//.first-line,
//.second-line,
//.third-line {
//  display: block;
//  width: 100%;
//  background-color: $white;
//  height: 4px;
//}
</style>
