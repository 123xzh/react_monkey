// import moment from 'moment';
import React, { forwardRef, useState } from 'react'
import { Form, Input, Select, InputNumber, DatePicker } from 'antd'
// import './userfrom.scss'
import moment from "moment";
// import "moment/locale/zh-cn"
import 'moment/locale/zh-cn'
const { Option } = Select
const UserForm = forwardRef((props, ref) => {
  console.log(props);
  console.log(props.regionList._i);
  // ref
  console.log(ref);


  // const signFrom = async () => {
  //   setTimeout(() => {

  //     ref.current.validateFields().then(value => {
  //       console.log(value);

  //     }).catch(err => {
  //       console.error(err)
  //     })
  //   }, 2000);
  // }
  // useEffect(() => {
  //   signFrom()
  // //   // if (ref) {
  // //   //   ref.setFieldsValue({
  // //   //     birth: ref.birth.moment().format()
  // //   //   });
  // //   // }
  // }, [])
  // useEffect(() => {
  //   if (ref) {
  //     ref.setFieldsValue({
  //       birth: moment(ref.birth)
  //     });
  //   }
  // }, [ref]);

  // const [isDisabled, setisDisabled] = useState(false)
  const [selectedItems, setSelectedItems] = useState([]);
  // const filteredOptions = props.roleList.filter((o) => !selectedItems.includes(o));

  // useEffect(() => {
  //   console.log(isDisabled);
  //   setisDisabled(props.isUpdateDisabled)
  // }, [props.isUpdateDisabled])
  // const format = (value) => {
  //   return moment(value).format('yyyy-MM-DD')//将时间格式转成yyyy-MM-DD
  // }


  // const { roleId, region } = JSON.parse(localStorage.getItem("token"))
  // const roleObj = {
  //   "1": "超级管理员",
  //   "2": "用户",
  //   "3": "管理员"
  // }
  var roleselect = ['超级管理员', '管理员', '用户']
  var sexselect = [
    { id: 0, roleName: '女' },
    { id: 1, roleName: '男' },
  ]
  // 设置默认的起始日期
  // const disabledDate = (current) => {
  //   console.log(current.format('YYYY-MM-DD'))
  //   return current.format('YYYY-MM-DD')
  // }
  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };
  // function onOk(value) {
  //   console.log('onOk: ', value);
  //   // value = moment(value).format('YYYY-MM-DD') //这么解决的
  // }
  // const dateFormat = 'YYYY-MM-DD';



  return (
    <Form
      ref={ref}
      title="horizontal"
      key={ref.id}
      labelAlign="left"
    >
      <div className='frombox'>
        {/* <div className='leftbox'> */}

        <Form.Item
          name="title"
          label="用户名"
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
          name="role"
          label="角色"
          rules={[{ required: true, message: '请选择权限' }]}
        >
          <Select
            mode="multiple"
            placeholder="请选择对应权限"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{
              width: '100%',
              height: '100%'
            }}
            key={props.roleList.id}
            options={roleselect.map((item) => ({
              value: item,
              label: item,
            }))}
          />
          {/* { 
            props.roleList.map(item =>
              <Option value={item.id} key={item.id} >{item.roleName}</Option>
            )
          } */}
          {/* </Select> */}
        </Form.Item>
        <Form.Item
          name="birth"
          label="出生日期"
          rules={[{ required: true, message: '请选择出生日期' }]}
        >
          <DatePicker
            // showTime
            inputReadOnly
            allowClear
          // format="YYYY-MM-DD"
          // onOk={onOk}
          // onChange={onChange}
          // allowClear={false}
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
            console.log(typeof value)
          }} />
        </Form.Item>
        {/* </div> */}
      </div>







    </Form>
  )
})
export default UserForm