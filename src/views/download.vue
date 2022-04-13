<template>
  <div class="download-container">
    <div class="content">
      <!-- 交互 -->
      <div class="info">
        <div class="title">Serendipity</div>
        <div class="title gap">英雄联盟对局助手</div>
        <div class="desc">抓出队伍里的小内鬼，提升游戏体验！</div>
        <div class="btns">
          <div class="download" @click="toDownload">下载 Serendipity</div>
          <div class="desc">
            <span>最新版本 {{ last_version }}</span>
            <a href="#">更新日志</a>
          </div>
          <div class="ad">交流Q群：914241626</div>
        </div>
      </div>

      <!-- 图片 -->
      <div class="img">
        <img :src="showImg.index" alt="展示图"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {showImg} from "../config/index";
import {post} from "../util/request";

const last_version = ref("");

// 获取版本
post("/web/getLastVersionCode").then((res) => {
  last_version.value = res.data.data;
});

// 获取下载地址，并且下载
const toDownload = () => {
  post("/web/getLastVersionUrl").then((res) => {
    window.open(res.data.data, "_blank"); // 新窗口打开外链接
  });
};
</script>
<style scoped>
.download-container {
  height: 100%;
  width: 100%;
}

.download-container .content {
  /* width: 1200px; */
  margin-right: 1rem;
  margin-left: 1rem;
  padding-right: 3rem;
  padding-left: 5rem;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
}

.info {
  /* width: 40%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info .title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  font-weight: 900;
  color: #1f3247;
}

.info .gap {
  margin-bottom: 2rem;
}

.info .desc {
  font-size: 24px;
  color: #262626;
  line-height: 32px;
  font-weight: 400;
}

.info .ad {
  font-size: 14px;
  color: #585858;
  line-height: 32px;
  font-weight: 400;
}

.btns {
  margin-left: 0rem;
}

.btns .download {
  cursor: pointer;
  display: inline-block;
  min-width: 159px;
  height: 48px;
  line-height: 48px;
  margin-top: 38px;
  /*margin-right: 24px;*/
  padding: 0 16px;
  background: #5191d9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}

.btns .download:hover {
  background: #78a6df;
}

.btns .desc {
  font-size: 14px;
  line-height: 22px;
  color: #585858;
  margin-top: 0.5rem;
}

a {
  color: #096dd9;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
  margin-left: 8px;
  font-size: 14px !important;
}

.content .img {
  margin-left: 4rem;
  border: 0.5rem solid #edf2f7;
  border-radius: 0.5rem;
  background-color: #edf2f7;
  flex: 2;
}

.content .img img {
  width: 100%;
  border-radius: 0.5rem;
}
</style>