<template>
  <div class="bans-container">
    <div class="content">
      <!-- header -->
      <div class="header">
        <div class="title">诸神榜</div>
        <p>
          此页面将展示被超过2名Serendipity用户拉黑的前20名玩家排名榜单以及拉黑原因。
        </p>
        <div class="description">
          如果遇到加载失败的情况请刷新页面重新获取数据
        </div>
      </div>
      <!-- table -->
      <el-table
        :data="tableData"
        :empty-text="emptyText"
        :default-sort="{ prop: 'count', order: 'descending' }"
        border
        style="width: 100%"
      >
        <el-table-column
          align="center"
          width="120"
          prop="environment"
          label="大区"
        />
        <el-table-column
          align="center"
          width="180"
          prop="black_name"
          label="游戏名"
        />
        <el-table-column align="center" prop="reason" label="上榜原因" />
        <el-table-column
          align="center"
          width="90"
          prop="count"
          label="拉黑次数"
        />
        <el-table-column
          align="center"
          width="180"
          prop="recent_time"
          sortable
          label="最近被拉黑时间"
        >
          <template #default="{ row }">
            <div>
              {{ dayjs(row.recent_time).format("YYYY/MM/DD HH:mm:ss") }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import api from "@/api/index";
import dayjs from "dayjs";
import { onMounted, ref } from "vue";

interface IBans {
  black_name: string;
  count: number;
  environment: string;
  reason: string;
  recent_time: string;
}

const emptyText = ref<string>("正在获取数据，请稍等...");
const tableData = ref<IBans[]>([]);

// onMounted(() => {
api.getBansList().then((res: any) => {
  tableData.value = res.data;
});
// });
</script>

<style lang="scss" scoped>
.bans-container {
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

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      .title {
        font-size: 28px;
        color: #172b4d;
        letter-spacing: 2px;
        font-weight: 600;
      }

      .description {
        font-size: 14px;
        color: #505f79;
      }
    }
  }
}
</style>
