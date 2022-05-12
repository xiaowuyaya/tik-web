<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Layout from "@/views/Layout/index.vue";

console.log("Hello Serendipity");
</script>

<style>
body,
#app {
  width: 100%;
  margin: 0;
  font-family: "PingFang SC", "Helvetica Neue", "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
