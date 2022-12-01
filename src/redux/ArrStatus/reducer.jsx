import handler from "./index"

let reducer = (state={...handler.state},action) =>{
    //                  深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    for (let  key in handler.actionNames) {
        // key是每一个键
        // 判断是不是相等
        // if(actions.type==="add1"){}
        if (action.type===handler.actionNames[key]) {
            handler.actions[handler.actionNames[key]](newState,action);
            break;            
        }
    }

    return newState
}

export default reducer