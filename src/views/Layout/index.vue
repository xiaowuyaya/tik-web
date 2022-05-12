<template>
  <div class="layout-container">
    <!-- 导航栏 -->
    <Nav></Nav>
    <!-- body -->
    <router-view></router-view>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Nav from "@/components/Nav/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
}
</style>
