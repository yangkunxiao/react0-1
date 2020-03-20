const defaultData = {
    inputValue: 'jspang',
    list: [1, 2, 3]
};

export default (state = defaultData, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'changeInput': {
            newState.inputValue = action.value;
            return newState
            break
        }
        case 'addItem': {
            if (newState.inputValue) {
                newState.list = [...newState.list, newState.inputValue];
                newState.inputValue = '';
            }

            return newState
        }
        default: {
            break
        }
    }
    return state
}