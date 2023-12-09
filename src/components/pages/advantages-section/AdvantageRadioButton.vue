<template>
  <li class="radio__wrapper">
    <input
      class="radio"
      type="radio"
      :id="props.id"
      name="images"
      :value="props.image"
      v-model="inputValue"
    />

    <label class="radio__text" :for="props.id">{{ props.label }}</label>
  </li>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined
  },
  id: {
    type: Number,
    default: undefined
  },
  label: {
    type: String,
    default: undefined
  },
  image: {
    type: String,
    default: undefined
  }
})

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const emit = defineEmits(['update:modelValue'])

// function onButton() {
//   emit('update:modelValue', props.image)
// }
</script>

<style scoped lang="scss">
.radio__wrapper {
  input[type='radio'] {
    position: absolute;
    z-index: -10;

    + .radio__text {
      display: inline-block;
      padding-left: 40px;
      width: 320px;
      position: relative;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;

      @include breakpoints-up(medium) {
        font-size: 20px;
        line-height: 30px;
      }

      @include breakpoints-up(large) {
        font-size: 26px;
        width: 450px;
        padding-left: 70px;
      }

      &::before,
      &::after {
        content: '';
        border-radius: 50%;
        margin-right: 25px;
        display: block;
        background-color: transparent;
        cursor: pointer;
        position: absolute;
        transition: background-color 0.2s ease;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border: 2px solid darken($black, 25%);
        width: 28px;
        height: 28px;
        right: calc(80% + 20px);

        @include breakpoints-up(medium) {
          width: 34px;
          height: 34px;
          right: calc(80% + 20px);
        }

        @include breakpoints-up(large) {
          width: 47px;
          height: 47px;
          right: calc(80% + 20px);
        }
      }

      &::after {
        background-color: transparent;
        width: 13px;
        height: 13px;
        right: calc(80% + 28.5px);

        @include breakpoints-up(medium) {
          width: 17px;
          height: 17px;
          right: calc(80% + 29.5px);
        }

        @include breakpoints-up(large) {
          background-color: transparent;
          width: 29px;
          height: 29px;
          right: calc(80% + 30px);
        }
      }
    }

    &:checked {
      + .radio__text {
        &::before {
          background-color: transparent;
        }

        &::after {
          background-color: $black;
        }
      }
    }
    &:focus {
      + .radio__text {
        &:before {
          outline: none;
          border-color: $black;
        }
      }
    }

    + .radio__text {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
