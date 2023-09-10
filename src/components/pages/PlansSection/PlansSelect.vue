<template>
  <div class="common-select">
    <span v-if="subtitle" class="common-select__subtitle">{{ subtitle }} </span>
    <div class="common-select__target">
      <div @click="toggleListVisible" class="common-select__header">
        <span :class="{ 'm-gray': isListVisible }" class="common-select__title">{{
          activeOptionName
        }}</span>
      </div>
      <ul v-if="isListVisible" class="common-select__list">
        <li
          v-for="{ slug, name } in filteredOptions"
          :key="slug"
          @click="onOption(slug)"
          class="common-select__item"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'

const isListVisible = ref(false)

const props = defineProps({
  activeSlug: {
    type: String,
    default: undefined
  },
  options: {
    type: Array,
    default: () => []
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const activeOptionName = computed(() => {
  return props.options.find((option) => option.slug === props.activeSlug)?.name
})

const emit = defineEmits(['update:activeSlug'])

const filteredOptions = computed(() =>
  props.options.filter((option) => option.slug !== props.activeSlug)
)

function toggleListVisible() {
  isListVisible.value = !isListVisible.value
}

function onOption(slug) {
  isListVisible.value = false
  emit('update:activeSlug', slug)
}
</script>
<style scoped lang="scss">
.common-select {
  position: relative;
  color: $gray-dark;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  gap: 10px;

  &__header {
    text-align: left;
  }

  &__target {
    text-align: center;
  }

  &__title {
    color: $pink;
    transition: color 0.2s ease-in;

    &.m-gray {
      color: $pink;
    }
  }

  &__list {
    position: absolute;
    list-style: none;
    margin-top: 5px;
    padding: 0;
    text-align: left;
    max-height: 100px;
    overflow: auto;
    width: 100%;
    z-index: 1;
  }

  &__title {
    &:hover {
      color: $pink;
    }
  }

  &__title,
  &__list {
    cursor: pointer;
  }

  &__item {
    padding: 5px 5px 5px 0;

    &:hover {
      color: $pink;
    }
  }
}
</style>
