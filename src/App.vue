<script setup lang="ts">
  import MainHeader from './components/MainHeader.vue';
</script>


<template>
  <MainHeader />
  <main class="max-w-screen-2xl m-auto">
    <RouterView />
  </main>
  <footer>
    <p class="text-center py-4 text-sm opacity-50">Vertica // Demo project // Frederik Frost</p>
  </footer>
</template>

<style scoped>

</style>
