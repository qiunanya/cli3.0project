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
      <el-button type="primary" @click="createFarm()">
        <i class="el-icon-plus"></i>新增
      </el-button>
    </div>
    <div class="list-wrapper">
      <el-table :data="tableDate" border style="width:100%;" height="100%" size="mini">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column label="操作" width="93">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommand($event,scope.row)">
              <el-button type="primary" size="mini">
                <i class="el-icon-menu"></i>操作
              </el-button>
              <span class="el-dropdown-link"></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="editFarm">
                  <i class="el-icon-edit-outline"></i>修改
                </el-dropdown-item>
                <el-dropdown-item command="deleteFarm">
                  <i class="el-icon-delete"></i>删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="id" width="60"></el-table-column>
        <el-table-column label="负责人" prop="name" width="80"></el-table-column>
        <el-table-column label="性别" prop="sex" width="50"></el-table-column>
        <el-table-column label="年龄" prop="age" width="50"></el-table-column>
        <el-table-column label="身份证号" prop="card_no" width="150"></el-table-column>
        <el-table-column label="电话号码" prop="phone" width="100"></el-table-column>
        <el-table-column label="地址" prop="address" width="150"></el-table-column>
        <el-table-column label="经度" prop="lng" width="120"></el-table-column>
        <el-table-column label="纬度" prop="lat" width="120"></el-table-column>
        <el-table-column label="区域编码" prop="area_code" width="100"></el-table-column>
        <el-table-column label="区域名称" prop="area_name" width="150"></el-table-column>
        <el-table-column label="创建时间" prop="create_date" width="150"></el-table-column>
        <el-table-column label="创建人" prop="create_by" width="100"></el-table-column>
        <el-table-column label="更新时间" prop="update_date" width="150"></el-table-column>
        <el-table-column label="更新人" prop="update_by" width="100"></el-table-column>
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

    <!-- 新增农场dialog -->
    <el-dialog
      title="新建农场表单"
      width="46%"
      :visible.sync="dialogCreateFormVisible"
      :append-to-body="true"
      :close-on-click-modal="false"
      top="20px"
    >
      <el-form :model="form">
        <el-form-item label="负责人:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <!-- <el-input v-model="form.sex" autocomplete="off"></el-input> -->
          <template>
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="年龄:" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号:" :label-width="formLabelWidth">
          <el-input v-model="form.card_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码:" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址:" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经度:" :label-width="formLabelWidth">
          <el-input v-model="form.lng" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="纬度:" :label-width="formLabelWidth">
          <el-input v-model="form.lat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域编码:" :label-width="formLabelWidth">
          <el-input v-model="form.area_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域名称:" :label-width="formLabelWidth">
          <el-input v-model="form.area_name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogCreateFormVisible = false">更新</el-button>
      </div>
    </el-dialog>

    <!-- 修改农场dialog -->
    <el-dialog
      title="修改农场表单"
      width="46%"
      :visible.sync="dialogEditFormVisible"
      :append-to-body="true"
      :close-on-click-modal="false"
      top="20px"
    >
      <el-form :model="form">
        <el-form-item label="负责人:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="年龄:" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号:" :label-width="formLabelWidth">
          <el-input v-model="form.card_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码:" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址:" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经度:" :label-width="formLabelWidth">
          <el-input v-model="form.lng" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="纬度:" :label-width="formLabelWidth">
          <el-input v-model="form.lat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域编码:" :label-width="formLabelWidth">
          <el-input v-model="form.area_code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域名称:" :label-width="formLabelWidth">
          <el-input v-model="form.area_name" autocomplete="off"></el-input>
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
      tableDate: [
        {
          id: 1,
          name: "李易峰",
          sex: "男",
          age: 18,
          card_no: "21548752255555666",
          phone: "1234567896",
          area_code: "A12546",
          area_name: "云岩区",
          address: "贵州省贵阳市乌当区高新路1154号",
          lng: "39°52′48″N",
          lat: "116°24′20″E",
          create_date: "2018-11-12 14:15",
          create_by: "系统管理员",
          update_date: "2018-11-12 14:15",
          update_by: "用户"
        }
      ],
      form: {
        id: "",
        name: "",
        sex: "",
        age: "",
        card_no: "",
        phone: "",
        area_code: "",
        area_name: "",
        address: "",
        lng: "",
        lat: "",
        create_date: "",
        create_by: "",
        update_date: "",
        update_by: ""
      },
      select: "",
      search: "",
      currentPage4: 1,
      pages: 400,
      pageSize: 100,
      pageSizeArr: [50, 100, 200, 400],
      dialogCreateFormVisible: false,
      dialogEditFormVisible: false,
      formLabelWidth: "80px"
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    /*获取点击事件类型，并执行对应方法*/
    handleCommand(event, row) {
      console.log("event :" + event);
      //新增农场
      if (event == "editFarm") {
        this.editFarm(row.id);
      }
      if (event == "deleteFarm") {
        this.deleteFarm(row.id);
      }
    },
    /**新增农场 */
    createFarm() {
      this.dialogCreateFormVisible = true;
    },
    /**修改农场 */
    editFarm(id) {
      this.dialogEditFormVisible = true;
      console.log("修改的农场id是:" + id);
    },
    /**删除农场 */
    deleteFarm(id) {
      console.log("删除的id是：" + id);
      this.$confirm(
        "此操作将永久删除id为 " + id + "的文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
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
