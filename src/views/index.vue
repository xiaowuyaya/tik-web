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

      <div class="intro-container">
        <h2 class="intro-title">特色功能</h2>
        <div class="content">
          <div class="selection">
            <div class="box">
              <h4 class="box-title">游戏面板</h4>
              <p class="box-desc" @click="changeImg(1)">通过算法计算所有人的历史20把对局得分，更好的进行局势观察，加强游戏中的判断。</p>
            </div>
            <div class="box ">
              <h4 class="box-title">功能</h4>
              <p class="box-desc" @click="changeImg(2)">功能选项中包含很多特色应用，比如自动接收对局，自动秒选等</p>
            </div>
            <div class="box ">
              <h4 class="box-title">黑名单</h4>
              <p class="box-desc" @click="changeImg(3)">可以通过添加玩家到黑名单，当再次遇到该玩家时会进行提醒。</p>
            </div>
          </div>
          <div class="img-list">
            <div class="imgs">
              <img :src="imgShow" alt="" srcset="" />
            </div>
          </div>
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
let imgShow = ref(showImg.gamePanel2)

const changeShowVideo = () => {
  showVideo.value = true;
};

const changeImg = (index) =>{

if (index == 1){
  imgShow.value = showImg.gamePanel2
}

if (index == 2){
  imgShow.value = showImg.func
}

if (index == 3){
  imgShow.value = showImg.banList
}
}
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
  /* margin-bottom: 32px; */
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
  margin-bottom: 1rem;
}

.content .btns .down {
  cursor: pointer;
  display: inline-block;
  min-width: 159px;
  height: 48px;
  line-height: 48px;
  margin-top: 24px;
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

.content .btns .sub:hover {
  background-color: #78a6df;
  border: 1px solid #78a6df;
  color: #fff;
}
.show {
  margin: auto;
}

.img-list .imgs {
  width: 870px;
  border: 0.5rem solid #edf2f7;
  border-radius: 0.5rem;
  background-color: #edf2f7;
}

.img-list .imgs img {
  width: 100%;
}

.intro-container {
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.75;
}

.intro-title {
  text-align: center;
  margin-top: 78px;
  font-weight: 400;
  color: #262626;
  font-size: 40px;
  line-height: 1.35;
}

.intro-container .content {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content > .selection {
  padding: 10px;
}

.content > .selection > .box {
  /* width: 265px; */
  padding: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 8px 16px;
  box-shadow: 0 2px 8px -2px rgb(5 8 82 / 12%);
  cursor: pointer;
}

.content > .selection > .box:hover{
  background-color: #f1f2f3;
}

.selection > .box > .box-title {
  color: #262626;
  font-weight: 400;
  margin: 10px 16px;
  font-size: 20px;
}

.selection > .box > .box-desc {
  line-height: 26px;
  font-size: 16px;
  color: #595959;
}

.active {
  border-left-color: rgb(78, 134, 230);
  border-left-width: 4px;
}
</style>
