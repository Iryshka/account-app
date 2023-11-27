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
    opacity: 0;

    + .radio__text {
      position: relative;

      &:before {
        content: '';
        border-radius: 50%;
        border: 4px solid darken($black, 25%);
        display: inline-block;
        width: 25px;
        height: 25px;
        position: relative;
        background-color: $yellow;
        top: -0.2em;
        margin-right: 20px;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }

    &:checked {
      + .radio__text {
        &:before {
          background-color: $black;
          box-shadow: inset 0 0 0 3px $black;
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

    &:disabled {
      + .radio__text {
        &:before {
          box-shadow: inset 0 0 0 4px $black;
          border-color: darken($black, 25%);
          background: darken($black, 25%);
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
.radio__text {
  font-size: 20px;

  &:after {
    content: '';
    border-radius: 50%;
    background-color: red;
    display: inline-block;
    width: 27px;
    height: 27px;
    position: relative;

    transform: translate(-50%, -50%);
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
    opacity: 1;
  }
}
</style>
