import { getmonkey, deletemonkey, editmonkey, addmonkey } from "../../api/anima";
import { message } from 'antd';

// const [messageApi, contextHolder] = message.useMessage();
const store={
    state: {
        columnsdata: []
    },
    actions: { //只放同步的方法
        columnedit(newState) {
            newState.num++
        },
        columnadd(newState, action) {
            // console.log(newState);
            this.getmonkeydatas()
        },
        columnlist(newState, action) {
            // console.log(action.val);
            // console.log(newState);
            newState.columnsdata=action.val
            // this.getmonkeydatas()
        },
    },
    // 优化redux-thunk的异步写法(模仿Vuex的写法)
    asyncActions:{ //只放异步的写法
        asyncAdd1(dispatch){
            setTimeout(() => {
                dispatch({type:"add1"})
            }, 1000);
        },
        editmonkeycolumns(value){
            editmonkey(value).then((response) => {
                this.getmonkeydatas()
                // message.success('修改成功！')
            }).catch(e => {
                console.log(e);
                // message.error('修改失败！')
            })
        },
       async getmonkeydatas(dispatch){
        
            const result = await getmonkey();
            // console.log(this.state);
            const { users } = result.data;
            dispatch({type:"columnlist",val:users})
            // console.log(users);
            // this.state.columnsdata.push(users);
        }
    },
    // 名字统一管理
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2",
    // }
    actionNames:{}
}
//做到actionNames自动生成 不用每一次添加一个方法都要在actionNames添加键值对
let actionNames = {} // 定义一个全局的actionNames
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames;

export default store