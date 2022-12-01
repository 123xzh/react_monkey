import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import moment from "moment";
import dayjs from 'dayjs'
import { getveterinarian, deleteveterinarian, editveterinarian, addveterinarian } from "@/api/veterinarian";
export default function Euthanasia() {
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal
    const [userdata, setUser] = useState([])
    const AddForm = useRef(null)
    const UpdateForm = useRef(null)
    const columns = [
        {
            title: '工号',
            dataIndex: 'ageid',
            key: 'ageid',
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
            title: '兽医填写',
            dataIndex: 'sex1',
            key: 'sex1',
            render: (sex1) => {
              let colors = sex1 === 1 ? 'red' : 'green';
              return (
                  <Tag color={colors}>
                      {sex1}
                  </Tag>
              );
          },
        },
        {
            title: '组长确认',
            dataIndex: 'sex2',
            key: 'sex2',
            render: (sex2) => {
              let colors = sex2 === 1 ? 'red' : 'green';
              return (
                  <Tag color={colors}>
                      {sex2}
                  </Tag>
              );
          },
        },
        {
            title: '主管确认',
            dataIndex: 'sex3',
            key: 'sex3',
            render: (sex3) => {
              let colors = sex3 === 1 ? 'red' : 'green';
              return (
                  <Tag color={colors}>
                      {sex3}
                  </Tag>
              );
          },
        },
        {
            title: '委员确认',
            dataIndex: 'sex4',
            key: 'sex4',
            render: (sex4) => {
              let colors = sex4 === 1 ? 'red' : 'green';
              return (
                  <Tag color={colors}>
                      {sex4}
                  </Tag>
              );
          },
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

