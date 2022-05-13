<template>
  <div class="donate-container">
    <div class="content">
      <div class="explanation">
        个人开发不易，目前项目的支出有 域名 以及
        服务器，如果你喜欢这个项目，不妨赞助一下开发者 ❤️
      </div>
      <img class="dev-img" :src="qiniuImgs.developing" alt="developing" />
      <!-- 按钮组 -->
      <div class="btns">
        <!-- 微信 -->
        <el-popover placement="top" trigger="hover">
          <template #reference>
            <div class="wx">微信</div>
          </template>
          <template #default>
            <div class="popover-box">
              <div class="title">微信 扫一扫</div>
              <img :src="qiniuImgs.wechat_qrcode" alt="wechat-qrcode" />
            </div>
          </template>
        </el-popover>
        <!-- 支付宝 -->
        <el-popover placement="top" trigger="hover">
          <template #reference>
            <div class="ali">支付宝</div>
          </template>
          <template #default>
            <div class="popover-box">
              <div class="title">支付宝 扫一扫</div>
              <img :src="qiniuImgs.ali_qrcode" alt="ali-qrcode" />
            </div>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import qiniuImgs from "@/utils/qiniu";
</script>

<style lang="scss" scoped>
.donate-container {
  width: 100%;
  // background-color: #f1f2f6;
  .content {
    max-width: 1056px;
    padding: 0 16px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .explanation {
      padding-top: 80px;
      padding-bottom: 42px;
      color: #172b4d;
      font-size: 18px;
    }

    .dev-img {
      width: 642px;
      border-radius: 4px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .btns {
      display: flex;
      // justify-content: space-between;
      padding: 40px 0;
      div {
        margin: 0 26px;
        font-size: 14px;
        display: inline-block;
        width: 68px;
        text-align: center;
        padding: 10px 20px;
        border-radius: 3px;

        color: #fff;
        cursor: pointer;
        user-select: none;
      }

      .wx {
        background-color: #3fcf77;
      }

      .ali {
        background-color: #02a9f1;
      }
    }
  }
}

.popover-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 16px;
    color: #172b4d;
    padding-bottom: 5px 0;
  }

  img {
    width: 160px;
  }
}
</style>
