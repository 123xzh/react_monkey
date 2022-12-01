import handleNum from "./index"

let reducer = (state={...handleNum.state},action) =>{
    //                  深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    

    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState,action)
    //         break;
    //     case  handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState,action)
    //         break;
    //     default:
    //         break;
    // }
    // 【优化】上面这样写，每添加一个方法，都要在这里多写一句case

    // 拿着action.type和actiomNames进行每一项的对比，如果是相等，就调用
    // 模块名.action[下标](newState,action)
    for (let  key in handleNum.actionNames) {
        // key是每一个键
        // 判断是不是相等
        // if(actions.type==="add1"){}
        if (action.type===handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState,action);
            break;            
        }
    }

    return newState
}

export default reducer