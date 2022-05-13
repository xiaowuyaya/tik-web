<template>
  <div class="nav-container">
    <div class="content">
      <!-- logo -->
      <img
        class="logo"
        :src="getImageUrl('nav-logo.png')"
        alt="Serendipity-Logo"
        @click="router.push('/')"
      />
      <!-- 菜单 -->
      <div class="menu">
        <a
          href="#"
          :class="route.name == 'Home' ? 'current' : ''"
          @click="router.push('/')"
          >首页</a
        >
        <a
          href="https://www.yuque.com/xiaowuyaya/serendipity/cgcfg2"
          target="_blank"
          class=""
          >更新日志</a
        >
        <a
          href="https://www.yuque.com/xiaowuyaya/serendipity/gepf8k"
          target="_blank"
          class=""
          >常见问题</a
        >
        <a
          href="#"
          :class="route.name == 'Bans' ? 'current' : ''"
          @click="router.push('/bans')"
          >诸神榜</a
        >
        <a
          href="#"
          :class="route.name == 'Donate' ? 'current' : ''"
          @click="router.push('/donate')"
          >捐赠</a
        >
        <a
          href="#"
          :class="route.name == 'Contact' ? 'current' : ''"
          @click="router.push('/contact')"
          >联系作者</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { getImageUrl } from "@/utils/util";
import { useRouter, useRoute } from "vue-router";
import { ref, watch, onBeforeMount } from "vue";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped>
.nav-container {
  border-bottom: 1px solid #eaecef;
  box-shadow: 0 2px 8px #f0f1f2;

  .content {
    max-width: 1056px;
    padding: 0 16px;
    box-sizing: border-box;
    margin: 0 auto;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 78px;
    .logo {
      cursor: pointer;
      height: 48px;
    }

    .menu {
      .current {
        color: #5191d9;
        border-bottom: 2px solid #5191d9;
      }

      a {
        color: #172b4d;
        display: inline-block;
        margin-left: 18px;
        text-decoration: none;
        font-size: 16px;
        user-select: none;
        padding: 5px 0;
      }

      a:hover {
        border-bottom: 2px solid #5191d9;
      }
    }
  }
}
</style>
