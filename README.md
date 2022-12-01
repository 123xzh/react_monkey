# 本项目为React18 router6
# 项目运行npm run start
# 项目打包npm run build

# redux同步的使用
const changarr = () => {
        // 同步
        dispatch({ type: "sarrpush", val: 51 })
}

# Redux异步使用 
先安装npm i redux-thunk

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


    import React,{useEffect} from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import numStatus from "../../redux/NumStatus";
import monkeyStatus from "../../redux/column";
function Fieldmanagement() {
    const { num } = useSelector((state) => ({
        num: state.handleNum.num,
    }))
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
    useEffect(() => {
        dispatch(monkeyStatus.asyncActions.getmonkeydatas)
    
        // getmonkeydatas()
    
      }, [])
    return (
        <div>Fieldmanagement
            <Button onClick={changnum}>fvsdfvsd</Button>
            <Button onClick={changarr}>fvsdfvsd</Button>
            <Button onClick={changarr1}>fvsdfvsd异步</Button>
            <h1>{num}</h1>
            <h1>{sarr}</h1>
        </div>
    )
}

export default Fieldmanagement