const defaultState = {
  inputValue: '请输入',
  list: [
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList',
  ]
}

export default (state = defaultState, action) => {
  if(action.type === 'change_input_value'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }else if(action.type === 'add_value'){
    console.log(action)
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState
  }
  return state;
}
