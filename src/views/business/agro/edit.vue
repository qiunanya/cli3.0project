<template>
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="search-container">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" class="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-button type="primary" @click="create_new_task()">新建</el-button>
    </div>
    <div class="list-wrapper">
      <el-table :data="tableDate" border style="width:100%;" height="100%" size="mini">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-dropdown>
              <el-button type="primary" size="mini">操作</el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="update_new_task()">修改</el-dropdown-item>
                <el-dropdown-item>派发</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="id" width="60"></el-table-column>
        <el-table-column label="保单号" prop="policyno" width="200"></el-table-column>
        <el-table-column label="农户姓名" prop="insuredName" width="100"></el-table-column>
        <el-table-column label="任务状态" prop="state" width="80"></el-table-column>
        <el-table-column label="报案时间" prop="reportDate" width="150"></el-table-column>
        <el-table-column label="协赔" prop="assistantName" width="80"></el-table-column>
        <el-table-column label="创建人" prop="createName" width="80"></el-table-column>
        <el-table-column label="创建时间" prop="createDate" width="150"></el-table-column>
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
    <!-- 新建任务表单dialog -->
    <el-dialog
      title="新建任务表单"
      width="45%"
      :visible.sync="dialogFormVisible"
      :append-to-body="true"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        <el-form-item label="保单号:" :label-width="formLabelWidth">
          <el-input v-model="form.policyno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="农户名称:" :label-width="formLabelWidth">
          <el-input v-model="form.insuredName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="协赔人姓名:" :label-width="formLabelWidth">
          <el-input v-model="form.assistantName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="报案时间:" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="form.reportDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save_task()">确 定</el-button>
      </div>
    </el-dialog>
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
      pageSizeArr: [50, 100, 200, 400],
      form: {
        id: "", //创建人的id
        policyno: "",
        insuredName: "",
        assistantName: "",
        reportDate: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    /*打开创建弹窗 */
    create_new_task() {
      this.dialogFormVisible = true;
    },
    /*保存任务信息 */
    save_task() {
      console.log(this.form.reportDate);
      console.log(this.form.insuredName);
      this.dialogFormVisible = false;
    }
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
