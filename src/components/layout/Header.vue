<template>
  <header :style="showHeaderBg ? 'background:#111111' : 'background: transparent'" class="header-container w-full h-[86px] px-[10px] m-auto sticky top-0 z-999">
    <div class="w-full h-full flex justify-between items-center">
      <!--LOGO-->
      <div>
        <img class="w-[48px]" src="../../assets/icon.png" alt="tik_logo" />
      </div>
      <!-- btns -->
      <div class="flex justify-between items-center">
        <div class="mr-4">
          <el-dropdown>
            <a class="header-wrapper-btn" href="#" @click="handleHeaderBtn(0)">
              <span class="mr-2">
                <img class="w-[18px] h-[18px]" src="../../assets/icons/qq.svg" alt="qq_icon" />
              </span>
              <span class="header-wrapper-btn__text">交流群</span>
            </a>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><a @click="copy('914241626')">1群：914241626</a></el-dropdown-item>
                <el-dropdown-item><a @click="copy('254901616')">2群：254901616</a></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

        <div class="mr-4">
          <a class="header-wrapper-btn" href="#" @click="handleHeaderBtn(1)">
            <span class="mr-2">
              <img class="w-[18px] h-[18px]" src="../../assets/icons/bilibili.svg" alt="bilibili_icon" />
            </span>
            <span class="header-wrapper-btn__text">视频介绍</span>
          </a>
        </div>

        <div class="mr-4">
          <a class="header-wrapper-btn" href="#" @click="handleHeaderBtn(2)">
            <span class="mr-2">
              <img class="w-[18px] h-[18px]" src="../../assets/icons/github.svg" alt="github_icon" />
            </span>
            <span class="header-wrapper-btn__text">代码仓库</span>
          </a>
        </div>

        <div class="mr-4">
          <a class="header-wrapper-btn" @click="handleHeaderBtn(3)">
            <span class="mr-2">
              <img class="w-[18px] h-[18px]" src="../../assets/icons/heart.svg" alt="heart_icon" />
            </span>
            <span class="header-wrapper-btn__text">赞助作者</span>
          </a>
        </div>

        <div class="mr-4">
          <a class="header-wrapper-btn header-wrapper-btn__primary" @click="handleHeaderBtn(4)">
            <span class="mr-2">
              <img class="w-[18px] h-[18px]" src="../../assets/icons/windows.svg" alt="windows_icon" />
            </span>
            <span class="header-wrapper-btn__text">PC版下载</span>
          </a>
        </div>
      </div>
    </div>
  </header>
  <el-dialog v-model="showDonateDialog" width="460px">
    <template #title>
      <span class="font-bold text-xl">
        <span style="font-family: SmileySans, serif">💖 赞助</span>
        <span class="ml-4 text-base">*.。(๑･∀･๑)*.。</span>
      </span>
    </template>
    <div class="w-full w-full flex flex-col">
      <p>全项目个人开发，熬夜coding，发际线岌岌可危</p>
      <p>如果你喜欢这个项目，不妨赞助一下开发者喝杯咖啡！</p>
      <div class="mt-6 w-full flex items-center justify-around">
        <img class="w-[120px]" src="../../assets/images/wechat_pay_qr.png" alt="wechat_pay_qr" />
        <img class="w-[120px]" src="../../assets/images/alipay_qr.png" alt="alipay_qr" />
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useAppStore } from '../../store/index.js'
import {copy} from "../../utils/tools.js";
const appStore = useAppStore()
const showHeaderBg = ref(false)
const showDonateDialog = ref(false)

window.addEventListener('scroll', isScrollTop)

function isScrollTop() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  showHeaderBg.value = scrollTop !== 0
}

function handleHeaderBtn(index) {
  if (index === 0) {
  }
  if (index === 1) window.open('https://space.bilibili.com/30368302', '_blank')
  if (index === 2) window.open('https://github.com/xiaowuyaya', '_blank')

  if (index === 3) {
    showDonateDialog.value = true
  }
  if (index === 4) {
    if (appStore.downloadUrl) {
      window.open(appStore.downloadUrl, '_blank')
      return
    }
    ElMessage.error('未获取到版本信息，请刷新页面后再试一次')
  }
}
</script>

<style lang="less" scoped>
.header-container {
  transition: background 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  .header-wrapper-btn__primary {
    background: #5191d9 !important;
    color: hsl(222deg 14% 90%) !important;
    padding: 22px 22px !important;
    font-family: PingFangSC, sans-serif !important;
  }
  .header-wrapper-btn {
    background: hsl(222deg 10% 17%);
    color: hsl(222deg 5% 62%);
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
    padding: 16px;
    opacity: 1;
    pointer-events: all;
    transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    .header-wrapper-btn__text {
      font-family: SmileySans, serif;
    }
  }

  .header-wrapper-btn:hover {
    color: hsl(222deg 14% 90%);
    background: hsl(222deg 9% 23%);
  }
}
</style>
