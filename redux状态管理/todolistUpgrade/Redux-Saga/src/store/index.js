// 1. 引入 applyMiddleware 和 compose 进行多个中间件的处理
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 2. 引入 redux-saga 的 createSagaMiddleware
import createSagaMiddleware from 'redux-saga';
// 6. 创建并引用 store 下的 sagas.js 文件
import todoSaga from './sagas';

// 3. 调用 createSagaMiddleware 方法
const sagaMiddleware = createSagaMiddleware();

// 4. 定义 composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 5. 调用 composeEnhancers 进行多中间件处理
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  reducer,
  // enhancer
  applyMiddleware(sagaMiddleware),
);

// 7. 使用 todoSaga
sagaMiddleware.run(todoSaga);

export default store;