<template>
  <div class="index-container">
    <!-- 导航栏标题 -->
    <Nav></Nav>
    <!-- 内容 -->
    <div class="content">
      <!-- 介绍 -->
      <div class="text">
        <img class="logo" :src="logoUrl" alt="serendipity-logo" />
        <h1 class="title">GitHub Notifications & Activities on your Desktop</h1>
        <h2 class="slogan">AKA "TWEETDECK FOR GITHUB"</h2>
        <h2 class="desc">
          Create columns for the repositories and people that matters to you;
          Receive Desktop Push Notifications; Manage Notifications, Issues, Pull
          Requests & Activities; Bookmark things for later.
        </h2>
      </div>

      <!-- 按钮 -->
      <div class="btns">
        <div class="down">Download</div>
        <div class="down sub">sub</div>
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
  font-weight: 200;
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
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border: 1px solid #5191d9;
  border-radius: 999px;
  background-color: #5191d9;
}

.content .btns .sub{
  background-color: #DCE5F0;
  border: 1px solid #DCE5F0;
} 
</style>