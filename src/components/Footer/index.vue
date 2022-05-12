<template>
  <div class="footer-container">
    <!-- 版权 -->
    <div class="content">
      <!-- TODO: 还没想好放什么 -->
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
</script>

<style lang="scss" scoped>
.footer-container {
  max-width: 1056px;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0 auto;

  .content {
    height: 50px;
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
