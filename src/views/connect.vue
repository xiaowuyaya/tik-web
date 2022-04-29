<template>
  <div class="connect-container">
    <div class="header">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="title">联系开发者</h1>
    </div>

    <div class="content">
      <h2 class="desc">📮 邮箱：liaolingwei605@163.com</h2>
      <h2 class="desc">💬 微信：ek1_life (添加请说明来意)</h2>
      <h2 class="desc">🐧 QQ：2209087068 (添加请说明来意)</h2>
      <h2 class="desc">
        📺 bilibili：<a href="https://space.bilibili.com/30368302">ek1_3zz</a>
      </h2>
      <div class="introduce">
        <h3 align="center">个人开发，承接项目外包，代写</h3>
        <p>技术栈如下：</p>
        <p>前端：三件套、Vue、jQuery</p>
        <p>后端：Java、Node.js、Python</p>
        <p>数据库：MySQL, Oracle, MongoDB, Redis</p>
        <p>
          框架：Spring MVC, SpringBoot, SpringCloud, electron, egg.js, koa.js,
          FastApi
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { logoUrl } from "../config/index";
</script>

<style lang="less" scoped>
.connect-container {
  height: 80%;
  width: 100%;
  .header {
    margin-bottom: 1rem;
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
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      font-size: 2.5rem;
      margin: 0 8rem;
      padding-bottom: 3rem;
      color: #1f3247;
      text-align: center;
      // margin-block-start: 1em;
      border-bottom: 1px solid rgb(238, 238, 238);
    }
  }

  .content{
    margin: 0 14rem 1rem 14rem;
    padding: 1rem;
    .desc {
    width: 100%;
    margin: 0 0 0.5rem 1rem;
    line-height: 1.625;
    font-size: 1.1rem;
    font-weight: 500;
    color: #36587c;
    text-align: left;
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
    /*font-size: 14px !important;*/
  }
  .introduce {
    // width: 600px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 14px 40px;
    margin: 3rem 100px;
    box-shadow: 0 2px 8px -2px rgb(5 8 82 / 12%);
  }
  }
}
</style>
