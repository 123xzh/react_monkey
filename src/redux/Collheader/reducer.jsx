import handleColl from "./index"

let reducer = (state={...handleColl.state},action) =>{
    //                  深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    // 拿着action.type和actiomNames进行每一项的对比，如果是相等，就调用
    // 模块名.action[下标](newState,action)
    for (let  key in handleColl.actionNames) {
        if (action.type===handleColl.actionNames[key]) {
            handleColl.actions[handleColl.actionNames[key]](newState,action);
            break;            
        }
    }

    return newState
}

export default reducer