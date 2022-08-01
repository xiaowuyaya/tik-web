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
      <div
        class="flex items-center order-last ml-2 lg:order-none lg:flex-1 lg:ml-4 xl:ml-10"
      ></div>
      <!-- nav -->
      <div class="hidden lg:flex items-center flex-1 text-base">
        <div
          class="select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a class="inline-flex items-center transition duration-50" href="#"
            >指引</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a class="inline-flex items-center transition duration-50" href="#"
            >更新日志</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a class="inline-flex items-center transition duration-50" href="#"
            >常见问题</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a class="inline-flex items-center transition duration-50" href="#"
            >诸神榜</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a
            class="inline-flex items-center transition duration-50 text-red-500"
            href="#"
            >捐助项目</a
          >
        </div>
        <div
          class="no-underline select-none relative inline-flex items-center p-2 border-transparent border-b-2 hover:border-blue-500 !border-b-2"
        >
          <a class="inline-flex items-center transition duration-50" href="#"
            >联系作者</a
          >
        </div>
      </div>
      <!-- 社交 -->
      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
        <a href="#" class="inline-flex text-xl p-2 lg:inline-flex"
          ><icon-github size="1.5rem"
        /></a>
        <a href="#" class="inline-flex text-xl p-2 lg:inline-flex"
          ><icon-qq-circle-fill size="1.5rem"
        /></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
