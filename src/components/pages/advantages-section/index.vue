<template>
  <section class="advantages">
    <ul class="list">
      <li :class="`m-${color}`" v-for="{ id, title, description, color } in cards" :key="id">
        <advantage-card :id="id" :title="title" :description="description" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import AdvantageCard from '@/components/pages/advantages-section/AdvantageCard.vue'
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    title: 'title 1',
    description: 'description ',
    image: {},
    size: 'small',
    color: 'green',
    position: 'top-left'
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description',
    image: {},
    size: 'small',
    color: 'blue',
    position: 'top-left'
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description',
    image: {},
    size: 'small',
    color: 'pink',
    position: 'top-left'
  },
  {
    id: 4,
    title: 'title 4',
    description: 'description',
    image: {},
    size: 'small',
    color: '#fff',
    position: 'top-left'
  }
])
</script>

<style scoped lang="scss">
.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

li {
  border-radius: 15px;
  list-style: none;
  padding: 10px;
  height: 200px;
  background-color: rebeccapurple;
}
</style>
