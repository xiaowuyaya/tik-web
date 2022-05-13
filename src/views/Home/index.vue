<template>
  <div class="home-container">
    <!-- 主要介绍 -->
    <div class="row">
      <div class="content">
        <div class="main">
          <!-- slogan -->
          <div class="slogan">
            <!-- 标题 -->
            <div class="title">英雄联盟对局助手</div>
            <!-- 描述 -->
            <div class="description">
              这可能是你用过最体验最好的英雄联盟游戏工具
            </div>
            <!-- 按钮组 -->
            <div class="btns">
              <div class="btn download">下载 Windows 版本 V2.5.13</div>
              <div class="btn sub">视频介绍</div>
            </div>
          </div>
          <!-- video -->
          <div class="video">
            <img :src="getImageUrl('home-video-play.png')" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { getImageUrl } from "@/utils/util";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;

  .row {
    background-color: #f1f2f6;

    .content {
      max-width: 1056px;
      padding: 0 16px;
      box-sizing: border-box;
      margin: 0 auto;

      .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .slogan {
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding: 10px 0;

          .title {
            font-size: 42px;
            color: #172b4d;
            padding: 10px 0;
            letter-spacing: 2px;
            font-weight: 600;
          }

          .description {
            font-size: 20px;
            color: #505f79;
          }

          .btns {
            margin-top: 50px;

            .btn {
              font-size: 16px;
              display: inline-block;
              padding: 10px 20px;
              border-radius: 3px;
              background-color: #24558b;
              color: #fff;
              cursor: pointer;
              user-select: none;
            }

            .download {
              margin-right: 10px;
            }

            .sub {
              background-color: #8392b4;
            }
          }
        }

        .video {
          padding: 160px 0;

          img {
            max-width: 100%;
            width: 496px;
            border-radius: 14px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
