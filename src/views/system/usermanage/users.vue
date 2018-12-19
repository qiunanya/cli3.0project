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
      <el-button type="primary" @click="addUsers()">
        <i class="el-icon-plus"></i>新建
      </el-button>
    </div>
    <div class="list-wrapper">
      <el-table :data="tableData" border style="width:100%;" height="100%" size="mini">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="操作" width="93">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommand($event,scope.row)">
              <el-button type="primary" size="mini">
                <i class="el-icon-menu"></i>操作
              </el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="editUser">
                  <i class="el-icon-edit-outline"></i>修改
                </el-dropdown-item>
                <el-dropdown-item command="deleteUser">
                  <i class="el-icon-delete"></i>删除
                </el-dropdown-item>
                <el-dropdown-item command="editPassword">
                  <i class="el-icon-setting"></i>修改密码
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
        <el-table-column label="用户姓名" prop="policyno" width="80"></el-table-column>
        <el-table-column label="登录账号" prop="insuredName" width="100"></el-table-column>
        <el-table-column label="性别" prop="reportDate" width="80"></el-table-column>
        <el-table-column label="联系方式" prop="assistantName" width="150"></el-table-column>
        <el-table-column label="所属区域" prop="organ" width="150"></el-table-column>
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

    <!--新增用户dialog -->
    <el-dialog
      title="新增用户表单"
      width="46%"
      :visible.sync="dialogAddUserFormVisible"
      :append-to-body="true"
      :close-on-click-modal="false"
      top="20px"
    >
      <el-form :model="form">
        <el-form-item label="用户姓名:" :label-width="formLabelWidth">
          <el-input v-model="form.policyno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录账号:" :label-width="formLabelWidth">
          <el-input v-model="form.insuredName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="form.reportDate" label="1">男</el-radio>
            <el-radio v-model="form.reportDate" label="2">女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="电话号码:" :label-width="formLabelWidth">
          <el-input v-model="form.assistantName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属区域:" :label-width="formLabelWidth">
          <el-input v-model="form.organ" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddUserFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAddUserFormVisible = false">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          policyno: "李四",
          insuredName: "QQ",
          reportDate: "男",
          assistantName: "1254875464",
          organ: "贵阳市南明区",
          addtime: "2018-12-18 14:15"
        }
      ],
      form: {
        id: "",
        policyno: "",
        insuredName: "",
        reportDate: "1",
        assistantName: "",
        organ: ""
      },
      select: "",
      search: "",
      currentPage4: 1,
      pages: 400,
      pageSize: 100,
      pageSizeArr: [50, 100, 200, 400],
      dialogAddUserFormVisible: false,
      dialogEditUserFormVisible: false,
      formLabelWidth: "80px"
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    /*获取点击事件类型，并执行对应方法*/
    handleCommand(event, row) {},
    /**新增用户 */
    addUsers() {
      this.dialogAddUserFormVisible = true;
    }
    /**删除用户 */
    /**修改密码 */
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
