export default {
  login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          resolve({
            name: "测试",
            staffid: "0001"
          });
        } else {
          reject();
        }
      }, 1000);
    });
  },
  reqPermission(staffid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (staffid) {
          resolve([
            {
              name: "system",
              cname: "系统设置",
              children: [
                {
                  name: "users",
                  cname: "用户管理",
                  icon: "icon-jieban",
                  children: [
                    {
                      name: "user",
                      cname: "人员设置",
                      icon: "icon-biaodankongjianlianxiren"
                    },
                    {
                      name: "userrole",
                      cname: "角色设置",
                      icon: "icon-biaodankongjianlianxiren"
                    }
                  ]
                },
                {
                  name: "organ",
                  cname: "机构管理",
                  icon: "icon-dingwei",
                  children: [
                    {
                      name: "baseOrgan",
                      cname: "机构设置",
                      icon: "icon-daohang"
                    },
                    {
                      name: "farm",
                      cname: "农场设置",
                      icon: "icon-neirong"
                    }
                  ]
                },
                {
                  name: "base",
                  cname: "基础设置",
                  icon: "icon-shezhi",
                  children: [
                    {
                      name: "menu",
                      cname: "菜单设置",
                      icon: "icon-caidan"
                    },
                    {
                      name: "swiper",
                      cname: "轮播图设置",
                      icon: "icon-weizhidifang"
                    },
                    {
                      name: "insure",
                      cname: "险种设置",
                      icon: "icon-licheng"
                    },
                    {
                      name: "codes",
                      cname: "编码设置",
                      icon: "icon-bianma"
                    }
                  ]
                }
              ]
            },
            {
              name: "business",
              cname: "业务管理",
              children: [
                {
                  name: "agro",
                  cname: "农险管理",
                  icon: "icon-fuzhi",
                  children: [
                    {
                      name: "agro-seek",
                      cname: "任务查看",
                      icon: "icon-yijianfankui"
                    },
                    {
                      name: "agro-create",
                      cname: "任务创建和派发",
                      icon: "icon-dingdan"
                      // children: [
                      //   {
                      //     name: "agro-edit",
                      //     cname: "任务编辑"
                      //   }
                      // ]
                    },
                    {
                      name: "agro-handle",
                      cname: "任务处理",
                      icon: "icon-dingdanchulizhong"
                    }
                  ]
                }
              ]
            }
          ]);
        } else {
          reject();
        }
      }, 1000);
    });
  }
};
