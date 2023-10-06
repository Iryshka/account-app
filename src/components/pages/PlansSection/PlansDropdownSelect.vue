<template>
  <div class="dropdown">
    <div
      @click="toggleDropdownVisible"
      :class="['dropdown-selected-option', { placeholder: !selectedOption }]"
      ref="dropDown"
    >
      {{ chosenOption }}
    </div>
    <transition name="fade">
      <ul v-show="isDropdownVisible" class="option-wrapper">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          :class="['option', { active: option.id === modelValue.id }]"
          @click="toggleOptionSelect(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, onMounted, onBeforeMount } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  },
  options: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

const isDropdownVisible = ref(false)

const selectedOption = ref(null)

const dropDown = ref(null)

const chosenOption = computed(() => props.modelValue.label ?? 'Chose your card')

// function closeDropDown(element) {
//   if (!dropDown.value.contains(element.target)) {
//     isDropdownVisible.value = false
//   }
// }

function toggleDropdownVisible() {
  isDropdownVisible.value = !isDropdownVisible.value
}

function toggleOptionSelect(option) {
  selectedOption.value = option
  toggleDropdownVisible()
  emit('update:modelValue', option)
}

const filteredOptions = computed(() =>
  props.options.filter((option) => option !== selectedOption.value)
)

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeMount(() => {
  window.removeEventListener('click', closeDropDown)
})
</script>

<style lang="scss" scoped>
.dropdown {
  padding: 16px;
  cursor: pointer;
  width: 230px;
  max-width: 230px;
  margin: 0 auto;
  text-align: center;

  &-selected-option {
    padding: 16px;
    border: 1px solid $gray-dark;
    border-radius: 8px;
  }
}

.option-wrapper {
  max-width: 230px;
  margin: 0 auto;
}
.option {
  padding: 16px;
  border: 1px solid $gray-light;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;

  &:hover {
    background-color: $pink;
    color: $white;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.option.active {
  background-color: red;
}
</style>
