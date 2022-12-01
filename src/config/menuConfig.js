/**
 * icon:菜单项图标
//  * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/home",
    icon: "home",
    // roles:["admin","editor","guest"]
  },
  {
    title: "用户管理",
    path: "/usermannge",
    icon: "usermannge",
    // roles:["admin","editor","guest"]
  },
  {
    title: "栏位管理",
    path: "/Fieldmanagement",
    icon: "Fieldmanagement",
    // roles:["admin","editor"]
  },
  {
    title: "动物管理",
    path: "/Animalmanagement",
    icon: "Animalmanagement",
  },
  {
    title: "兽医",
    path: "/Veterinary",
    icon: "appstore",
    // roles:["admin","editor"],
    children: [
      {
        title: "消毒管理",
        path: "/Veterinary/Disinfectionmanagement",
        // roles:["admin","editor"],
      },
      {
        title: "巡检记录",
        path: "/Veterinary/Productionrecords",
        // roles:["admin","editor"],
      },
      {
        title: "病历卡",
        path: "/Veterinary/medicalrecord",
        // roles:["admin","editor"],
      },
      {
        title: "检测管理",
        path: "/Veterinary/measurementmanagement",
        // roles:["admin","editor"],
      },
      {
        title: "安乐死",
        path: "/Veterinary/euthanasia",
        // roles:["admin","editor"],
      }
    ]
  }
]
export default menuList;
