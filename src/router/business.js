export default {
  path: "business",
  name: "business",
  component: () => import("Views/index.vue"),
  meta: {
    requirePermission: true,
    title: "业务管理"
  },
  children: [
    {
      path: "/business/agro",
      name: "agro",
      component: () => import("Views/business/agro/index.vue"),
      meta: {
        requirePermission: true,
        title: "农险管理"
      },
      children: [
        {
          name: "agro-seek",
          path: "/business/agro/seek",
          component: () => import("Views/business/agro/seek.vue"),
          meta: {
            requirePermission: true,
            title: "任务查看"
          }
        },
        {
          name: "agro-create",
          path: "/business/agro/create",
          component: () => import("Views/business/agro/create.vue"),
          meta: {
            requirePermission: true,
            title: "任务创建和派发"
          }
          // children: [
          //   {
          //     name: "agro-edit",
          //     path: "/business/agro/edit",
          //     component: () => import("Views/business/agro/edit.vue"),
          //     meta: {
          //       requirePermission: true,
          //       title: "任务编辑"
          //     }
          //   }
          // ]
        },
        {
          name: "agro-handle",
          path: "/business/agro/handle",
          component: () => import("Views/business/agro/handle.vue"),
          meta: {
            requirePermission: true,
            title: "任务处理"
          }
        }
      ]
    }
  ]
};
