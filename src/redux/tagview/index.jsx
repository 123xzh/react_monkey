const store={
    state:{
        taglist:[],
        tagview:true
    },
    actions:{
        addTag(newState,action){
            newState.taglist.push(action.val)
        },
        deleteTag(newState,action){
            newState.taglist.filter((item) => item !== action.val)
        },
        emptyTaglist(newState,action){
            newState.taglist.filter((item) => item.path === "/home")
        },
        closeOtherTags(newState,action){
            newState.taglist.filter((item) => item.path === "/home" || item === action.val)
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