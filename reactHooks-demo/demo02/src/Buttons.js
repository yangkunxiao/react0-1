import React, { Fragment ,useContext} from 'react';
import { ColorContext,UPDATE_COLOR } from './color'
function Buttons(){
    const { dispatch } = useContext(ColorContext);
    return (
        <Fragment>
            <button onClick={ () => { dispatch({ color:'yellow',type:UPDATE_COLOR }) } }>黄色</button>
            <button onClick={ () => { dispatch({ color:'red',type:UPDATE_COLOR }) } }>红色</button>
        </Fragment>
    )
}

export default Buttons;