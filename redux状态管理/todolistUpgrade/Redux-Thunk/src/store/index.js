import { createStore ,applyMiddleware,compose} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'
// 3. 使用 redux-devtools-extension 中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ :compose;
// 4. 使用 applyMiddleware 对此进行扩展
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)
// 5. 在 createStore 进行 enhancer 调用
const store = createStore(
    reducer/* preloadedState, */,
    enhancer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;