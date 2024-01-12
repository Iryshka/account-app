<template>
  <div class="default-layout">
    <header class="header-layout">
      <default-header />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <default-footer />
    </footer>
  </div>
</template>

<script setup>
import DefaultHeader from '@/components/layouts/default-layout/DefaultHeader.vue'
import DefaultFooter from '@/components/layouts/default-layout/DefaultFooter.vue'
</script>

<style scoped lang="scss">
.header-layout {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
