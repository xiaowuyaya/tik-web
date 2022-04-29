<template>
  <div class="layout-container">
    <div class="nav">
      <div class="logo" @click="routerTo('index')">
        <img :src="logoUrl" alt="serendipity-logo" />
        <div class="title">Serendipity 英雄联盟对局助手</div>
      </div>
      <div class="menu">
        <div class="link" @click="routerTo('index')">首页</div>
        <div class="link" @click="routerTo(0)">下载</div>
        <!-- <div class="link" @click="routerTo(1)">功能</div> -->
        <div class="link warn-font" @click="routerTo(6)">更新日志</div>
        <div class="link" @click="routerTo(4)">常见问题</div>
        <div class="link warn-font" @click="routerTo(5)">诸神板</div>
        <!-- <div class="link" @click="routerTo(2)">开源文档</div> -->
        <div class="link" @click="routerTo(3)">联系我</div>
      </div>
    </div>
    <router-view class="router" />
    <div class="footer">
      <el-footer>
        <div class="text">
          &copy;CopyRight {{ new Date().getFullYear() }}, lol-tool.com
          XiaoWuYaYa. All Rights Reserved. reserved.
          <a class="text" href="http://www.beian.gov.cn/">
            闽ICP备2022001163号</a
          >
        </div>
      </el-footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { logoUrl } from "../config/index";

const router = useRouter();

const routerTo = (index) => {
  switch (index) {
    case 0:
      router.push("/download");
      break;
    case 1:
      router.push("/feat");
      break;
    case 2:
      router.push("/open-source");
      break;
    case 3:
      router.push("/connect");
      break;
    case 4:
      router.push("/qa");
      break;
    case 5:
      router.push("/blacklist");
      break;
    case 6:
      router.push("/versionLog");
      break;
    case "index":
      router.push("/index");
      break;
  }
};
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  .nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5rem 2rem;
    background-color: #fff;
    position: fixed;
    top: 0px;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }

      .title {
        font-family: "YouSheBiaoTiHei";
        font-size: 1.125rem;
        color: #1f3247;
      }
    }
    
    .menu {
      // width: 33%;
      // padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;

      .link {
        font-family: JiZiJingDianDaHeiJianFan;
        line-height: 2rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        font-size: 1rem;
        white-space: nowrap;
        text-align: center;
        color: #36587c;
        font-weight: 500;
        border-width: 1px;
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;
      }

      .link:hover {
        color: #606266;
      }
    }
  }

  .router {
    margin-top: 120px;
  }

  .footer {
    height: 50px;
    margin-top: 50px;
    z-index: 888;

    .text {
      color: #999;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
