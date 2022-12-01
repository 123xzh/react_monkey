import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import moment from "moment";
import dayjs from 'dayjs'
import { getveterinarian, deleteveterinarian, editveterinarian, addveterinarian } from "@/api/veterinarian";
export default function Productionrecords() {
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
            title: '笼数',
            dataIndex: 'age4',
            key: 'age4',
        },
        {
            title: '已巡',
            dataIndex: 'age1',
            key: 'confirm',
        },
        {
            title: '待巡',
            dataIndex: 'age2',
            key: 'confirm',
        },
        {
            title: '已确认',
            dataIndex: 'age3',
            key: 'confirm',
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

