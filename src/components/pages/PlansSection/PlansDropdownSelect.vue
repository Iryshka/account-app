<template>
  <div class="dropdown">
    <div
      @click="toggleDropdownVisible"
      :class="['dropdown-selected-option', { placeholder: !modelValue.label }]"
      ref="dropDown"
    >
      {{ currentLabel }}
    </div>
    <transition name="fade">
      <ul v-show="isDropdownVisible" class="option-wrapper">
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          class="option"
          @click="onOption(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed, onMounted, onBeforeMount } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Object,
    default: () => {}
  }
})

const emit = defineEmits(['update:modelValue'])

const isDropdownVisible = ref(false)

const dropDown = ref(null)

const currentLabel = computed(() => props.modelValue.label ?? 'Chose your card')

function closeDropDown(element) {
  if (!dropDown.value.contains(element.target)) {
    isDropdownVisible.value = false
  }
}

function toggleDropdownVisible() {
  isDropdownVisible.value = !isDropdownVisible.value
}

function onOption(option) {
  toggleDropdownVisible()
  // то то же самое, что, если бы мы в index.vue написали бы
  // activeOption.value = option
  emit('update:modelValue', option)
}

const filteredOptions = computed(() =>
  props.options.filter((option) => option.id !== props.modelValue.id)
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
    border: 2px solid $pink;
    border-radius: 8px;
  }
}

.option-wrapper {
  position: absolute;
  max-width: 230px;
  margin: 0 auto;

  border-radius: 8px;
}
.option {
  margin-top: 2px;
  padding: 16px;
  width: 198px;
  border-radius: 8px;
  background-color: $gray-light;
  border: 1px solid $gray-dark;
  //margin: 0 auto;
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
