<template>
  <div class="default-layout">
    <header>
      <default-header />
    </header>
    <main>
      <main-content />
      <slot />
    </main>
    <footer>
      <default-footer />
    </footer>
  </div>
</template>

<script setup>
// Components
import MainContent from '@/components/pages/index/TheHero.vue'
import DefaultHeader from '@/components/layouts/default-layout/DefaultHeader.vue'
import DefaultFooter from '@/components/layouts/default-layout/DefaultFooter.vue'
</script>
