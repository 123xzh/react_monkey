import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import moment from "moment";
import dayjs from 'dayjs'
import { getveterinarian, deleteveterinarian, editveterinarian, addveterinarian } from "@/api/veterinarian";
export default function Measurementmanagement() {
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
      title: '消毒人员',
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
      title: '消毒日期',
      dataIndex: 'birth',
      key: 'birth',
      sorter: (a, b) => a.birth < b.birth ? 1 : -1
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



  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'delect',
        text: '删除记录',
        onSelect: (changableRowKeys) => {
          // console.log("sssssssssss",selectedRowKeys);
          // let newSelectedRowKeys = [];
          if (selectedRowKeys.length==0) {
            message.error('不能为空！')
          }else{
            deleteveterinarian({selectedRowKeys}).then(res=>{
              getuserdatas()
            })
          }
          // setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'odd',
        text: '选择单数',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: '选择双数',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
  
    ],
  };


  return (

    <div>
      <Table columns={columns} rowSelection={rowSelection} dataSource={userdata}
        pagination={{
          pageSize: 5
        }}
        rowKey={item => item.id} />
    </div>

  )
}

