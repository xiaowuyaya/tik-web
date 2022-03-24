<template>
  <div class="layout-container">
    <div class="nav">
      <div class="logo" @click="routerTo('index')">
        <img :src="logoUrl" alt="serendipity-logo" />
        <div class="title">Serendipity</div>
      </div>
      <div class="menu">
        <div class="link" @click="routerTo('index')">首页</div>
        <div class="link" @click="routerTo(0)">下载</div>
        <div class="link" @click="routerTo(1)">功能</div>
        <div class="link" @click="routerTo(4)">常见问题</div>
        <!-- <div class="link" @click="routerTo(2)">开源文档</div> -->
        <div class="link" @click="routerTo(3)">联系我</div>
      </div>
    </div>
    <router-view class="router" />
    <div class="footer">
      <el-footer>
        <div class="text">
          &copy;{{ new Date().getFullYear() }} 陈宸臣z(eiko.ren) All rights
          reserved.
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
    case "index":
      router.push("/index");
      break;
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem 0;
  border-bottom: 1px solid #edf2f7;
  background-color: #fff;
  position: fixed;
  top: 0px;
  z-index: 999;
}
.logo {
  /* width: 25%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.logo .title {
  font-size: 1.125rem;
  color: #1f3247;
  font-weight: 600;
}

.menu {
  /* width: 55%; */
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu .link {
  line-height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 1rem;
  white-space: nowrap;
  text-align: center;
  color: #36587c;
  font-weight: 600;
  border-width: 1px;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
}

.menu .link:hover {
  color: #606266;
}

.router {
  margin-top: 100px;
}

.footer {
  height: 50px;
  margin-top: 50px;
  z-index: 888;
}
.footer .text {
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>