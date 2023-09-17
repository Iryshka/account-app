<template>
  <div class="default-layout">
    <header>
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
// Components

import DefaultHeader from '@/components/layouts/default-layout/DefaultHeader.vue'
import DefaultFooter from '@/components/layouts/default-layout/DefaultFooter.vue'
</script>
