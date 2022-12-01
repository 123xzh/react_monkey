// import moment from 'moment';
import React, { forwardRef, useEffect, useState } from 'react'
import { Form, Input, Select, InputNumber, DatePicker, TreeSelect } from 'antd'
// import './userfrom.scss'
import moment from "moment";
import "moment/locale/zh-cn"
const { Option } = Select
const UserForm = forwardRef((props, ref) => {

  const signFrom = async () => {
    setTimeout(() => {
      console.log(props);

      ref.current.validateFields().then(value => {
        console.log(value);
      }).catch(err => {
        console.error(err)
      })
    }, 2000);
  }
  useEffect(() => {
    signFrom()
  }, [])

  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = props.roleList.filter((o) => !selectedItems.includes(o));

  // useEffect(() => {
  //   console.log(isDisabled);
  //   setisDisabled(props.isUpdateDisabled)
  // }, [props.isUpdateDisabled])
  const format = (value) => {
    return moment(value).format('yyyy-MM-DD')//将时间格式转成yyyy-MM-DD
  }


  // const { roleId, region } = JSON.parse(localStorage.getItem("token"))
  const roleObj = {
    "1": "超级管理员",
    "2": "用户",
    "3": "管理员"
  }
  var columnslist = ['第一栏', '第二栏', '第三栏', '第四栏'];
  var Treecolumnslist = [
    {
      // value: '未分区',
      // title: '未分区',
      // children: [
      //   {
      value: '第一栋',
      title: "第一栋",
      children: [
        {
          value: '第一栏',
          title: "第一栏",
        },
        {
          value: '第二栏',
          title: "第二栏",
        },
        {
          value: '第三栏',
          title: "第三栏",
        },
        {
          value: '第四栏',
          title: "第四栏",
        },
      ],
    },
    {
      value: '第二栋',
      title: "第二栋",
      children: [
        {
          value: '第一栏',
          title: "第一栏",
        },
        {
          value: '第二栏',
          title: "第二栏",
        },
        {
          value: '第三栏',
          title: "第三栏",
        },
        {
          value: '第四栏',
          title: "第四栏",
        },
      ],
    },
    {
      value: '第三栋',
      title: "第三栋",
      children: [
        {
          value: '第一栏',
          title: "第一栏",
        },
        {
          value: '第二栏',
          title: "第二栏",
        },
        {
          value: '第三栏',
          title: "第三栏",
        },
        {
          value: '第四栏',
          title: "第四栏",
        },
      ],
    },
    {
      value: '第四栋',
      title: "第四栋",
      children: [
        {
          value: '第一栏',
          title: "第一栏",
        },
        {
          value: '第二栏',
          title: "第二栏",
        },
        {
          value: '第三栏',
          title: "第三栏",
        },
        {
          value: '第四栏',
          title: "第四栏",
        },
      ],
    },
    //   ],
    // }
  ];
  var roleselect = ['超级管理员', '管理员', '用户']
  var sexselect = [
    { id: 0, roleName: '雌性' },
    { id: 1, roleName: '雄性' },
  ]
  // 设置默认的起始日期
  const disabledDate = (current) => {
    console.log(current.format('YYYY-MM-DD'))
    return current.format('YYYY-MM-DD')
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  function onOk(value) {
    console.log('onOk: ', value);
    value = moment(value).format('YYYY-MM-DD HH:mm:ss') //这么解决的
  }
  const dateFormat = 'YYYY-MM-DD';



  return (
    <Form
      ref={ref}
      title="horizontal"
      key={ref.id}
    >
      {/* <div className='frombox'> */}
      {/* <div className='leftbox'> */}

      <Form.Item
        name="title"
        label="名字"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="addr"
        label="地址"
        rules={[{ required: true, message: '请输入地址' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sex"
        label="性别"
        rules={[{ required: true, message: '请选择性别' }]}
      >
        <Select>
          {
            sexselect.map(item =>
              <Option value={item.id} key={item.id} >{item.roleName}</Option>
            )
          }
        </Select>
      </Form.Item>
      {/* </div> */}

      {/* <div className='rightbox'> */}

      <Form.Item
        name="birth"
        label="出生日期"
        // initialValue={detail.startDate && moment(data.startDate)}
        rules={[{ required: true, message: '请选择出生日期' }]}
      >
        <DatePicker

          format="YYYY-MM-DD"
          onOk={onOk}
          onChange={onChange}
        //  initialValues={moment().format('YYYY-MM-DD')} 
        //   format={(value) =>{
        //     return disabledDate(value);
        // }}
        // onChange={(value) =>{
        //     return disabledDate(value);
        // }}
        />
      </Form.Item>
      <Form.Item
        name="age"
        label="年龄"
        rules={[{ required: true, message: '请选择年龄' },
          // { min:20, message: '名称不超过20个字符' }, /* 长度不超过20*/ 
        ]}

      >
        <InputNumber min={1} onChange={(value) => {
          // console.log(typeof value)
        }} />
      </Form.Item>
      <Form.Item
        name="dongdata1"
        label="分支"
        rules={[{ required: true, message: '请选择所处分支' },
          // { min:20, message: '名称不超过20个字符' }, /* 长度不超过20*/ 
        ]}

      >
        <TreeSelect
          // showSearch
          style={{
            width: '100%',
          }}
          value={ref.dongdata1}
          dropdownStyle={{
            maxHeight: 300,
            overflow: 'auto',
          }}
          placeholder="请选择"
          // allowClear
          // treeDefaultExpandAll
          // onChange={onChange}
          treeData={Treecolumnslist}
        />

      </Form.Item>
      {/* </div> */}
      {/* </div> */}



      {/* <Form.Item
        name="avatar"
        label="图片"
        rules={[{ required: true, message: 'Please input the title of collection!' }]}
      >
        <Upload
        action="avatar"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview} */}
      {/* > */}
      {/* {fileList.length < 5 && '+ Upload'} */}
      {/* </Upload>
      </Form.Item> */}



    </Form>
  )
})
export default UserForm