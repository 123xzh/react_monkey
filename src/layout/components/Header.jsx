import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  DownOutlined, SmileOutlined 
} from '@ant-design/icons';
import { Layout, Breadcrumb, Menu, Dropdown, Avatar, Icon } from 'antd';
import Main from '../components/Main';
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import './style/header.scss'
const { Header } = Layout;
export default function Heade(props) {
  const { Collapsed } = useSelector((state) => ({
    Collapsed: state.handleColl.Collstatus,
  }))
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const clickColl = () => {
    setCollapsed(!collapsed)
    props.folding(collapsed)
    dispatch({ type: "clickCollstatus" })
    // dispatch({ type: "clickchangload"})
    console.log(Collapsed);
  }
  // const menu = (

  //   <Menu>
  //     <Menu.Item key="dashboard">
  //       <Link to="/home">首页</Link>
  //     </Menu.Item>
  //     <Menu.Item key="project">
  //       <a
  //         target="_blank"
  //         href="https://github.com/NLRX-WJC/react-antd-admin-template"
  //         rel="noopener noreferrer"
  //       >
  //         项目地址
  //       </a>
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item key="logout">注销</Menu.Item>
  //   </Menu>
  // );
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Link to="/home">首页</Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link to="/login">退出</Link>
          ),
        },
      ]}
    />
  );
  return (
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      >
        <div className="trigger">
          <div   className='main-left'>
            <span onClick={clickColl}>
            {Collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
            <BreadCrumb />
          </div>
          <div className='main-right'>
            <Dropdown overlay={menu}>
              {/* <div> */}
              <Avatar shape="square" size="medium" src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
              {/* <Icon style={{ color: "rgba(0,0,0,.3)" }} type="caret-down" /> */}
              {/* </div> */}
            </Dropdown>
          </div>
        </div>
        {/* <div className="Breadcrumb">
        </div> */}
        <div className="tagview">

        </div>
      </Header>
      <Main />
    </Layout>
  )
}
