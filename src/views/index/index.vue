<template>
  <div
    class="h-full container !max-w-screen-2xl lg:px-6 mx-auto pt-$header-height grid-leyout"
  >
    <div class="h-full grid px-6 md:px-8 py-8 lg:py-12 relative !pt-0">
      <!-- intro -->
      <div class="flex items-center justify-center h-$full-header md:px-6">
        <div>
          <div class="space-y-2 mb-12 md:mb-14">
            <!-- logo -->
            <div>
              <img
                class="mx-auto max-w-full w-auto max-h-120px block select-none"
                src="@/assets/logo.png"
                alt=""
              />
            </div>
            <!-- title -->
            <div class="text-center">
              <h1
                class="text-3xl leading-10 font-semibold sm:text-4xl sm:leading-16"
              >
                Tik 英雄联盟对局助手
              </h1>
              <p class="m-0 mt-1 text-lg opacity-75 leading-6 px-4 sm:text-xl">
                这可能是你用过最体验最好的英雄联盟游戏工具
              </p>
              <!-- btns -->
              <div class="flex space-x-4 mt-8 justify-center">
                <a
                  href="#"
                  class="text-base font-normal inline-block text-white bg-tik-primary rounded-md hover:shadow-sm hover:bg-tik-primaryhover focus:ring-3 ring-opacity-50 text-base px-3 py-2.5 md:text-lg md:px-4 md:py-3 border-2 border-transparent"
                  >下载桌面应用</a
                >
                <a
                  href="#"
                  class="text-base font-extrabold inline-block text-tik-primary rounded-md hover:shadow-sm hover:bg-tik-primary hover:text-white focus:ring-3 ring-opacity-50 text-base px-3 py-2.5 md:text-lg md:px-4 md:py-3 border-2 border-tik-primary"
                  >视频介绍</a
                >
              </div>
            </div>
            
          </div>
          <div class="px-4 flex justify-center">
              <a
                class="bg-sky-500 bg-opacity-10 inline-flex rounded font-medium text-center text-sky-400 p-3 md:p-4 lg:px-8 text-sm lg:text-base mx-8"
                href="#"
                >😀Serendipity对局助手 升级v3版本，更名 Tik对局助手，<span class="font-bold">当前版本: {{curVersion}}</span></a
              >
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const curVersion = ref<string>("0.0.0")

</script>
