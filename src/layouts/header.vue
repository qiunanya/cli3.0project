<template>
  <div class="lay-header">
    <div class="lay-nav">
      <h3>农险远程理赔系统</h3>
      <el-menu mode="horizontal" :default-active="topNav" @select="selectMenu">
        <el-menu-item v-for="(nav,index) in topNavs" :key="index" :index="nav.name">{{nav.cname}}</el-menu-item>
      </el-menu>
    </div>
    <div class="user-setting">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-service"></i>
          用户
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="editPassword">
            <i class="iconfont icon-shezhi marginright10"></i>修改密码
          </el-dropdown-item>
          <el-dropdown-item command="exit">
            <i class="iconfont icon-tuichu marginright10"></i>退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("nav", ["topNav"]),
    ...mapGetters("nav", ["topNavs"])
  },
  methods: {
    ...mapActions("nav", ["toggleTopNav"]),
    selectMenu(index) {
      this.toggleTopNav(index);
    },
    handleCommand(command) {
      command == "exit" ? this.exit() : this.goto(command);
    },
    exit() {
      this.goto("login");
    },
    goto(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style scoped>
.lay-header {
  height: 58px;
  box-shadow: 1px 0 5px #999;
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  overflow: hidden;
}
.lay-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.lay-header h3 {
  color: #555;
  margin-right: 20px;
}
/* .el-menu {
  background-color: tomato;
}
.el-menu--horizontal > .el-menu-item {
  color: #fff;
} */
.user-setting {
  justify-self: flex-end;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>
