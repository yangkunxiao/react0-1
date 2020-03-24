import React, { useContext } from 'react'
import { context,ContextProvider } from './ParentComponent';

function SubComponent (){
    const { count = 0,add,reduce } = useContext(context);
    console.log(useContext(context))
    return (
       <>
           <p>自组件</p>
            <div>
                <p>{ count }</p>
                <button onClick={ add }>add</button>
                <button onClick={ reduce }>redece</button>
            </div>
       </>
    )
}

export default () => (
    <ContextProvider >
        < SubComponent />
    </ContextProvider>
)