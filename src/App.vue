<script setup>
import { useAppStore } from './store/index.js'
import {latestInfo} from "./api/common.js";

const appStore = useAppStore()

latestInfo().then(res => {
  appStore.downloadUrl = res.data.url
  appStore.version = res.data.version
})
</script>

<template>
  <router-view />
</template>

<style scoped></style>
