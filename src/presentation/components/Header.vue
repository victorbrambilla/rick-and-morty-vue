<template>
  <header class="header">
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Header',
  })
</script>

<style scoped>
  .header {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 100px;
  }
</style>
