import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layouts/index.vue";
import Home from "Views/Home.vue";
import NoFind from "Views/404.vue";
import NoPermission from "Views/401.vue";
import Login from "Views/login.vue";

import system from "./system";
import business from "./business";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Layout,
      meta: {
        title: "首页"
      },
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        system,
        business
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/404",
      name: "404",
      component: NoFind
    },
    {
      path: "/401",
      name: "401",
      component: NoPermission
    }
  ]
});

export default router;
