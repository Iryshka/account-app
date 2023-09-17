<template>
  <div class="dropdown">
    <div class="dropdown-wrapper" ref="dropDown">
      <div @click="toggleDropdownVisible" class="dropdown-selected-option">
        {{ selectedOption || 'Choose an answer' }}
      </div>
    </div>
    <transition name="fade">
      <div v-if="isDropdownVisible" class="option-wrapper">
        <div
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="option"
          @click="toggleOptionSelect(option)"
        >
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, onMounted, onBeforeMount } from 'vue'

const isDropdownVisible = ref(false)

const selectedOption = ref(null)

const dropDown = ref(null)

const closeDropDown = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isDropdownVisible.value = false
  }
}

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    required: true
  }
})

function toggleDropdownVisible() {
  isDropdownVisible.value = !isDropdownVisible.value
}

function toggleOptionSelect(option) {
  selectedOption.value = option
  isDropdownVisible.value = !isDropdownVisible.value
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
.dropdown-wrapper {
  padding: 16px;
  cursor: pointer;
  width: 230px;
  max-width: 230px;
  margin: 50px auto 0 auto;
  border: 1px solid $gray-dark;
  border-radius: 8px;
  text-align: center;
}

.dropdown-selected-option {
  padding: 4px;
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
</style>
