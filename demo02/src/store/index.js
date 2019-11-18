import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import reducer from './reduces.js'
import createSagaMiddleware from 'redux-saga';
import mySaga from './mySagas.js'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))

const store = createStore(reducer,enhancer);// 创建数据存储仓库

sagaMiddleWare.run(mySaga)

export default store;