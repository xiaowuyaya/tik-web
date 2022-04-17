<template>
  <div class="versionLog-container">
    <div class="content">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="text title">Serendipity 更新日志</h1>
      <div class="row">
        <div class="question">VERSION: 1.4.1501</div>
        <div class="answer">1.添加了黑名单云同步功能 <br>2.修复了样式显示问题 <br>3.修复已知bug</div>
      </div>
      <div class="row">
        <div class="question">VERSION: 1.4.13</div>
        <div class="answer">1.黑名单模块记录添加“拉黑原因”字段  <br>2.修复已知bug</div>
      </div>
      <div class="row">
        <div class="question">VERSION: 1.4.7</div>
        <div class="answer">1.添加战绩查询模块 <br>2.修复了样式显示问题 <br>3.修复已知bug</div>
      </div>
      <div class="row">
        <div class="question">VERSION: 1.3.27</div>
        <div class="answer">项目基本完成，上线公测</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { logoUrl } from "../config/index";
</script>
<style scoped>
.versionLog-container {
  height: 100%;
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
.content .text {
  padding: 0 18%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 32px;
}
.content .title {
  font-size: 2rem;
  padding-bottom: 3rem;
  line-height: 1.1;
  font-weight: 900;
  color: #1f3247;
  text-align: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.content .row {
  padding: 1rem;
}

.content .row > .question {
  text-shadow: rgb(0 0 0 / 20%) 1px 1px 5px;
  /* color: #5191d9; */
  margin: 0 0 0.5rem 1rem;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-bottom: 0.2rem;
  line-height: 1.625;
  font-size: 1.25rem;
}

.content .row > .answer {
  width: 100%;
  margin: 0 0 0.5rem 1rem;
  line-height: 1.625;
  font-size: 1rem;
  font-weight: 500;
  color: #36587c;
  text-align: left;
}
</style>
