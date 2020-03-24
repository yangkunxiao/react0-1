import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { add,minus } from './actions'
const initialState = {
    count:0
}

const reducer = (state = initialState,action) => {
    console.log(state,action)
    switch(action.type){
        case "ADD":
            return {
                count:state.count + 1
            }
        case "REDUCE":
            return {
                count:state.count - 1
            }
        default :
            return state
    }
    // return state
}

export const store = createStore(reducer,applyMiddleware(thunk));