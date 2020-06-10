import React,{ Provider } from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './components/ToDoList'
import './index.css'
import store from  './store/index'

ReactDOM.render(
  // <Provider value={store}>
      <ToDoList />,
  // </Provider>,
  document.getElementById('root')
);

