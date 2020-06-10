import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/ToDoList';
// 1. 引入 react-redux 的 Provider
import { Provider } from 'react-redux';
// 3. 引入 store
import store from './store';

// 2. 使用 Provider 重新定义 App
const App = (
  // 4. Provider 连接了 store，那么 Provider 里面的组件，都可以获取和使用 store 中的内容
  <Provider store={store}>
    <TodoList />
  </Provider>
)

// 5. 直接渲染 App
ReactDOM.render(App, document.getElementById('root'));