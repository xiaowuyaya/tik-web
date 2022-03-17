<template>
  <div class="connect-container">
    <div class="content">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h2 class="slogan">如果你有一些想法、意见或者是合作需要，欢迎来与我联系！</h2>
      <h2 class="desc">📮 邮箱：liaolingwei605@163.com</h2>
      <h2 class="desc">💬 微信：ek1_life (添加请说明来意)</h2>
      <h2 class="desc">🐧 QQ：2209087068 (添加请说明来意)</h2>
    </div>
  </div>
</template>
<script setup>
import { logoUrl } from "../config/index";
</script>

<style scoped>
.connect-container {
  height: 80%;
  width: 100%;
}
.content {
  width: 60%;
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

.content .slogan {
  text-shadow: rgb(0 0 0 / 20%) 1px 1px 5px;
  color: #5191d9;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 400;
  text-align: left;
  margin-bottom: 1.5rem;
  line-height: 1.625;
  font-size: 1.25rem;
}
.content .desc {
  width: 100%;
  margin: 0 0 0.5rem 1rem;
  line-height: 1.625;
  font-size: 1.25rem;
  font-weight: 600;
  color: #36587c;
  text-align: left;
}
</style>