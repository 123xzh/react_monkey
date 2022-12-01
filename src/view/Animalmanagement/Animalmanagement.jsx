import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import Userfrom from '../../components/Animalfrom/index'
import moment from "moment";
import monkeyStatus from "../../redux/column";
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload';
import placeholder from "./loading.gif"
import { getmonkey, deletemonkey, editmonkey, addmonkey } from "../../api/anima";
export default function Usermannge() {
  const [messageApi, contextHolder] = message.useMessage();
  
  const [size, setSize] = useState('large'); // default is 'middle'
  const { confirm } = Modal
  const [userdata, setUser] = useState([])
  const [deletedata, setdeletemonkey] = useState([])
  const [editdata, seteditmonkey] = useState([])
  const [adddata, setaddmonkey] = useState([])
  // 
  const [dataSource, setdataSource] = useState([])
  const [isAddVisible, setisAddVisible] = useState(false)
  const [isUpdateVisible, setisUpdateVisible] = useState(false)
  const [roleList, setroleList] = useState([])
  const [regionList, setregionList] = useState([])
  const [current, setcurrent] = useState(null)
  
  const [isUpdateDisabled, setisUpdateDisabled] = useState(false)
  const AddForm = useRef(null)
  const dispatch = useDispatch();
  const UpdateForm = useRef(null)
  
  var holderImg = <img src={placeholder} />
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名字',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <h3>{text}</h3>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      dataIndex: 'avatar',
      title: '图片',
      width: 150,
      key: 'avatar',
      render: (avatar) => {
        return ( <LazyLoad placeholder={holderImg}>
        <img src={avatar} alt="" style={{ width: '100px', height: '70px', borderRadius: '20%' }} />
        </LazyLoad >)
      }
    },


    {
      title: '出生日期',
      dataIndex: 'birth',
      key: 'birth',
    },
    {
      title: '性别',
      key: 'sex',
      dataIndex: 'sex',
      render: (sex) => {
        let colors = sex === 1 ? 'geekblue' : 'green';
        let sexs = '';
        if (colors === 'geekblue') {
          sexs = '雄性'
        } else {
          sexs = '雌性'
        }
        return (
          <Tag color={colors}>
            {sexs}
          </Tag>
        );
      },
    },
    {
      title: '出生地址',
      key: 'addr',
      dataIndex: 'addr',
      // key: 'birth',
    },

    {
      title: '分支',
      key: 'dongdata1',
      dataIndex: 'dongdata1',
      render: (dongdata1) => {
        let colors = ''
        if (dongdata1.value === '第一栋') {
          colors = 'geekblue'
        } else if (dongdata1.value === '第二栋') {
          colors = 'green'
        } else if (dongdata1.value === '第三栋') {
          colors = 'blue'
        }else if (dongdata1.value === '第四栋') {
          colors = 'yellow'
        }
        // console.log(dongdata1.children[0].title);
        return (
          <Tag color={colors}>
            {dongdata1.value}{dongdata1.children[0].value}
          </Tag>
        );
      },
      // key: 'birth',
    },
    {
      title: "操作",
      render: (item) => {
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod(item)} />
          <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={() => handleUpdate(item)} />
        </div>
      }
    }
  ];
  const confirmMethod = (item) => {
    confirm({
      title: '你确定要删除?',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      onOk() {
        // console.log(item);
        //   console.log('OK');
        deleteMethod(item)
      },
      onCancel() {
        //   console.log('Cancel');
      },
    });
  }
  const handleUpdate = (item) => {
    setisUpdateVisible(true)
    // console.log(item);
    setTimeout(() => {
      // console.log(item);
      const { birth } = item;
      // console.log(item.birth);

      // item.birth = moment(birth);
      item.birth = dayjs(birth);
      // console.log(item.birth._isAMomentObject);
      // console.log(item);
      setregionList(item.birth);
      // console.log(moment(birth, 'YYYY-MM-DD'));
      // console.log(typeof moment(birth, 'YYYY-MM-DD'));

      // var a = ['超级管理员', '管理员', '用户']
      // var b = [
      //     { id: 0, roleName: '女' },
      //     { id: 1, roleName: '男' },
      // ]
      // setregionList(b);
      // var b = ['用户', '管理员', '超级管理员']
      // setregionList(a)
      // setroleList(a)
      UpdateForm.current.setFieldsValue(item);
    }, 100)
    // console.log("dsgsgsgs", UpdateForm);

    setcurrent(item)
  }


  // const handleChange = (item) => {
  //     item.roleState = !item.roleState
  //     setdataSource([...dataSource])
  // }
  const { columnsdata } = useSelector((state) => ({
    columnsdata: state.handlecolumn.columnsdata,
  }))
  const getmonkeydatas = async () => {
    await dispatch(monkeyStatus.asyncActions.getmonkeydatas)
    const result = await getmonkey()
    // console.log(result);
    console.log(columnsdata);
    console.log("数据已经更新");
    const { users } = result.data;
    const imgdata = users.map(v => v.avatar)
    setUser(users)
    var columnslist = ['第一栏', '第二栏', '第三栏', '第四栏'];
    var columnsselect = columnslist[Math.floor(Math.random() * columnslist.length)];
  }
  useEffect(() => {
    dispatch(monkeyStatus.asyncActions.getmonkeydatas)

    getmonkeydatas()

  }, [])

  const deleteMethod = (item) => {
    const { id } = item;
    // console.log(item);
    // if (role.indexOf("超级管理员") == -1) {
    deletemonkey({ id }).then(res => {
      console.log(id);
      message.success("删除成功")
      getmonkeydatas()
    })
    // } else {
    // message.error("权限不足")
    // }
    // console.log(item)
    // 当前页面同步状态 + 后端同步

    var a = setdataSource(dataSource.filter(data => data.id !== item.id))
    // console.log(a);
    // axios.delete(`/users/${item.id}`)
  }
  const handleAudit = (item) => {
    // console.log(item);
  }
  const updateFormOK = () => {
    //     // console.log(item);
        var a = UpdateForm.current.validateFields().then(value => {
    //         value.birth = value.birth.format('YYYY-MM-DD');


    //         var b = userdata.map(v => v.title).indexOf(value.title);
    //         var userid = userdata[b].id
    //         value.id = userid;
    //         // var userid = value.title;

    //         // var b = userdata.filter(v=> v.map(v.title)=value.title)

            editmonkey(value).then((response) => {
                console.log(value);

                getmonkeydatas()
                message.success('修改成功！')
            }).catch(e => {
                message.error('修改失败！')
                // message.success("编辑失败,请重试!")
            })
            setisUpdateVisible(false)

    //         setdataSource(dataSource.map(item => {
    //             if (item.id === current.id) {
    //                 return {
    //                     ...item,
    //                     ...value,
    //                     role: roleList.filter(data => data.id === value.roleId)[0]
    //                 }
    //             }
    //             return item
    //         }))
    //         setisUpdateDisabled(!isUpdateDisabled)


    //         // }

        })
  }
  const addFormOK = () => {
    //     AddForm.current.validateFields().then(value => {
    //         const { birth } = value;
    //         // var a =new Date(birth)) ;
    //         // console.log(a);
    //         console.log(birth.format('YYYY-MM-DD'));
    //         value.birth = birth.format('YYYY-MM-DD');
    //         console.log(value);
    //         // console.log(moment(value.birth));
    //         if (userdata.map(v => v.title).indexOf(value.title) != -1) {
    //             message.error("用户名已存在")
    //         } else {
    //             // console.log(userdata.length);
    //             value.id = ++userdata.length
    //             setisAddVisible(false)
    //             // 清空ref
    //             AddForm.current.resetFields()
    //             // console.log( value.birth.moment().format());

    //             addmonkey(value).then((response) => {
    //                 // console.log(value);
    //                 // form.resetFields();
    //                 // this.setState({ addmonkeyModalVisible: false, addmonkeyModalLoading: false });
    //                 message.success("添加成功!")
    //                 getmonkeydatas()
    //                 // this.getmonkey()
    //             }).catch(e => {
    //                 message.success("添加失败,请重试!")
    //             })

    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
  }

  return (

    <div>
      {/* <img src={require(userdata[1])} alt="" /> */}
      <Button onClick={() => {
        setisAddVisible(true)
      }} type="primary" size={size}>新增</Button>
      <Table columns={columns} dataSource={userdata}
        pagination={{
          pageSize: 2
        }}
        rowKey={item => item.id} />
      <Modal
        open={isUpdateVisible}
        title="更新信息"
        okText="更新"
        cancelText="取消"
        onCancel={() => {
          setisUpdateVisible(false)
          setisUpdateDisabled(!isUpdateDisabled)
        }}
        onOk={() => updateFormOK()}
      >
        <Userfrom regionList={regionList} roleList={roleList} ref={UpdateForm} isUpdateDisabled={isUpdateDisabled} isUpdate={true}></Userfrom>
      </Modal>
      <Modal
        open={isAddVisible}
        title="添加动物"
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setisAddVisible(false)
        }}
        onOk={() => addFormOK()}
      >
        <Userfrom regionList={regionList} roleList={roleList} ref={AddForm}></Userfrom>
      </Modal>
    </div>

  )
}

