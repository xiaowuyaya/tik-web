<template>
  <div class="blacklist-container">
    <div class="content">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="text title">诸神板</h1>
      <p class="desc">
        此页面将展示所有Serendipity用户所拉黑玩家的排名榜单以及拉黑原因。<br />
        <strong>诸神板</strong> 展示被超过2名Serendipity用户拉黑的前20名玩家。
      </p>
    </div>
    <div class="table-div">
      <el-table :data="tableData" :empty-text="emptyText" :default-sort="{ prop: 'count', order: 'descending' }"  border style="width: 100%">
        <el-table-column align="center" prop="environment" label="大区" width="130" />
        <el-table-column align="center" prop="black_name" label="游戏名" width="180" />
        <el-table-column align="center" prop="reason" label="上榜原因"  />
        <el-table-column align="center" prop="count" label="拉黑次数" width="100"/>
        <el-table-column align="center" prop="recent_time" sortable  label="最近被拉黑时间" >
          <template #default="{ row }">
          <div>{{dateFormat("YYYY-mm-dd  HH:MM:ss",new Date(row.recent_time))}}</div>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { logoUrl } from "../config/index";
import {ref} from "vue";
import {post} from "../util/request";
import { dateFormat } from'../util/timeFormat'

const tableData = ref([])
const emptyText = ref("正在获取数据，请稍等...")

// 获取数据
const postData = {
  count: 2
}
post("/blackList/superFoolList", postData).then((res) => {
  emptyText.value = "info: 当前统计数据不足 "
  tableData.value = res.data.data;
}).catch((err) => {
  emptyText.value = "error: 服务器异常 "
});
</script>

<style scope>
.blacklist-container {
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
  border-bottom: 1px solid rgb(238, 238, 238);
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
  /* padding-bottom: 3rem; */
  line-height: 1.1;
  font-weight: 900;
  color: #1f3247;
  text-align: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  /* border-bottom: 1px solid rgb(238, 238, 238); */
}

.content .desc {
  width: 100%;
  margin-bottom: 1rem;
  line-height: 1.625;
  font-size: 1.25rem;
  font-weight: 400;
  color: #36587c;
  text-align: center;
}

.table-div{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}
</style>
