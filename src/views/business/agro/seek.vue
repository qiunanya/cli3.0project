<template>
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="search-container">
        <el-input
          placeholder="请输入内容"
          v-model="search"
          class="input-with-select"
        >
          <el-select
            v-model="select"
            slot="prepend"
            class="select"
            placeholder="请选择"
          >
            <el-option
              label="餐厅名"
              value="1"
            ></el-option>
            <el-option
              label="订单号"
              value="2"
            ></el-option>
            <el-option
              label="用户电话"
              value="3"
            ></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
          >搜索</el-button>
        </el-input>
      </div>
      <!-- <el-button type="primary">新建</el-button> -->
    </div>
    <div class="list-wrapper">
      <el-table
        :data="tableDate"
        border=""
        style="width:100%;"
        height="100%"
        size="mini"
      >
        <el-table-column
          type="selection"
          width="40"
        ></el-table-column>
        <el-table-column
          label="操作"
          width="80"
        >
          <template slot-scope="scope">
            <el-dropdown>
              <el-button
                type="primary"
                size="mini"
              >操作</el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改</el-dropdown-item>
                <el-dropdown-item>派发</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column
          label="编号"
          prop="id"
          width="60"
        ></el-table-column>
        <el-table-column
          label="保单号"
          prop="policyno"
          width="200"
        ></el-table-column>
        <el-table-column
          label="农户姓名"
          prop="insuredName"
          width="100"
        ></el-table-column>
        <el-table-column
          label="任务状态"
          width="80"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.state == 0">已锁定</span>
            <span v-else>未锁定</span>
          </template>
        </el-table-column>
        <el-table-column
          label="报案时间"
          prop="reportDate"
          width="150"
        ></el-table-column>
        <el-table-column
          label="协赔"
          prop="assistantName"
          width="80"
        ></el-table-column>
        <el-table-column
          label="创建人"
          prop="createName"
          width="80"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          prop="createDate"
          width="150"
        ></el-table-column>
      </el-table>
    </div>
    <div class="page-wrapper">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="pageSizeArr"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pages"
        background=""
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableDate: [
        {
          id: 1,
          policyno: "PJSC012039203940394222",
          insuredName: "张三",
          state: 0,
          reportDate: "2018-11-14 14:05",
          assistantName: "李四",
          createName: "王二",
          createDate: "2018-11-14 14:10"
        },
        {
          id: 1,
          policyno: "PJSC012039203940394222",
          insuredName: "张三",
          state: "创建",
          reportDate: "2018-11-14 14:05",
          assistantName: "李四",
          createName: "王二",
          createDate: "2018-11-14 14:10"
        },
        {
          id: 1,
          policyno: "PJSC012039203940394222",
          insuredName: "张三",
          state: "创建",
          reportDate: "2018-11-14 14:05",
          assistantName: "李四",
          createName: "王二",
          createDate: "2018-11-14 14:10"
        }
      ],
      select: "",
      search: "",
      currentPage4: 1,
      pages: 400,
      pageSize: 100,
      pageSizeArr: [50, 100, 200, 400]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style scoped>
.content-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.search-wrapper {
  height: 50px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
}
.search-container {
  width: 500px;
  margin-right: 10px;
}
.select {
  width: 100px;
}
.list-wrapper {
  height: calc(100% - 85px);
}
.page-wrapper {
  height: 35px;
}
</style>
