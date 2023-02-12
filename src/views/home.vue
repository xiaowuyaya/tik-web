<template>
  <div class="home-container w-full h-[100vh] flex flex-col items-center justify-center">
    <div class="flex items-center">
      <div class="mr-2">
        <img class="w-[210px]" src="../assets/logo_white.png" alt="tik_logo" />
      </div>
      <h1 class="home-title">英雄联盟对局助手</h1>
    </div>
    <h4 class="home-desc">这可能是你用过最简单舒适的助手工具，就它了</h4>
    <!--    btn-->
    <div class="mr-4" @click="download">
      <a class="home-wrapper-btn">
        <span class="mr-3">
          <img class="w-[22px] h-[22px]" src="../assets/icons/windows.svg" alt="windows_icon" />
        </span>
        <span class="home-wrapper-btn__text">Windows 版本下载</span>
      </a>
    </div>
    <span class="text-sm mt-2 !text-gray-200">当前版本：{{appStore.version}}</span>
    <footer class="text-center text-sm absolute bottom-1">
      <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备2022001163号</a> |
      <span>Copyright © 2022 - {{new Date().getFullYear()}} XiaoWuYaYa Contributors</span> |
      <span>please must be love yourself</span>
    </footer>
  </div>
</template>
<script setup>
import { useAppStore } from '../store/index.js'
import { ElMessage } from 'element-plus'
const appStore = useAppStore()

function download() {
  if (appStore.downloadUrl) {
    window.open(appStore.downloadUrl, '_blank')
    return
  }
  ElMessage.error('未获取到版本信息，请刷新页面后再试一次')
}
</script>
<style lang="less" scoped>
.home-container {
  .home-title {
    color: #fff;
    font-size: 76px;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    font-weight: 900;
    line-height: 100px;
    text-align: center;
  }
  .home-desc {
    color: #fff;
    font-size: 28px;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    font-weight: 600;
    line-height: 80px;
    text-align: center;
  }

  .home-wrapper-btn {
    margin-top: 20px;
    background: #5092da !important;
    color: hsl(222deg 14% 90%) !important;
    padding: 22px 54px !important;
    text-decoration: none;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    height: 36px;
    opacity: 1;
    pointer-events: all;
    transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    .home-wrapper-btn__text {
      line-height: 0;
      font-size: 17px;
      //font-family: 'Inter', Arial, Helvetica, sans-serif !important;
      font-family: SmileySans, serif;
    }
  }
}
</style>
