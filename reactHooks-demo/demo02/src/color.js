import React, { createContext ,useReducer } from 'react';

export const ColorContext = createContext({});

export const UPDATE_COLOR = 'UPDATE_COLOR';

const defaultState = {
    color:'blue'
}

const reducerColor =  (defaultState,action) => {
    let newState = JSON.parse(JSON.stringify(defaultState))
    if(action.type = UPDATE_COLOR){
        newState.color = action.color
        return newState
    }else{
        return newState
    }
}

export const Color = props => {
    const [state,dispatch] = useReducer(reducerColor,defaultState);
    return (
        <ColorContext.Provider value={{ state,dispatch }}>
            { props.children }
        </ColorContext.Provider>
    )
}

