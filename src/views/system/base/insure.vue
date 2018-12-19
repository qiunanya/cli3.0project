<!--<template>
  <div>险种设置</div>
</template>-->
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
              label="险种名称"
              value="1"
            ></el-option>
            <el-option
              label="险种类型"
              value="2"
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
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>修改</el-dropdown-item>
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
          label="险种名称"
          prop="policyno"
          width="200"
        ></el-table-column>
        <el-table-column
          label="险种类型"
          prop="insuredName"
          width="100"
        ></el-table-column>
        <el-table-column
          label="更改时间"
          prop="reportDate"
          width="150"
        ></el-table-column>
        <el-table-column
          label="添加时间"
          prop="assistantName"
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
          policyno: "我是险种名称",
          insuredName: "险种类型",
          reportDate: "更改时间",
          assistantName: "2018-11-14 14:05"
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
