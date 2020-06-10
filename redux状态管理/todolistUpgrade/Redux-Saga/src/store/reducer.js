import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_STATE,
  ADD_COUNT,
  ADD_COUNT_CHANGE,
  MINUS_COUNT,
} from "./actionsTypes"; // 2. 引用 actionTypes

const defaultState = {
  inputValue: "",
  count:0,
  todoList: [
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList",
    // "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList",
  ],
};

export default (state = defaultState, action) => {
  console.log(state, "state");
  console.log(action, "action");
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ADD_TODO_ITEM) {
    newState.todoList.push(action.value);
    newState.inputValue = "";
    return newState;
  } else if (action.type === INIT_STATE) {
    newState.todoList = action.value;
    return newState;
  } else if (action.type === ADD_COUNT_CHANGE) {
    newState.count = 100;
    return newState;
  } else if (action.type === MINUS_COUNT) {
    newState.count = action.count;
    return newState;
  }
  return state;
};
