<template>
  <Header />
  <router-view class="content" />
</template>

<script setup>
import Header from './Header.vue'
</script>

<style scoped>
.content {
  margin-top: calc(-1 * 86px);
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: none;
}
</style>
