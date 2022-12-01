const store={
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState,action){
            newState.sarr.push(action.val)
        },
    },
    actionNames:{}
}

let actionNames = {} // 定义一个全局的actionNames
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames;

export default store