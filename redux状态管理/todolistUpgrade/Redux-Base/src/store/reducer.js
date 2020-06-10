import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_STATE } from './actionTypes'; // 2. 引用 actionTypes


const defaultState = {
  inputValue: "",
  todoList: [
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList",
  ],
};

export default (state = defaultState, action) => {
  console.log(state);
  console.log(action);
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type == CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }else if(action.type == ADD_TODO_ITEM){
    newState.todoList.push(action.value);
    newState.inputValue = ''
    return newState
  }else if(action.type == INIT_STATE){
    newState.todoList = action.value;
    return newState
  }
  return state;
};
