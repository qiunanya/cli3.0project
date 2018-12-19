export default {
  path: "system",
  name: "system",
  component: () => import("Views/index.vue"),
  meta: {
    requirePermission: true,
    title: "系统设置"
  },
  children: [
    {
      /*用户设置开始 */
      path: "/system/usermanage",
      name: "users",
      component: () => import("Views/system/usermanage/index.vue"),
      meta: {
        requirePermission: true,
        title: "用户管理"
      },
      children: [
        {
          path: "/system/usermanage/user",
          name: "user",
          component: () => import("Views/system/usermanage/users.vue"),
          meta: {
            requirePermission: true,
            title: "人员设置"
          }
        },
        {
          path: "/system/usermanage/userrole",
          name: "userrole",
          component: () => import("Views/system/usermanage/role.vue"),
          meta: {
            requirePermission: true,
            title: "角色设置"
          }
        }
      ]
    },
    /**
     * 机构设置
     */
    {
      path: "/system/organization/organ",
      name: "organ",
      component: () => import("Views/system/organization/index.vue"),
      meta: {
        requirePermission: true,
        title: "机构管理"
      },
      children: [
        {
          path: "/system/organization/organic",
          name: "baseOrgan",
          component: () => import("Views/system/organization/organic.vue"),
          meta: {
            requirePermission: true,
            title: "机构设置"
          }
        },
        {
          path: "/system/organization/farm",
          name: "farm",
          component: () => import("Views/system/organization/farm.vue"),
          meta: {
            requirePermission: true,
            title: "农场设置"
          }
        }
      ]
    },
    {
      path: "/system/base",
      name: "base",
      component: () => import("Views/system/base/index.vue"),
      meta: {
        requirePermission: true,
        title: "基础设置"
      },
      children: [
        {
          path: "/system/base/menu",
          name: "menu",
          component: () => import("Views/system/base/menu.vue"),
          meta: {
            requirePermission: true,
            title: "菜单设置"
          }
        },
        {
          path: "/system/base/codes",
          name: "codes",
          component: () => import("Views/system/base/codes.vue"),
          meta: {
            requirePermission: true,
            title: "编码设置"
          }
        },
        {
          path: "/system/base/insure",
          name: "insure",
          // redirect: "/system/base/insure/list",
          component: () => import("Views/system/base/insure.vue"),
          meta: {
            requirePermission: true,
            title: "险种设置"
          }
        },
        {
          path: "/system/base/swiper",
          name: "swiper",
          //redirect: "/system/base/swiper/list",
          component: () => import("Views/system/base/swiper.vue"),
          meta: {
            requirePermission: true,
            title: "轮播图设置"
          }
        }
      ]
    }
  ]
};
