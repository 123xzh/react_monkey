import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import moment from "moment";
import dayjs from 'dayjs'
import { getveterinarian, deleteveterinarian, editveterinarian, addveterinarian } from "@/api/veterinarian";
export default function Medicalrecord() {
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal
    const [userdata, setUser] = useState([])
    const AddForm = useRef(null)
    const UpdateForm = useRef(null)
    const columns = [
        {
            title: '工号',
            dataIndex: 'ageid',
            key: 'id',
        },
        {
            title: '兽医',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <h3>{text}</h3>,
        },
        {
            title: '栋号',
            dataIndex: 'dongdata',
            key: 'dongdata',
        },
        {
            title: '当然完成/治疗中',
            dataIndex: 'mathdata1',
            key: 'mathdata1',
            render: (mathdata1) => {
              let a = parseInt(mathdata1.split('/')[0])
              let b = parseInt(mathdata1.split('/')[1])
          
            let colors = 'red' 
              if (a<b) {
                colors = 'red' 
              }else{
                 colors = 'green' 
               
              }
              return (
                  <span style={{color:colors}}>
                      {mathdata1}
                  </span>
              );
          },
        },
        {
            title: '已确认/需确认',
            dataIndex: 'mathdata2',
            key: 'mathdata2',
            render: (mathdata2) => {
              let a = parseInt(mathdata2.split('/')[0])
              let b = parseInt(mathdata2.split('/')[1])
            
            let colors = 'red' 
              if (a<b) {
                colors = 'red' 
              }else{
                 colors = 'green' 
                // : 'green';
              }
              return (
                  <span style={{color:colors}}>
                      {mathdata2}
                  </span>
              );
          },
        },
        {
            title: '完成需求确认',
            dataIndex: 'sex4',
            key: 'sex4',
        },
   

    ];




    // const handleChange = (item) => {
    //     item.roleState = !item.roleState
    //     setdataSource([...dataSource])
    // }
    const getuserdatas = async () => {
        const result = await getveterinarian()
        const { users } = result.data;
        setUser(users)
        // console.log(users);
    }
    useEffect(() => {
        getuserdatas()
    }, [])


    return (

        <div>
            <Table columns={columns} dataSource={userdata}
                pagination={{
                    pageSize: 5
                }}
                rowKey={item => item.id} />
        </div>

    )
}

