<template>
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="search-container">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" class="select" placeholder="请选择">
            <el-option label="用户姓名" value="1"></el-option>
            <el-option label="登录账号" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" type="primary">搜索</el-button>
        </el-input>
      </div>
      <el-button type="primary">
        <i class="el-icon-plus"></i>新建角色
      </el-button>
    </div>
    <div class="list-wrapper">
      <el-table :data="tableDate" border style="width:100%;" height="100%" size="mini">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="操作" width="93">
          <template slot-scope="scope">
            <el-dropdown>
              <el-button type="primary" size="mini">
                <i class="el-icon-menu"></i>操作
              </el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <i class="el-icon-edit-outline"></i>修改
                </el-dropdown-item>
                <el-dropdown-item>
                  <i class="el-icon-delete"></i>删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="权限" width="95">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit">权限</el-button>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="id" width="60"></el-table-column>
        <el-table-column label="角色名称" prop="policyno" width="80"></el-table-column>
        <el-table-column label="角色描述" prop="insuredName" width="150"></el-table-column>
        <el-table-column label="创建人" prop="reportDate" width="150"></el-table-column>

        <el-table-column label="添加时间" prop="addtime" width="150"></el-table-column>
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
        background
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
          policyno: "主赔",
          insuredName: "后台:农房险主赔",
          reportDate: "系统管理员",
          addtime: "2018-12-18 14:15"
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
