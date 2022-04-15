<template>
  <div class="qa-container">
    <div class="content">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="text title">Serendipity 英雄联盟对局助手 常见问题回答</h1>

      <div v-for="(item, index) in qa" :key="index">
        <div class="row">
          <div class="question">问：{{ item.q }}</div>
          <div class="answer">答：{{ item.a }}</div>
        </div>
      </div>

      <div class="form">
        <div class="fb-title">如果以上并没有解决你的问题，欢迎在下方反馈</div>
        <div class="fb-form">
          <el-form :model="feedBackForm" label-width="120px" label-position="top">
          <el-form-item label="标题" size="large">
            <el-input v-model="feedBackForm.title" size="large" placeholder="请简要概括你的问题"/>
          </el-form-item>
          <el-form-item label="主要内容" size="large">
            <el-input
            size="large"
              v-model="feedBackForm.content"
              :rows="4"
              type="textarea"
              placeholder="请输入你所遇到的问题，并在末尾留下联系方式，我将尽快回复。"
            />
          </el-form-item>
        </el-form>
        <el-button type="primary" size="large" style="float: right" @click="feedBackGo">提交</el-button>
        </div>
      </div>
    </div>
        <!-- 回到顶部 -->
    <el-backtop right="20"></el-backtop>
  </div>
</template>
<script setup>
import { logoUrl, qa } from "../config/index";
import { ref, h } from "vue";
import { ElMessage } from 'element-plus'
import { post } from "../util/request";

const feedBackForm = ref({});

const feedBackGo = () => {


  if(!feedBackForm.value.title){
    ElMessage.error('请输入标题')
    return
  }

  if(!feedBackForm.value.content){
    ElMessage.error('请输入反馈内容')
    return
  }

  const data = {
    title: feedBackForm.value.title,
    content: feedBackForm.value.content,
  }

  post("/feedBack/add",data).then(res => {
    if(res.data.code == 20000){
      ElMessage({
        message: "提交反馈成功，请耐心等待回复",
        type:"success"
      })
    }else{
      ElMessage.error('提交反馈失败，系统可能遇到问题，可以通过导航栏的 联系我，进行反馈。')
    }
  })
}
</script>

<style scoped>
.qa-container {
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
  color: #5191d9;
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

.form{
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.form .fb-title {
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  line-height: 1.1;
  font-weight: 900;
  color: #1f3247;
}

.form .fb-form{
  width: 60%;
}
</style>