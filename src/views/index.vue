<template>
  <div class="index-container">
    <!-- 内容 -->
    <div class="content">
      <!-- 介绍 -->
      <div class="text">
        <img class="logo" :src="logoUrl" alt="serendipity-logo" />
        <h1 class="title">Serendipity 英雄联盟对局助手</h1>
        <h2 class="slogan">这可能是你用过最体验最好的英雄联盟游戏工具</h2>
        <div class="desc">
          <p>
            马种评选：通过获取当前对局中所有玩家的历史20场对局数据，对每个玩家的历史对局数据进行算法评分。根据评分结果，得出每位玩家的大致游戏水平，在游戏中能做出针对性的判断结果。
          </p>
          <p>
            额外功能：自动接收对局，游戏内外一键发送，排位自动禁选，段位伪造，状态修改，一键观战，一键配置OPGG天赋推荐。
          </p>
        </div>
      </div>

      <!-- 按钮 -->
      <div class="btns">
        <div class="down" @click="router.push('/download')">下载软件</div>
        <div class="down sub" @click="changeShowVideo">视频介绍</div>
        <!-- <div class="down sub" @click="router.push('/feat')">了解算法</div> -->
        <div class="down warn-sub" @click="router.push('/blacklist')">
          诸神榜
        </div>
      </div>

      <!-- <div class="intro-container">
        <h2 class="intro-title">特色功能</h2>
        <div class="content">
          <div class="selection">
            <div class="box" @click="changeImg(1)">
              <h4 class="box-title">游戏面板</h4>
            </div>
            <div class="box" @click="changeImg(2)">
              <h4 class="box-title">特色功能</h4>
            </div>
            <div class="box" @click="changeImg(3)">
              <h4 class="box-title">战绩查询</h4>
            </div>
            <div class="box" @click="changeImg(4)">
              <h4 class="box-title">黑名单</h4>
            </div>
          </div>
          <div class="img-list">
            <div class="imgs">
              <img :src="imgShow" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div> -->

      <!-- 视频介绍弹窗 -->
      <el-dialog
        custom-class="dialog-video"
        v-model="showVideo"
        title="视频介绍"
        width="70%"
        :draggable="true"
      >
        <iframe
          class="video"
          src="//player.bilibili.com/player.html?aid=468157052&bvid=BV1K5411S7BV&cid=577015171&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
        </iframe>
      </el-dialog>
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
let imgShow = ref(showImg.gamePanel);

const changeShowVideo = () => {
  showVideo.value = true;
};

const changeImg = (index) => {
  if (index == 1) {
    imgShow.value = showImg.gamePanel;
  }
  if (index == 2) {
    imgShow.value = showImg.func;
  }
  if (index == 3) {
    imgShow.value = showImg.history;
  }
  if (index == 4) {
    imgShow.value = showImg.black_list;
  }
};
</script>

<style lang="less" scoped>
.index-container {
  width: 100%;

  .content {
    height: calc(100vh - 200px); /* 这个200px是header和footer的高度 */
    width: 100%;
    // height: 100%;
    margin-right: auto;
    margin-left: auto;

    .text {
      padding: 0 2.5rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      background: url(//gw.alipayobjects.com/mdn/rms_ee84bf/afts/img/A*uz-1TKW-ni8AAAAAAAAAAAAAARQnAQ)
        100% / contain no-repeat;

      .logo {
        width: 8rem;
        height: 8rem;
        margin: auto;
        margin-bottom: 1.5rem;
        border-radius: 9999px;
        border: 2px solid #edf2f7;
        background-color: #edf2f7;
        display: block;
        vertical-align: middle;
      }
      .title {
        font-family: "YouSheBiaoTiHei";
        font-size: 4rem;
        font-weight: 400;
        margin-bottom: 0rem;
        line-height: 1.1;
        color: #1f3247;
        text-align: center;
      }

      .slogan {
        text-shadow: rgba(143, 143, 189, 0.2) 1px 1px 5px;
        color: #5191d9;
        text-transform: uppercase;
        text-align: center;
        line-height: 1.625;
        font-size: 1.75rem;
      }

      .desc {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 18%;
        line-height: 1.625;
        font-size: 1rem;
        font-weight: 500;
        color: #36587c;
      }
    }

    .btns {
      padding: 0 28%;
      font-family: "YouSheBiaoTiHei";
      font-size: 1.75rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 1.75rem;

      .down {
        cursor: pointer;
        display: inline-block;
        min-width: 154px;
        padding: 8px 16px;
        text-align: center;
        color: #fff;
        border: 1px solid #5191d9;
        background-color: #5191d9;
      }

      .down:hover {
        background: #78a6df;
        border: 1px solid #78a6df;
      }
      .sub {
        color: #5191d9;
        background-color: #fff;
        border: 1px solid #5191d9;
      }
      .sub:hover {
        background-color: #78a6df;
        border: 1px solid #78a6df;
        color: #fff;
      }
      .warn-sub {
        color: #f56c6c;
        background-color: #fff;
        border: 1px solid #f56c6c;
      }
      .warn-sub:hover {
        color: #fff;
        background-color: #f89898;
        border: 1px solid #f89898;
      }
    }

    .dialog-video {
      .video {
        width: 100%;
        height: 500px;
      }
    }
  }
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
  /* width: 230px; */
  /*padding: 10px;*/
  text-align: center;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 14px 20px;
  margin: 8px 16px;
  box-shadow: 0 2px 8px -2px rgb(5 8 82 / 12%);
  cursor: pointer;
}

.content > .selection > .box:hover {
  background-color: #f1f2f3;
}

.selection > .box > .box-title {
  color: #262626;
  font-weight: 400;
  margin: 5px 16px;
  font-size: 20px;
}

.selection > .box > .box-desc {
  line-height: 26px;
  font-size: 16px;
  color: #595959;
}

.selection > .box > p {
  margin-block-start: 0em;
  margin-block-end: 1em;
}

.active {
  border-left-color: rgb(78, 134, 230);
  border-left-width: 4px;
}
</style>
