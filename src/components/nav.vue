<template>
  <div class="nav-container">
    <div class="logo">
      <img :src="logoUrl" alt="serendipity-logo" />
      <div class="title">Serendipity</div>
    </div>
    <div class="menu">
      <div class="link">下载</div>
      <div class="link">功能</div>
      <div class="link">开源文档</div>
      <div class="link">联系我</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { logoUrl } from "../config/index"
</script>

<style scoped>
.nav-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 70px;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #edf2f7
}
.logo {
  /* width: 25%; */
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.logo .title {
  font-size: 1.125rem;
  color: #1f3247;
  font-weight: 600;
}

.menu {
  /* width: 55%; */
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu .link {
  line-height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  color: #36587c;
  font-weight: 600;
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
}
</style>