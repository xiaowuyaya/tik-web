<script setup>
import Nav from "@/components/nav.vue";
console.log(">>> Serendipity 英雄联盟对局助手 <<<");
</script>

<template>
  <!-- 导航栏 -->
  <Nav></Nav>
  <router-view class="router" />
  <el-footer class="footer">
    <div class="text">
      &copy;{{ new Date().getFullYear() }} 陈宸臣z(eiko.ren) All rights
      reserved.
    </div>
  </el-footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body,
#app {
  height: 95%;
}

.router {
  margin-top: 100px;
}

.footer{
  height: 100px;
  line-height: 100px;
}
.footer .text {
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>
