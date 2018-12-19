<template>
  <div class="menu-wrapper">
    <el-menu class="menu-content" :collapse="isCollapse" unique-opened @select="goto">
      <el-submenu v-for="nav in leftNavs" :index="nav.name" :key="nav.name">
        <template slot="title">
          <i :class="['iconfont','marginright10',nav.icon?nav.icon:'icon-wenjianjia']"></i>
          <span slot="title">{{nav.cname}}</span>
        </template>
        <el-menu-item :index="subNav.name" v-for="subNav in nav.children" :key="subNav.name">
          <i :class="['iconfont','marginright10',subNav.icon?subNav.icon:'icon-wenjianjia']"></i>
          <span slot="title">{{subNav.cname}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <i
      :class="['menu-controller', 'iconfont',isCollapse?'icon-shideright39':'icon-jiantouarrowheads3']"
      @click="toggleIsCollapse"
    ></i>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("nav", {
      isCollapse: state => state.isCollapse
    }),
    ...mapGetters("nav", ["leftNavs"])
  },
  methods: {
    ...mapActions("nav", ["toggleIsCollapse"]),
    goto(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style scoped>
.menu-wrapper {
  /* box-shadow: 0 1px 1px #999; */
  z-index: 2;
  position: relative;
}
.menu-content:not(.el-menu--collapse) {
  width: 200px;
  flex-shrink: 0;
}
.menu-controller {
  position: absolute;
  bottom: 30px;
  right: 10px;
  cursor: pointer;
  font-size: 30px;
  color: #bbb;
}
.menu-controller:hover {
  color: #999;
}
</style>
