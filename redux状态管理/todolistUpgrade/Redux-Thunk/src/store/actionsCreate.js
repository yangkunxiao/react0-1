// 1. 引入 actionTypes
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_STATE,
} from "./actionTypes";

import axios from 'axios'

// 2. 导出相应 action
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value,
});

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const initState = (value) => ({
  type: INIT_STATE,
  value,
});

export const getToDoList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/api/todolist').then(res => {
        console.log(res);
        const action = initState(res.data.toDoList)
        dispatch(action)
    })
  }
}