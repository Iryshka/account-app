<template>
  <div class="carousel-wrapper">
    <h3 class="carousel-wrapper__title">{{ label }}</h3>
    <div class="carousel">
      <div class="carousel__track-container">
        <ul class="carousel__track">
          <li class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile1.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile2.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile3.jpg" alt="" />
          </li>
          <li class="carousel__slide">
            <img class="carousel__image" src="@/assets/images/mobile4.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div class="carousel__buttons">
        <button class="carousel__button carousel__button--left">
          <img src="@/assets/images/arrowleft.svg" alt="" class="" />
        </button>
        <button class="carousel__button carousel__button--right">
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

<script>
// const track = document.querySelector('.carousel__track')
// const slides = Array.from(track.children)
// const nextButton = document.querySelector('.carousel__button--right')
// const prevButton = document.querySelector('.carousel__button--left')
// const dotsNav = document.querySelector('.carousel__nav')
// const dots = Array.from(dotsNav.children)
//
// const slideWidth = slides[0].getBoundingClientRect().width
//
// // slides[0].style.left = slideWidth * 0 + 'px'
// // slides[1].style.left = slideWidth + 'px'
// // slides[2].style.left = slideWidth * 2 + 'px'
//
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px'
// }
//
// slides.forEach(setSlidePosition)
//
// nextButton.addEventListener('click', () => {
//   // const currentSlide = document.querySelector('.currentSlide')
//   console.log('click')
// })
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  height: 600px;
  width: 600px;
  margin: 0 auto;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__track-container {
    position: relative;
    background-color: lightgreen;
    margin: 0 auto;
    height: 50%;
  }

  &__track {
    padding: 0;
    margin: 0 auto;
    list-style: none;
  }

  &__slide {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  &__button {
    width: 30px;
    height: 20px;
    background-color: blue;
    cursor: pointer;
  }

  &__nav {
    background-color: pink;
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }

  &__indicator {
    border: 0;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: $gray-dark;

    &.current-slide {
      background-color: black;
    }
  }
}
</style>
