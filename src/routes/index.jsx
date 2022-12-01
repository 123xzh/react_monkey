/* eslint-disable import/no-anonymous-default-export */
import { Navigate, useRoutes } from 'react-router-dom'
// import React, { lazy, Suspense } from 'react'
import PublicLayout from '../layout/index'
import Home from '../view/home'
import Login from '../view/login/login'
import Usermannge from '../view/usermannge/usermannge'
import Fieldmanagement from '../view/Fieldmanagement/Fieldmanagement'
import Animalmanagement from '../view/Animalmanagement/Animalmanagement'
// import Veterinary from '../view/Veterinary/Veterinary'
import Disinfectionmanagement from '../view/Veterinary/page/Disinfectionmanagement/Disinfectionmanagement'
import Productionrecords from '../view/Veterinary/page/Productionrecords/Productionrecords'
import Medicalrecord from '../view/Veterinary/page/medicalrecord/medicalrecord'
import Measurementmanagement from '../view/Veterinary/page/measurementmanagement/measurementmanagement'
import Euthanasia from '../view/Veterinary/page/euthanasia/euthanasia'
import Error from '../view/Error/error'


const routes = [
  // 重定向
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  // 登录
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Error',
    element: <Error />
  },
  {
    element: <PublicLayout />,
    children: [
      // 主页
      {
        path: '/home',
        element: <Home />
      },
      // 用户管理
      {
        path: '/usermannge',
        element: <Usermannge />
      },
      // 栏位管理
      {
        path: '/Fieldmanagement',
        element: <Fieldmanagement />
      },
      // 动物管理
      {
        path: '/Animalmanagement',
        element: <Animalmanagement />
      },
      // 兽医
      // 消毒管理
      {
        path: '/Veterinary/Disinfectionmanagement',
        element: <Disinfectionmanagement />
      },
      // 巡检记录
      {
        path: '/Veterinary/Productionrecords',
        element: <Productionrecords />
      },
      // 病历卡
      {
        path: '/Veterinary/medicalrecord',
        element: <Medicalrecord />
      },
      // 检测管理
      {
        path: '/Veterinary/measurementmanagement',
        element: <Measurementmanagement />
      },
      // 安乐死
      {
        path: '/Veterinary/euthanasia',
        element: <Euthanasia />
      },
    ]
  },
  {
    path: "*",
    element: <Navigate to="/Error" />
  }
]

const Router = () => {
  const router = useRoutes(routes);
  return router
}

export default Router