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
    height: calc(100vh - 150px);
    padding: 0 100px;
  }
</style>
