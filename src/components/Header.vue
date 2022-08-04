<template>
  <div>
    <div
      class="flex flex-none h-full container !max-w-s creen-2xl mx-auto px-2 md:px-6"
    >
      <!-- logo -->
      <div class="flex items-center flex-1 font-youshe lg:flex-none">
        <a class="inline-flex items-center text-lg lg:text-2xl" href="/">
          <img
            class="inline-flex mr-1 lg:mr-3 h-8 lg:h-10"
            src="@/assets/logo.png"
          />
          Tik英雄联盟对局助手
        </a>
      </div>
      <!-- nav -->
      <div class="hidden lg:flex justify-end items-center flex-1 text-lg">
        <div
          :class="
            route.name == 'index'
              ? 'font-bold text-tik-primary border-tik-primary'
              : ''
          "
          class="select-none relative inline-flex items-center p-2 border-transparent border-b-2 mx-1.5 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50"
            href="#"
            @click="router.push('/')"
            >指引</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 mx-1.5 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50"
            href="https://www.yuque.com/xiaowuyaya/serendipity/cgcfg2"
            target="_blank"
            >更新日志</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 mx-1.5 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50"
            href="https://www.yuque.com/xiaowuyaya/serendipity/gepf8k"
            target="_blank"
            >常见问题</a
          >
        </div>
        <div
          :class="
            route.name == 'blackList'
              ? 'font-bold text-tik-primary border-tik-primary'
              : ''
          "
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 mx-1.5 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50"
            href="#"
            @click="$message.warning('诸神榜存在部分问题，仍在更新中...')"
            >诸神榜</a
          >
        </div>
        <div
          :class="route.name == 'donate' ? 'font-bold border-tik-primary' : ''"
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 mx-1.5 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50 text-red-500"
            href="#"
            @click="router.push('/donate')"
            >捐助项目</a
          >
        </div>
      </div>
      <!-- 社交 -->
      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
        <a
          class="inline-flex text-xl p-2 lg:inline-flex"
          href="https://github.com/xiaowuyaya"
          target="_blank"
          ><icon-github size="1.5rem"
        /></a>
        <a
          class="inline-flex text-xl p-2 lg:inline-flex"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=9HNfbMmM3ISfaX2YBjyJrD5r_Xgt8Bio&jump_from=webapi"
          target="_blank"
          ><icon-qq-circle-fill size="1.5rem"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>
