import handletag from "./index"

let reducer = (state={...handletag.state},action) =>{
    //                  深拷贝
    let newState = JSON.parse(JSON.stringify(state))

    for (let  key in handletag.actionNames) {
        // key是每一个键
        // 判断是不是相等
        // if(actions.type==="add1"){}
        if (action.type===handletag.actionNames[key]) {
            handletag.actions[handletag.actionNames[key]](newState,action);
            break;            
        }
    }

    return newState
}

export default reducer