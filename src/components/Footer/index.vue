<template>
  <div class="footer-container">
    <!-- 版权 -->
    <div class="content">
      <!-- 二维码 -->
      <div class="qr-code">
        <img :src="getImageUrl('qrcode-group.png')" alt="" />
        <!-- 文本 -->
        <div>
          <div>加入对局助手QQ群</div>
          <div class="sub-text">体验最新内测版本，意见想法实时反馈等</div>
        </div>
      </div>
      <div>
        <div class="classify">合作</div>
        <div class="link" @click="openRouteInNewWindow('donate')">赞助项目</div>
        <div class="link" @click="openRouteInNewWindow('contact')">
          软件开发
        </div>
        <div class="link" @click="openRouteInNewWindow('contact')">
          项目外包
        </div>
      </div>
      <div>
        <div class="classify">帮助</div>
        <a
          class="link"
          href="https://www.yuque.com/xiaowuyaya/serendipity"
          target="_blank"
          >常见问题</a
        >
        <!-- TODO: 意见反馈 -->
        <a class="link">意见反馈</a>
        <div class="link" @click="openRouteInNewWindow('contact')">
          联系开发者
        </div>
      </div>
      <div>
        <div class="classify">条款</div>
        <div class="link" @click="openRouteInNewWindow('agreement')">
          用户协议
        </div>
        <div
          class="link"
          target="__blank"
          @click="openRouteInNewWindow('privacy')"
        >
          隐私条款
        </div>
      </div>
    </div>
    <div class="copyright">
      ©CopyRight {{ new Date().getFullYear() }},XiaoWuYaYa. All Rights Reserved.
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >闽ICP备2022001163号</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { getImageUrl } from "@/utils/util";
import { useRouter } from "vue-router";

const router = useRouter();

const openRouteInNewWindow = (routeName: string) => {
  window.open(router.resolve({ path: `/${routeName}` }).href, "_blank");
};
</script>

<style lang="scss" scoped>
.footer-container {
  max-width: 1056px;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0 auto;

  .content {
    color: #111;
    padding: 35px 0;
    margin: 0 auto;
    flex: 1;
    width: 100%;
    max-width: 1056px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    line-height: 2;
    text-align: left;

    .qr-code {
      font-size: 14px;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 124px;
        height: 124px;
      }

      div {
        padding-left: 12px;

        .sub-text {
          padding-top: 16px;
          color: #7f8c8d;
        }
      }
    }

    div {
      .classify {
        margin: 8px 0;
      }

      .link {
        display: block;
        text-decoration: none;
        cursor: pointer;
        color: #7f8c8d;
      }
    }
  }

  .copyright {
    font-size: 14px;
    color: #7f8c8d;
    padding: 30px 0;
    position: relative;
    border-top: 1px solid #eaecef;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      color: #7f8c8d;
      text-decoration: none;
    }
  }
}
</style>
