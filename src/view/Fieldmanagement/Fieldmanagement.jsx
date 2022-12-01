import React, { useEffect, useState } from 'react'
import { Button, Collapse, Space, Table, Tag, message, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { getmonkey, deletemonkey, editmonkey, addmonkey, getcolumnlist } from "../../api/anima";
import numStatus from "../../redux/NumStatus";
import monkeyStatus from "../../redux/column";
const { Option } = Select
function Fieldmanagement() {
    const [messageApi, contextHolder] = message.useMessage();
    const [columndatalist, setcolumn] = useState([])
    const [monkeydatalist, setmonkeycolumn] = useState([])
    const [Donglist2, setDong2] = useState([])
    const [columnlist2, setcolumn2] = useState([])
    const { Panel } = Collapse;
    const { num } = useSelector((state) => ({
        num: state.handleNum.num,
    }))
    const columnlist = [
        { id: 1, name: "第一栋" },
        { id: 2, name: "第二栋" },
        { id: 3, name: "第三栋" },
        { id: 4, name: "第四栋" },
    ]
    const columnselect = [
        { key: '1', label: "第一栏" },
        { key: '2', label: "第二栏" },
        { key: '3', label: "第三栏" },
        { key: '4', label: "第四栏" },
    ]
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const text = `
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
            `;
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
                return <img src={avatar} alt="" style={{ width: '100px', height: '70px', borderRadius: '20%' }} />
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
     
    ];

    const { sarr } = useSelector((state) => ({
        sarr: state.handleArr.sarr,
    }))
    const dispatch = useDispatch();
    const changnum = () => {
        // dispatch({type:"字符串(认为是一个记号)",val:3})
        //   type是固定的   val是自定义的
        dispatch({ type: "add2", val: 5 })
    }
    const changarr = () => {
        // 同步
        dispatch({ type: "sarrpush", val: 51 })
    }
    const changarr1 = () => {
        // 异步 写法 redux-thunk 
        // 基本格式：dispatch(异步执行的函数)
        // dispatch((执行异步的函数)=>{
        // dispatch((dis)=>{
        //     setTimeout(() => {
        //         dis({type:"add1"})
        //     }, 1000);
        // })
        dispatch(numStatus.asyncActions.asyncAdd1)

    }
    const fetmonkeysdata = async () => {

        const result = await getmonkey();
        const { users } = result.data;

        console.log(users);
    }

    useEffect(() => {
        fetmonkeysdata()
        // const a = '第一栏';
        // getcolumnlist(a).then((response) => {
        //     // console.log(value);
        //     // console.log(response);
        //     // getmonkeydatas()
        //     // message.success('修改成功！')
        // }).catch(e => {
        //     // message.error('修改失败！')
        //     // message.success("编辑失败,请重试!")
        // })
        dispatch(monkeyStatus.asyncActions.getmonkeydatas)
    }, [])

    const onChange1 = (key) => {
        if (key) {
            console.log(key);
            const columnlist1 = ["第一栋", "第二栋", "第三栋", "第四栋"]
            console.log(columnlist1[key - 1]);
            setDong2(columnlist1[key - 1])
        }
    };

    const onChange = (key) => {
        if (key) {
            console.log(key);
            const columnlist1 = ["第一栏", "第二栏", "第三栏", "第四栏"]
            console.log(Donglist2);
            console.log(columnlist1[key - 1]);
            var colulist = Donglist2 +','+ columnlist1[key - 1];
            console.log(colulist);
            getcolumnlist(colulist).then((response) => {
                // console.log(value);
                var { data } = response;
                // console.log("ddddddddddddddd",data);
                // console.log(response.data);
                setcolumn(data)
                // getmonkeydatas()
                // message.success('修改成功！')
            }).catch(e => {
                // message.error('修改失败！')
                // message.success("编辑失败,请重试!")
            })
        }
    };

    return (
        <div>
            <Collapse onChange={onChange1} accordion>
                {
                    columnlist.map((item) =>
                    (
                        <Panel header={ item.name} key={item.id}>
                            <Collapse accordion onChange={onChange}>
                                {
                                    columnselect.map((item) =>
                                        <Panel header={ item.label} key={item.key}>
                                             <Table columns={columns} dataSource={columndatalist} rowKey={item => item.id} />
                                            {/* <p>{text}</p> */}
                                        </Panel>
                                    )
                                }
                            </Collapse>
                        </Panel>
                    )
                    )
                }

                {/* <Panel header="This is panel header 2" key="2">
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="This is panel header 4" key="4">
                <Table columns={columns} dataSource={data} />
            </Panel> */}
            </Collapse>
        </div >
    )
}

export default Fieldmanagement