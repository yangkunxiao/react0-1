const defaultState = {
    inputFocus:true
}

export default (state = defaultState,action) => {
    if(action.type == 'search_focus_or_blur'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputFocus = !newState.inputFocus;
        return newState
    }
    return state
}