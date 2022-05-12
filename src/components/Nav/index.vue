<template>
  <div class="nav-container">
    <div class="content">
      <!-- logo -->
      <img
        class="logo"
        :src="getImageUrl('nav-logo.png')"
        alt="Serendipity-Logo"
        srcset=""
      />
      <!-- 菜单 -->
      <div class="menu">
        <a href="#" class="current">首页</a>
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
        <a href="#" class="" @click="router.push('/bans')">诸神榜</a>
        <a href="#" class="" @click="router.push('/contact')">联系作者</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { getImageUrl } from "@/utils/util";
import { useRouter } from "vue-router";

const router = useRouter();
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
    height: 68px;
    .logo {
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
        border-bottom: 2px solid #e1f0ff;
      }
    }
  }
}
</style>
