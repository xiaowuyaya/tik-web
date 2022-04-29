<template>
  <div class="blacklist-container">
    <div class="header">
      <img class="logo" :src="logoUrl" alt="serendipity-logo" />
      <h1 class="title">诸神榜</h1>
      <div class="desc">
        此页面将展示被超过2名Serendipity用户拉黑的前20名玩家排名榜单以及拉黑原因。
      </div>
    </div>
    <div class="table-div">
      <el-table
        :data="tableData"
        :empty-text="emptyText"
        :default-sort="{ prop: 'count', order: 'descending' }"
        border
        style="width: 100%"
      >
        <el-table-column
          align="center"
          prop="environment"
          label="大区"
          width="130"
        />
        <el-table-column
          align="center"
          prop="black_name"
          label="游戏名"
          width="200"
        />
        <el-table-column align="center" prop="reason" label="上榜原因" />
        <el-table-column
          align="center"
          prop="count"
          label="拉黑次数"
          width="100"
        />
        <el-table-column
          align="center"
          prop="recent_time"
          sortable
          label="最近被拉黑时间"
          width="200"
        >
          <template #default="{ row }">
            <div>
              {{
                dateFormat("YYYY-mm-dd  HH:MM:ss", new Date(row.recent_time))
              }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { logoUrl } from "../config/index";
import { ref } from "vue";
import { post } from "../util/request";
import { dateFormat } from "../util/timeFormat";

const tableData = ref([]);
const emptyText = ref("正在获取数据，请稍等...");

// 获取数据
const postData = {
  count: 2,
};
post("/blackList/superFoolList", postData)
  .then((res) => {
    emptyText.value = "info: 当前统计数据不足 ";
    tableData.value = res.data.data;
  })
  .catch((err) => {
    emptyText.value = "error: 服务器异常 ";
  });
</script>

<style lang="less" scope>
.blacklist-container {
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
      // padding-bottom: 3rem;
      color: #1f3247;
      text-align: center;
      // margin-block-start: 1em;
      // border-bottom: 1px solid rgb(238, 238, 238);
    }
    .desc {
      text-align: center;
      padding-bottom: 3rem;
    }
  }
  .table-div {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }
}
</style>
