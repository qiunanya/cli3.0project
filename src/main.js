import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import "./service-worker/registerServiceWorker";

import "./assets/css/normalize.css";
import "./assets/css/font.css";
import "./assets/css/common.css";
import "./plugins/element.js";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.config.productionTip = false;

// 当进入没有的页面时，导航到 404 页面,
// 将路由守卫放到这儿来为了获取 store.state 的值来，
// 方便做权限判断

// 权限匹配深度为三层，三层内没有匹配上就跳转到401页面
const PERMISSSIONDEEP = 3;

router.beforeEach((to, from, next) => {
  NProgress.start();
  const permissions = store.state.user.permission;
  const matchedRouter = to.matched.map(el => el.name);
  // 当路由设置必须要验证且验证不通过，则跳转到401页面
  if (
    to.meta.requirePermission &&
    !matchPermission(permissions, matchedRouter, PERMISSSIONDEEP)
  ) {
    next("/401");
  }
  if (to.matched.length == 0) {
    next("/404");
  }
  next();
  function matchPermission(permissions, matchedRouter, PERMISSSIONDEEP) {
    // console.log("permissions", permissions);
    // console.log("matchedRouter", matchedRouter);
    matchedRouter.shift();
    let temp = [];
    let permissionObj = permissions;
    let length = matchedRouter.length;
    length = length <= PERMISSSIONDEEP ? length : PERMISSSIONDEEP;
    for (let i = 0; i < length; i++) {
      temp = permissionObj.find(el => el.name == matchedRouter[i]);
      if (temp) {
        permissionObj = temp.children;
      } else {
        return false;
      }
    }
    return true;
  }
});
router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
