import React,{ useReducer } from 'react';

const reducer = (state,action) => {
    switch(action.type){
        case 'add':
            return { ...state,count:state.count+1 };
        case 'minus':
            return { ...state,count: state.count-1};
        default : 
            return state
    }
}

const initialState = { count:10,name:'kaka' };

const init = initialState => {
    return { count:initialState.count + 2 }
}
export default function useReducers() {
    const [state,dispatch] = useReducer(reducer,initialState,init);
    return (
        <>
            <p>{ state.count }</p>
            <button onClick={ () => dispatch({type:'add'}) }>加</button>
            <button onClick={ () => dispatch({type:'minus'}) }>减</button>
        </>
    )
}