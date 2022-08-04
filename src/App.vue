<script setup lang="ts"></script>

<template>
  <div class="relative antialiased h-full w-full font-pingfang">
    <router-view></router-view>
  </div>
</template>

<style>
@import url('./style/font.css');
html,
body,
#app {
  color: #1f2937;
  background-color: #fcfcfc;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
