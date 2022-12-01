import React, { useEffect, useState } from 'react'
import {
  HomeOutlined,
	TableOutlined,
	PieChartOutlined,
	// FileTextOutlined,
	AreaChartOutlined,
	FundOutlined,
	// ShoppingOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;
// 模拟数组结构
const menuList = [
  {
    label: "首页",
    key: "/home",
    icon: <HomeOutlined />
  },
  {
    label: "用户管理",
    key: "/usermannge",
    icon: <AreaChartOutlined />
  },
  {
    label: "栏位管理",
    key: "/Fieldmanagement",
    icon: <TableOutlined />,
  },
  {
    label: "动物管理",
    key: "/Animalmanagement",
    icon: <FundOutlined />,
  },
  {
    label: "兽医",
    icon: <PieChartOutlined />,
    children: [
      {
        key: "/Veterinary/Disinfectionmanagement",
        label: "消毒管理",
        icon: <AppstoreOutlined />
      },
      {
        key: "/Veterinary/Productionrecords",
        label: "巡检记录",
        icon: <AppstoreOutlined />
      },
      {
        key: "/Veterinary/medicalrecord",
        label: "病历卡",
        icon: <AppstoreOutlined />
      },
      {
        key: "/Veterinary/measurementmanagement",
        label: "检测管理",
        icon: <AppstoreOutlined />
      },
      {
        key: "/Veterinary/euthanasia",
        label: "安乐死",
        icon: <AppstoreOutlined />
      },
  
    ]
  },
]
const rootSubmenuKeys = menuList.map(item => item.key)

export default function LeftNav(props) {
  const Location = useLocation()
  const navigate = useNavigate()
  const whd = (e) => {
    // console.log(e);
    // console.log(Location);
    navigate(e.key)
  }
  const [openKeys, setOpenKeys] = useState(['/home']);
  const [selectedKeys, setselectedKeys] = useState([Location.pathname])
  const onOpenChange = (Keys) => {
    // console.log(Keys);
    const latestOpenKey = Keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(Keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  useEffect(() => {
    setselectedKeys([Location.pathname])
    // console.log(Location);

  }, [Location.pathname])
  return (
    <Sider trigger={null} collapsible collapsed={props.zdstate}>
      <div className="logo"><i></i><span style={{ 'display': props.zdstate ? 'none' : '' }}>非人灵长类实验动物监测管理系统</span></div>
      <Menu
        theme="dark" 
        mode="inline"
        defaultSelectedKeys={[Location.pathname]}
        items={menuList}
        onClick={whd}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
      />
    </Sider>
  )
}
