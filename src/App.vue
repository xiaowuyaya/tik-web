<script setup>
import { lastVersionUrl } from './api/common.js'
import { useAppStore } from './store/index.js'

const appStore = useAppStore()

lastVersionUrl().then(res => {
  appStore.downloadUrl = res.data
})
</script>

<template>
  <router-view />
</template>

<style scoped></style>
