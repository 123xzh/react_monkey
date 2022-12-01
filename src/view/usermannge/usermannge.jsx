import React, { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Modal, Button, message } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import Userfrom from '../../components/userfrom/index'
import moment from "moment";
import dayjs from 'dayjs'
import { getUsers, deleteUser, editUser, addUser } from "../../api/user";
export default function Usermannge() {
    const { Search } = Input;
    const [messageApi, contextHolder] = message.useMessage();

    const [size, setSize] = useState('large'); // default is 'middle'
    const { confirm } = Modal
    const [userdata, setUser] = useState([])
    const [Searchdata, setSearch] = useState([])
    const [deletedata, setdeleteUser] = useState([])
    const [editdata, seteditUser] = useState([])
    const [adddata, setaddUser] = useState([])
    // 
    const [dataSource, setdataSource] = useState([])
    const [isAddVisible, setisAddVisible] = useState(false)
    const [isUpdateVisible, setisUpdateVisible] = useState(false)
    const [roleList, setroleList] = useState([])
    const [regionList, setregionList] = useState([])
    const [current, setcurrent] = useState(null)

    const [isUpdateDisabled, setisUpdateDisabled] = useState(false)
    const AddForm = useRef(null)
    const UpdateForm = useRef(null)
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
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
            title: '出生日期',
            dataIndex: 'birth',
            key: 'birth',
        },
        {
            title: '权限',
            key: 'role',
            dataIndex: 'role',
            render: (_, { role, index }) => (
                <>
                    {role.map((tag, id) => {
                        let color = tag === '管理员' ? 'geekblue' : 'green';
                        if (tag === '超级管理员') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={id.toString()}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '性别',
            key: 'sex',
            dataIndex: 'sex',
            render: (sex) => {
                let colors = sex === 1 ? 'geekblue' : 'green';
                let sexs = '';
                if (colors === 'geekblue') {
                    sexs = '男'
                } else {
                    sexs = '女'
                }
                return (
                    <Tag color={colors}>
                        {sexs}
                    </Tag>
                );
            },
        },
        {
            title: '地址',
            key: 'addr',
            dataIndex: 'addr',
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
    const getuserdatas = async () => {
        const result = await getUsers()
        const { users } = result.data;
        setUser(users)
        console.log(users);
    }
    useEffect(() => {
        getuserdatas()
    }, [])
    const deleteMethod = (item) => {
        const { id, role } = item;
        // console.log(item);
        if (role.indexOf("超级管理员") == -1) {
            deleteUser({ id }).then(res => {
                message.success("删除成功")
                getuserdatas()
            })
        } else {
            message.error("权限不足")
        }
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
        // console.log(item);
        var a = UpdateForm.current.validateFields().then(value => {
            value.birth = value.birth.format('YYYY-MM-DD');


            var b = userdata.map(v => v.title).indexOf(value.title);
            var userid = userdata[b].id
            value.id = userid;
            // var userid = value.title;

            // var b = userdata.filter(v=> v.map(v.title)=value.title)

            editUser(value).then((response) => {
                // console.log(value);

                getuserdatas()
                message.success('修改成功！')
            }).catch(e => {
                message.error('修改失败！')
                // message.success("编辑失败,请重试!")
            })
            setisUpdateVisible(false)

            setdataSource(dataSource.map(item => {
                if (item.id === current.id) {
                    return {
                        ...item,
                        ...value,
                        role: roleList.filter(data => data.id === value.roleId)[0]
                    }
                }
                return item
            }))
            setisUpdateDisabled(!isUpdateDisabled)


            // }

        })
    }
    const addFormOK = () => {
        AddForm.current.validateFields().then(value => {
            const { birth } = value;
            // var a =new Date(birth)) ;
            // console.log(a);
            // console.log(birth.format('YYYY-MM-DD'));
            value.birth = birth.format('YYYY-MM-DD');
            // console.log(value);
            // console.log(moment(value.birth));
            if (userdata.map(v => v.title).indexOf(value.title) != -1) {
                message.error("用户名已存在")
            } else {
                // console.log(userdata.length);
                value.id = ++userdata.length
                setisAddVisible(false)
                // 清空ref
                AddForm.current.resetFields()
                // console.log( value.birth.moment().format());

                addUser(value).then((response) => {
                    // console.log(value);
                    // form.resetFields();
                    // this.setState({ addUserModalVisible: false, addUserModalLoading: false });
                    message.success("添加成功!")
                    getuserdatas()
                    // this.getUsers()
                }).catch(e => {
                    message.success("添加失败,请重试!")
                })

            }
        }).catch(err => {
            console.log(err)
        })
    }


    // 用户搜索

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => {
        let arr = [];
        setSearch(value)
        if (value) {
            arr = userdata.filter((data) => {
                return data.title.indexOf(value.toString()) !== -1;
            });
        } else {
            arr = userdata;
        }
        console.log(value)
        userdata.length = arr.length;
        setUser(arr)
        if (!value) {
            getuserdatas()
        }
    };
    const getdata = (value) => {
        if (!value.target.value) {

            getuserdatas()
        }
    }


    return (

        <div>

            <Space
                direction="horizontal"
                size="middle"
                style={{
                    display: 'flex',
                    width: '100%',
                }}
            >

                <Button onClick={() => {
                    setisAddVisible(true)
                }} type="primary" size={size}>新增</Button>
                <Search style={{
                    display: 'flex',
                    // width: '100%',
                    marginLeft: '300%'
                }} placeholder="请输入用户名" onChange={getdata} onSearch={onSearch} enterButton />
            </Space>
            <Table columns={columns} dataSource={userdata}
                pagination={{
                    pageSize: 5
                }}
                rowKey={item => item.id} />

            <Modal
                open={isUpdateVisible}
                title="更新用户"
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
                title="添加用户"
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

