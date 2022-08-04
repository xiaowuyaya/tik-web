<template>
  <div
    class="!h-[90%] container !max-w-screen-2xl lg:px-6 mx-auto pt-[4.5rem] grid-leyout"
  >
    <div class="h-full grid px-6 md:px-8 pt-8 lg:py-12 relative !pt-0">
      <div class="pt-4 flex flex-col items-center justify-center">
        <div class="text-lg">
          <p class="">个人开发项目，用爱发电不易。</p>
          <p>
            目前项目的支出有域名、CDN下行流量费用以及服务器，如果你喜欢这个项目，不妨赞助一下开发者
            ❤️
          </p>
        </div>
        <img class="w-[50%] rounded-md my-2" src="https://qiniu.eiko.ren/serendipity/web/developing.png" alt="developing" />
        <div class="flex mt-4 flex-row">
          <a-popover>
            <a
              class="mx-6 w-30 text-lg text-center px-5 py-3 rounded-md bg-green-500 text-white"
              href="#"
              >微信</a
            >
            <template #title>
              <div class="text-center text-lg pb-2">微信 扫一扫</div>
            </template>
            <template #content>
              <a-image
                width="200"
                src="https://qiniu.eiko.ren/serendipity/web/wechat-qrcode.png"
              />
            </template>
          </a-popover>
          <a-popover>
            <a
              class="mx-6 w-30 text-lg text-center px-5 py-3 rounded-md bg-sky-500 text-white"
              href="#"
              >支付宝</a
            >
            <template #title>
              <div class="text-center text-lg pb-2">支付宝 扫一扫</div>
            </template>
            <template #content>
              <a-image
                width="200"
                src="https://qiniu.eiko.ren/serendipity/web/ali-qrcode.png"
              />
            </template>
          </a-popover>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
