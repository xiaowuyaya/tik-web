<template>
  <div class="index-container">
    <!-- 内容 -->
    <div class="content">
      <!-- 介绍 -->
      <div class="text">
        <img class="logo" :src="logoUrl" alt="serendipity-logo" />
        <h1 class="title">Serendipity 英雄联盟对局助手</h1>
        <h2 class="slogan">抓出队伍里的小内鬼，提升游戏体验！</h2>
        <h2 class="desc">
          主要功能是通过获取游戏开始时的双方玩家的历史对局数据（也可在英雄选择时队友的历史对局数据），对数据进行<b>算法分析</b>。<br />依照算法，对每个人的历史对局数据进行评分。
          根据评分结果，得出每位玩家的大致游戏水平，在游戏中能做出针对性的判断结果。<br />
          同时工具内还包含了多种其他有趣的功能...
        </h2>
      </div>

      <!-- 按钮 -->
      <div class="btns">
        <div class="down" @click="router.push('/download')">下载软件</div>
        <div class="down sub" @click="changeShowVideo">视频介绍</div>
        <div class="down sub" @click="router.push('/feat')">了解算法</div>
      </div>

      <!-- 介绍图 -->
      <div class="show">
        <div class="img">
          <img :src="showImg" alt="展示图" />
        </div>
      </div>

      <!-- 视频介绍弹窗 -->
      <el-dialog v-model="showVideo" title="视频介绍" width="70%"> </el-dialog>
    </div>
    <!-- 回到顶部 -->
    <el-backtop right="20"></el-backtop>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { logoUrl, showImg } from "../config/index";
import { useRouter } from "vue-router";

const router = useRouter();
const showVideo = ref(false);

const changeShowVideo = () => {
  showVideo.value = true;
};
</script>

<style scoped>
.index-container {

  width: 100%;
}

.content {
    height: calc(100vh - 200px); /* 这个200px是header和footer的高度 */
  width: 1200px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

.content .text {
  padding: 0 18%;
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
  margin-bottom: 1rem;
  line-height: 1.625;
  font-size: 1.25rem;
  font-weight: 400;
  color: #36587c;
  text-align: center;
}

.content .btns {
  /* padding: 0 25%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
}

.content .btns .down {
      cursor: pointer;
    display: inline-block;
    min-width: 159px;
    height: 48px;
    line-height: 48px;
    margin-top: 56px;
    margin-right: 24px;
    padding: 0 16px;
    text-align: center;
    font-size: 18px;
    color: #fff;
 
  border: 1px solid #5191d9;
  /* border-radius: 999px; */
  background-color: #5191d9;
}

.content .btns .down:hover {
  background: #78a6df;
  border: 1px solid #78a6df;
}

.content .btns .sub {
  color: #5191d9;
  background-color: #fff;
  border: 1px solid #5191d9;
}

.content .btns .sub:hover{
  background-color: #78a6df;
  border: 1px solid #78a6df;
  color: #fff
}
.show {
  margin: auto;
}

.show .img {
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  height: 80%;
  border: 0.5rem solid #edf2f7;
  border-radius: 0.5rem;
  background-color: #edf2f7;
}

.show .img img {
  width: 100%;
  border-radius: 0.5rem;
}
</style>
