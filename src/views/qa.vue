<template>
  <div class="qa-container">
    <div class="header">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="title">Serendipity 常见问题解答</h1>
    </div>

    <div v-for="(item, index) in qa" :key="index">
      <div class="row">
        <div class="question">问：{{ item.q }}</div>
        <div class="answer">答：{{ item.a }}</div>
      </div>
    </div>

    <div class="form">
      <div class="fb-title">
        如果以上并没有解决你的问题，欢迎加群反馈或在下方填写表单
      </div>
      <div class="fb-form">
        <el-form :model="feedBackForm" label-width="120px" label-position="top">
          <el-form-item label="标题" size="large">
            <el-input
              v-model="feedBackForm.title"
              size="large"
              placeholder="请简要概括你的问题"
            />
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
        <el-button
          type="primary"
          size="large"
          style="float: right"
          @click="feedBackGo"
          >提交</el-button
        >
      </div>
    </div>
    <!-- 回到顶部 -->
    <el-backtop right="20"></el-backtop>
  </div>
</template>
<script setup>
import { logoUrl, qa } from "../config/index";
import { ref, h } from "vue";
import { ElMessage } from "element-plus";
import { post } from "../util/request";

const feedBackForm = ref({});

const feedBackGo = () => {
  if (!feedBackForm.value.title) {
    ElMessage.error("请输入标题");
    return;
  }

  if (!feedBackForm.value.content) {
    ElMessage.error("请输入反馈内容");
    return;
  }

  const data = {
    title: feedBackForm.value.title,
    content: feedBackForm.value.content,
  };

  post("/feedBack/add", data).then((res) => {
    if (res.data.code == 20000) {
      ElMessage({
        message: "提交反馈成功，请耐心等待回复",
        type: "success",
      });
    } else {
      ElMessage.error(
        "提交反馈失败，系统可能遇到问题，可以通过导航栏的 联系我，进行反馈。"
      );
    }
  });
};
</script>

<style lang="less" scoped>
.qa-container {
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
    margin: 0 10rem 1rem 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    .question {
      // text-shadow: rgb(0 0 0 / 20%) 1px 1px 5px;
      color: #5191d9;
      margin: 0 0 0.5rem 1rem;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 0.2rem;
      line-height: 1.625;
      font-size: 1.25rem;
      font-weight: 700;
    }
    .answer {
      width: 100%;
      margin: 0 0 0.5rem 1rem;
      line-height: 1.625;
      font-size: 1rem;
      font-weight: 500;
      color: #36587c;
      text-align: left;
    }
  }

  .form {
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    .fb-title {
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 0.8rem;
      line-height: 1.1;
      font-weight: 900;
      color: #1f3247;
    }
    .fb-form {
      width: 60%;
    }
  }
}

</style>
