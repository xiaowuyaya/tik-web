<template>
  <Header class="header"></Header>
  <router-view class="mt-[4.5rem]"></router-view>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.header {
  background-color: #FCFCFC;
  border-color: #e5e7eb;
  border-bottom-width: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 50;
  height: 4.5rem;
}
</style>
