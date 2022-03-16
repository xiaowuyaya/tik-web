<template>
  <div class="index-container">
    <!-- 导航栏标题 -->
    <Nav></Nav>
    <!-- 内容 -->
    <div class="content">
      <!-- 介绍 -->
      <div class="text">
        <img class="logo" :src="logoUrl" alt="serendipity-logo" />
        <h1 class="title">Serendipity 英雄联盟对局助手</h1>
        <h2 class="slogan">抓出队伍里的小内鬼，提升游戏体验！</h2>
        <h2 class="desc">
          主要功能是通过获取游戏开始时的双方玩家的历史对局数据（也可在英雄选择时队友的历史对局数据），对数据进行<b>算法分析</b>。<br/>依照算法，对每个人的历史对局数据进行评分。
          根据评分结果，得出每位玩家的大致游戏水平，在游戏中能做出针对性的判断结果。<br/> 同时工具内还包含了多种其他有趣的功能...
        </h2>
      </div>

      <!-- 按钮 -->
      <div class="btns">
        <div class="down">下载软件</div>
        <div class="down sub">查看描述</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "@/components/nav.vue";

import { ref } from "vue";
import { logoUrl } from "../config/index";
</script>

<style scoped>
.index-container {
  height: 100%;
  width: 100%;
}

.content {
  width: 768px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

.content .text {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 32px;
}

.content .logo {
  width: 6rem;
  height: 6rem;
  margin: auto;
  margin-bottom: 1.5rem;
  border-radius: 9999px;
  border: 2px solid #edf2f7;
  background-color: #edf2f7;
  display: block;
  vertical-align: middle;
}

.content .title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 900;
  color: #1f3247;
  text-align: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.content .slogan {
  text-shadow: rgb(0 0 0 / 20%) 1px 1px 5px;
  color: #5191d9;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.625;
  font-size: 1.25rem;
}

.content .desc {
  width: 100%;
  margin-bottom: 1.5rem;
  line-height: 1.625;
  font-size: 1.25rem;
  font-weight: 400;
  color: #36587c;
  text-align: center;
}

.content .btns {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.content .btns .down {
  text-decoration: inherit;
  cursor: pointer;
  display: flex;
  padding: 0.5rem 2.5rem;
  white-space: nowrap;
  font-size: 1.3rem;
  color: #0d2621;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  margin-right: 4rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: 1px solid #e1f0ff;
  border-radius: 999px;
  background-color: #e1f0ff;
}

.content .btns .sub {
  background-color: #dce5f0;
  border: 1px solid #dce5f0;
}
</style>
