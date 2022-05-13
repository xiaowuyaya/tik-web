<template>
  <div class="contact-container">
    <div class="content">
      <!-- 展示图片 -->
      <img :src="qiniuImgs.IMG_20220513_192317" alt="IMG_20220513_192317" />
      <!-- article -->
      <div class="article">
        <p>XiaoWuYaYa @ 福州，Java后端开发。</p>
        <p>
          现就职于
          <a
            href="http://www.newland.cn
"
            target="_blank"
            >福建新大陆通信科技股份有限公司</a
          >
        </p>
        <h3>开发</h3>
        <p>如果你有开发相关的需求欢迎与我联系。</p>
        <p>承接：小程序，桌面应用，Android App，网站，CMS后台系统等。</p>
        <h3>技术栈</h3>
        <p>前端：HTML, JavaScript, Css, TypeScript, Vue, jQuery, SSR</p>
        <p>后端：Java, Node.js, Python</p>
        <p>DB：MySQL, Oracle, MongoDB, Redis</p>
        <p>其他：微服务, Spring全家桶, electron, koa.js, egg.js, FastApi</p>
        <h3>如何联系到我</h3>
        <ul>
          <li>
            微信：
            <el-popover placement="top" trigger="hover">
              <template #reference>
                <a href="#" target="_blank">陈宸臣z</a>
              </template>
              <template #default>
                <div class="popover-box">
                  <div class="title">微信 扫一扫</div>
                  <img :src="qiniuImgs.person_wechat" alt="person-wechat" />
                </div>
              </template>
            </el-popover>
          </li>
          <li>
            邮件：<a href="mailto:liaolingwei605@163.com"
              >liaolingwei605@163.com</a
            >
          </li>
          <li>QQ：282143356</li>
          <li>
            BiliBili：<a
              href="https://space.bilibili.com/30368302"
              target="_blank"
              >陈宸臣z</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import qiniuImgs from "@/utils/qiniu";
</script>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  // background-color: #f1f2f6;
  .content {
    max-width: 1056px;
    padding: 40px 16px 18px 16px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 728px;
      padding: 10px 0;
    }

    .article {
      font-size: 16px;
      color: #303133;
      margin-right: auto;
      padding: 10px 0;

      a {
        color: #5191d9;
        display: inline-block;
        text-decoration: none;
      }

      h3 {
        font-size: 1.2rem;
      }

      ul {
        margin-block-start: -0.5rem;

        li {
          font-size: 16px;
          margin: 5px 0;
        }
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
