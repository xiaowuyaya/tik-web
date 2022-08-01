<script setup lang="ts"></script>

<template>
  <div class="relative antialiased h-full w-full">
    <router-view></router-view>
  </div>
</template>

<style>
@import url('./style/font.css');
html,
body,
#app {
  text-rendering: optimizeLegibility;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
