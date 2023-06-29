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
import MainContent from '@/components/layouts/MainContent.vue'
import DefaultHeader from '@/components/layouts/DefaultHeader.vue'
import DefaultFooter from '@/components/layouts/DefaultFooter.vue'
</script>
