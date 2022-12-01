import React from 'react'
import { Layout,Spin } from 'antd';
import './style/Main.scss'
// import './style/Main.scss'
import { SwitchTransition , CSSTransition } from 'react-transition-group'
// import { RouteComponentProps } from 'react-router-dom';
import { Outlet,useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TagView from './TagsView/index'

const { Content } = Layout;
export default function Main() {
  const { changload } = useSelector((state) => ({
    changload: state.handleload.changload,
}))
  const location = useLocation()
  return (
    // <Spin size="large" spinning={changload}>
    // <TagsView />
    <Content
      className="site-layout-background"
      style={{
        margin: '15px',
        padding: 15,
        minHeight: 280,
      }}
    >
      {/* <SwitchTransition mode="out-in">
         <CSSTransition key={location.key} timeout={300} classNames="my-node" nodeRef={null}> */}
             <Outlet />
         {/* </CSSTransition>
     </SwitchTransition> */}

    </Content>
      //  </Spin>
  )
}
