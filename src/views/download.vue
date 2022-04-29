<template>
  <div class="download-container">
    <div class="content">
      <!-- 交互 -->
      <div class="info">
        <div class="title">Serendipity</div>
        <div class="title">英雄联盟对局助手</div>
        <div class="desc">这可能是你用过最体验最好的英雄联盟游戏工具</div>
        <div class="btns">
          <div class="download" @click="toDownload">立即下载</div>
          <div class="desc">
            <span>最新版本 {{ last_version }}</span>
            <a href="#" @click="router.push('/versionLog')">更新日志</a>
          </div>
          <div class="ad">交流Q群：914241626</div>
        </div>
      </div>

      <!-- 图片 -->
      <div class="img-show">
        <img :src="showImg.index" alt="展示图" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { showImg } from "../config/index";
import { post } from "../util/request";
import { useRouter } from "vue-router";

const last_version = ref("");
const router = useRouter();

// 获取版本
post("/web/getLastVersionCode").then((res) => {
  last_version.value = res.data.data;
});

// 获取下载地址，并且下载
const toDownload = () => {
  post("/web/getLastVersionUrl").then((res) => {
    window.open(res.data.data, "_blank"); // 新窗口打开外链接
    post("/downloadStatistics/add").then((res) => {});
  });
};
</script>
<style lang="less" scoped>
.download-container {
  height: 100%;
  width: 100%;
  .content {
    margin-right: 1rem;
    margin-left: 1rem;
    padding-right: 3rem;
    padding-left: 5rem;
    display: flex;
    flex-direction: row;

    .info {
      /* width: 40%; */
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-family: "YouSheBiaoTiHei";
        font-size: 3rem;
        margin-bottom: 0.5rem;
        line-height: 1.1;
        color: #1f3247;
      }

      .desc {
        margin-top: 0.5rem;
        text-shadow: rgba(143, 143, 189, 0.2) 1px 1px 5px;
        font-size: 1.5rem;
        text-transform: uppercase;
       color: #5191d9;
       font-weight: 700;
      }

      .btns {
        margin-top: 3rem;
        .download {
          font-family: YouSheBiaoTiHei;
          cursor: pointer;
          display: inline-block;
          min-width: 180px;
          height: 48px;
          line-height: 48px;
          background: #5191d9;
          border-radius: 3px;
          text-align: center;
          font-size: 26px;
          color: #fff;
        }

        .download:hover {
          background: #78a6df;
        }

        .desc {
          font-size: 14px;
          line-height: 22px;
          color: #585858;
          margin-top: 1.25rem;
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
      }

      .ad {
        font-size: 14px;
        color: #585858;
        line-height: 32px;
        font-weight: 400;
      }
    }

    .img-show {
      // margin-left: 4rem;
      flex: 1.7;
      img {
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      }
    }
  }
}
</style>
