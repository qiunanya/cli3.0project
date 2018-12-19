<template>
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="search-container">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-select v-model="select" slot="prepend" class="select" placeholder="请选择">
            <el-option label="农户姓名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" type="primary">搜索</el-button>
        </el-input>
      </div>
      <!-- <el-button type="primary">新建</el-button> -->
    </div>
    <div class="list-wrapper">
      <el-table :data="tableData" border style="width:100%;" height="100%" size="mini">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommand($event,scope.row)">
              <el-button type="primary" size="mini">操作</el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit">修改</el-dropdown-item>
                <el-dropdown-item command="delete">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="id" width="60"></el-table-column>
        <el-table-column label="保单号" prop="policyno" width="200"></el-table-column>
        <el-table-column label="农户姓名" prop="insuredName" width="100"></el-table-column>
        <el-table-column label="任务状态" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.state == 0">已完成</span>
            <span v-else>未完成</span>
          </template>
        </el-table-column>
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
    <!--修改任务dialog-->
    <el-dialog
      title="修改任务表单"
      width="45%"
      :visible.sync="dialogEditFormVisible"
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
        <el-button @click="dialogEditFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditFormVisible = false">更新</el-button>
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
          policyno: "PJSC012039203940394222",
          insuredName: "张三",
          state: 0,
          reportDate: "2018-11-14 14:05",
          assistantName: "李四",
          createName: "王二",
          createDate: "2018-11-14 14:10"
        },
        {
          id: 2,
          policyno: "PJSC012039203940394222",
          insuredName: "张三",
          state: "创建",
          reportDate: "2018-11-14 14:05",
          assistantName: "李四",
          createName: "王二",
          createDate: "2018-11-14 14:10"
        }
      ],
      form: {
        id: 2,
        policyno: "PJSC012039203940394222",
        insuredName: "张三",
        state: "创建",
        reportDate: "2018-11-14 14:05",
        assistantName: "李四",
        createName: "王二",
        createDate: "2018-11-14 14:10"
      },
      select: "",
      search: "",
      currentPage4: 1,
      pages: 400,
      pageSize: 100,
      pageSizeArr: [50, 100, 200, 400],
      dialogEditFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    handleCommand(event, row) {
      console.log("event", event);
      console.log("row:", row);
      if (event == "edit") {
        this.edit(row.id);
      }
      if (event == "delete") {
        this.delete(row.id);
      }
    },
    /* 修改*/
    edit(id) {
      this.dialogEditFormVisible = true;
      //console.log("修改id：" + id);
      //this.tableData = row;
      console.log(id);
    },
    /*删除 */
    delete(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("删除的id是：" + id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
