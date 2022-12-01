import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux"

import reduxThunk from "redux-thunk";
import handleNum from "./NumStatus/reducer";
import handleArr from "./ArrStatus/reducer";
import handleColl from "./Collheader/reducer";
import handleload from "./lonadredux/reducer";
import handletag from "./tagview/reducer";
import handlecolumn from "./column/reducer";
import { useDispatch, useSelector } from 'react-redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
}

//              combineReducers合并redux
// 组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr,
    handleColl,
    handleload,
    handletag,
    handlecolumn,
})
const persistedReducer = persistReducer(persistConfig, reducers)

// 创建数据仓库
//  React开发者工具 legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__
// && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__
//     && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt
const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk)
  );
// function Setitem() {
//     const { num } = useSelector((state) => ({
//         num: state.handleNum.num,
//     }))
//     console.log(num);
// }
// Setitem();

// 把仓库数据，浏览器redux-dev-tools,还有reduxThunk插件关联在store中
const store = legacy_createStore(persistedReducer, enhancer);
const persistor = persistStore(store)
export { store,persistor }
