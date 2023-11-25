<template>
  <div class="carousel">
    <Carousel :wrap-around="true">
      <Slide class="carousel__slide" v-for="slide in slides" :key="slide.id">
        <h3 class="carousel__title">{{ slide.label }}</h3>
        <div class="carousel__item">
          <img :src="slide.imageUrl" class="carousel__img" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination class="carousel__pagination" />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  {
    id: '1',
    label: 'Connect your bank account',
    imageUrl: 'src/assets/images/mobile1.jpg'
  },
  {
    id: '2',
    label: 'Issue and send invoices to your clients',
    imageUrl: 'src/assets/images/mobile2.jpg'
  },
  {
    id: '3',
    label: 'Upload invoices for the period',
    imageUrl: 'src/assets/images/mobile3.jpg'
  },
  {
    id: '4',
    label: 'Your accountant will create and file the report',
    imageUrl: 'src/assets/images/mobile4.jpg'
  }
]
// import { ref } from 'vue'
//
// const carouselButtonLeft = ref(null)
// const carouselButtonRight = ref(null)

// function onButtonClick(direction) {
//   console.log(direction === 'right' ? 'right' : 'left')
// }
</script>

<style lang="scss">
.carousel {
  &__prev {
    left: -50px;
  }

  &__next {
    right: -50px;
  }

  &__prev,
  &__next {
    display: none;

    @include breakpoints-up(medium) {
      display: block;
      border: 1px solid black;
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss" scoped>
.carousel {
  width: 310px;
  margin: 0 auto;

  &__item {
    min-height: 200px;
    width: 100%;
    color: $black;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
  }

  &__title {
    max-width: 300px;
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__slide {
    padding: 40px 0;
    background-color: $yellow;
    display: flex;
    flex-direction: column;
  }

  &__img {
    border-radius: 15px;
  }

  &__prev,
  &__next {
    box-sizing: content-box;
    border: 5px solid white;
  }

  &__pagination {
    background-color: $yellow;
    padding-bottom: 20px;
  }
}

//* {
//  margin: 0;
//  padding: 0;
//  box-sizing: border-box;
//}
//body {
//  background-color: blue;
//  width: 100vh;
//}
//
//.carousel {
//  position: relative;
//  height: 600px;
//  width: 600px;
//  margin: 0 auto;
//}
//
//.carousel__image {
//  width: 100%;
//  height: 100%;
//  object-fit: cover;
//}
//
//.carousel__track-container {
//  position: relative;
//  background-color: pink;
//  margin: 0 auto;
//  height: 50%;
//}
//
//.carousel__track {
//  padding: 0;
//  margin: 0 auto;
//  list-style: none;
//}
//
//.carousel__slide {
//  position: absolute;
//  top: 0;
//  bottom: 0;
//}
//
//.carousel__buttons {
//  display: flex;
//  justify-content: center;
//  gap: 10px;
//  margin-top: 10px;
//}
//
//.carousel__button {
//  width: 30px;
//  height: 20px;
//  background-color: blue;
//  cursor: pointer;
//}
//
//.carousel__nav {
//  background-color: pink;
//  display: flex;
//  justify-content: center;
//  gap: 5px;
//  margin-top: 10px;
//}
//
//.carousel__indicator {
//  border: 0;
//  border-radius: 50%;
//  width: 15px;
//  height: 15px;
//  background-color: gray;
//}
//
//.carousel.current-slide {
//  background-color: black;
//}
</style>
