const store={
    state: {
        changload:false
    },
    actions: { //只放同步的方法
        clickchangload(newState,action) {
            newState.changload=action.val
            console.log(newState);
        },
    },
    // 优化redux-thunk的异步写法(模仿Vuex的写法)
    // asyncActions:{ //只放异步的写法
    //     asyncAdd1(dispatch){
    //         setTimeout(() => {
    //             dispatch({type:"add1"})
    //         }, 1000);
    //     }
    // },
    // 名字统一管理
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2",
    // }
    actionNames:{}
}
//做到actionNames自动生成 不用每一次添加一个方法都要在actionNames添加键值对
let actionNames = {} // 定义一个全局的actionNames
// actionNames有多少对键值对，取决于action里面有多少个函数，所以遍历store.actions.
// 给actions添加键值对
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames;

export default store