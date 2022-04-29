<template>
  <div class="versionLog-container">
    <div class="header">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="title">Serendipity 更新日志</h1>
    </div>

    <div class="row">
      <div class="question">VERSION: 1.4.1802 (最新)</div>
      <div class="content">
        <p>1. 修复了游戏内发送的问题😆！！！</p>
        <p>2. 修复了大区显示错误的问题</p>
        <p>
          3. 【对局面板】去除算法积分显示，更改为显示单双排段位
        </p>
        <p>4. 【急速秒选】添加是否自动确认选项</p>
        <p>5. 底部显示版本号，点击可查看版本更新日志</p>
        <p>
          6. 关于
          5v5训练模式的问题主要是因为马服对这一块做了屏蔽，暂时还没有解决方式，目前只能通过添加假人的方式进行5v5了
        </p>
        <p><strong>待添加或修复：</strong></p>
        <p>1. 自动禁用英雄的功能，存在问题</p>
        <p>2. 战绩查询显示的模式需要具体到：单双，灵活等</p>
        <p>3. 算法存在一定问题，需要优化。（重要）</p>
        <p>4. 关于win7用户无法使用的问题，暂时没有定位到</p>
        <p>5. 添加自定义发送快捷键功能</p>
        <p>
          6. 部分用户反应在游戏开启时，仍然没有检测到游戏的问题
        </p>
        <p>
          <strong
            >自从上线以来收到了很多朋友的反馈与支持，有很多新奇的想法，这边做个小预告：</strong
          >
        </p>
        <p>
          1.
          更换新版本ui界面风格，主色调为白色，当然灰色调也会保存，用户可自行切换。
        </p>
        <p>
          2.
          由于目前统计的数据是所有模式的综合，下个大版本更新将更改为各个模式分开统计
        </p>
        <p>
          3. 添加荣誉时刻，类似于wegame的荣誉截图，自动分享到官网，综合展示
        </p>
        <p>
          3. 接入opgg api，在选择英雄时可以直接使用opgg提供的符文以及出装。
        </p>
        <p style="color: #f56c6c">
          这是一个庞大的工程，感谢大家的支持。
        </p>
      </div>
    </div>
    <div class="row">
      <div class="question">VERSION: 1.4.1501</div>
      <div class="content">
        <p>1.添加了黑名单云同步功能</p>
        <p>2.修复了样式显示问题</p>
        <p>3.修复已知bug</p>
      </div>
    </div>
    <div class="row">
      <div class="question">VERSION: 1.4.13</div>
      <div class="content">
        <p>1.黑名单模块记录添加“拉黑原因”字段</p>
        <p>2.修复已知bug</p>
      </div>
    </div>
    <div class="row">
      <div class="question">VERSION: 1.4.7</div>
      <div class="content">
        <p>1.添加战绩查询模块</p>
        <p>2.修复了样式显示问题</p>
        <p>3.修复已知bug</p>
      </div>
    </div>
    <div class="row">
      <div class="question">VERSION: 1.3.27</div>
      <div class="content">
        <p>项目基本完成，上线公测</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { logoUrl } from "../config/index";
</script>
<style lang="less" scoped>
.versionLog-container {
  height: 100%;
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

  .row {
    margin: 0 5rem 1rem 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    .question {
      text-shadow: rgb(0 0 0 / 20%) 1px 1px 5px;
      margin-bottom: 0.75rem;
      font-style: normal;
      font-size: 1.25rem;
      // width: 70%;
    }

    .content{
      width: 80%;
      p{
        width: 100%;
      margin: 0 0 0.5rem 1rem;
      line-height: 1.625;
      font-size: 1rem;
      font-weight: 500;
      color: #36587c;
      text-align: left;
      }
    }
  }
}
</style>
