const defaultState = {
    inputValue : '',
    list:[]
};

export default (state = defaultState,action) => {
    console.log(state,action);
    let newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'changeInput'){
        setInterval(() => {
            // console.log(new Date())
        }, 1000);
        return {...state,inputValue:action.value}
    }else if(action.type === 'addItem'){
        newState.list.push(action.value);
        newState.inputValue = ''
        return newState
    }else if(action.type === 'delItem'){
        newState.list.splice(action.index,1);
        return newState
    }else if(action.type === 'init'){
        console.log('init-0')
        newState.list = action.value;
        return newState
    }
    return state
}