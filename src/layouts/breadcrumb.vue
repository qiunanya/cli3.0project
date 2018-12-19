<template>
  <div class="lay-breadcrumb">
    <div class="lay-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{name:'home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="item of breadcrumbs"
          :key="item.name"
        >{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- <div class="lay-alive">
      <span
        :key="index"
        v-for="(tag,index) in routerTag"
        :class="['tag',tag.name == routeName?'tag-active':'']"
        @click="close(index)"
      >
        <span>{{tag.cname}}</span>
        <i class="el-icon-close"></i>
      </span>
      <span class="tag tag-all" @click="close('all')">
        <span>全部关闭</span>
      </span>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerTag: [
        { cname: "首页", name: "home" },
        { cname: "文章页", name: "article" }
      ]
    };
  },
  computed: {
    routeName() {
      return this.$route.matched.slice(-1)[0].name;
    },
    breadcrumbs() {
      var paths = [...this.$route.matched];
      paths.shift();
      if (paths.length === 1 && paths[0].path === "") {
        paths = [];
      }
      return paths;
    }
  },
  methods: {
    close(index) {
      if (index === "all") {
        return;
      }
    },
    clear() {}
  }
};
</script>
<style scoped>
.lay-breadcrumb {
  height: 40px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
}
.lay-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.lay-menu-control {
  width: 26px;
  height: 26px;
  font-size: 24px;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.lay-menu-control-active {
  background-color: #333;
  color: #fff;
}
.lay-alive {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.tag {
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 0px;
  cursor: pointer;
  padding: 2px 5px;
  border: 1px solid #aaa;
}
.tag-active {
  color: #fff;
  border-color: #42b983;
  background-color: #42b983;
}
.tag:hover {
  color: #fff;
  border-color: #42b983;
  background-color: #42b983;
}
.tag-all:hover {
  background-color: #ff3535cc;
  border-color: #ff3535cc;
  color: #fff;
}
.tag i.el-icon-close {
  margin-left: 2px;
}
.tag i.el-icon-close:hover {
  background-color: #bbb;
  border-radius: 50%;
}
</style>