<script setup lang="ts">
  import Header from './presentation/components/Header.vue'
</script>
<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>
<style scoped>
  main {
    min-height: calc(100vh - 150px);
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    main {
      padding: 0 20px;
    }
  }
</style>
