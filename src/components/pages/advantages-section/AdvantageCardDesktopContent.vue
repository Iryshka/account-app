<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="carousel__track-container">
        <ul ref="track" class="carousel__track">
          <li ref="slide1" class="carousel__slide current-slide">
            <img class="carousel__image" src="@/assets/images/mobile1.jpg" alt="" />
          </li>
          <li ref="slide2" class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile2.jpg" alt="" />
          </li>
          <li ref="slide3" class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile3.jpg" alt="" />
          </li>
          <li ref="slide4" class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile4.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div class="carousel__buttons">
        <button
          @click="onButtonClick('left')"
          ref="carouselButtonLeft"
          class="carousel__button carousel__button--left"
        >
          <img src="@/assets/images/arrowleft.svg" alt="" class="" />
        </button>
        <button
          @click="onButtonClick('right')"
          ref="carouselButtonRight"
          class="carousel__button carousel__button--right"
        >
          <img src="@/assets/images/arrowright.svg" alt="" />
        </button>
      </div>

      <div class="carousel__nav">
        <button class="carousel__indicator carousel-slide"></button>
        <button class="carousel__indicator"></button>
        <button class="carousel__indicator"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carouselButtonLeft = ref(null)
const carouselButtonRight = ref(null)
const track = ref(null)
const slide1 = ref(null)
const slide2 = ref(null)
const slide3 = ref(null)
const slide4 = ref(null)

function onButtonClick(direction) {
  console.log(direction === 'right' ? 'right' : 'left')
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: blue;
  width: 100vh;
}

.carousel {
  position: relative;
  height: 600px;
  width: 600px;
  margin: 0 auto;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__track-container {
  position: relative;
  background-color: pink;
  margin: 0 auto;
  height: 50%;
}

.carousel__track {
  padding: 0;
  margin: 0 auto;
  list-style: none;
}

.carousel__slide {
  position: absolute;
  top: 0;
  bottom: 0;
}

.carousel__buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.carousel__button {
  width: 30px;
  height: 20px;
  background-color: blue;
  cursor: pointer;
}

.carousel__nav {
  background-color: pink;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
}

.carousel__indicator {
  border: 0;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: gray;
}

.carousel.current-slide {
  background-color: black;
}
</style>
