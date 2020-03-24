import React  from 'react'

function Input(){
    const inputRef = React.createRef();
    function handlerClick(){
        console.log("非受控组件值",inputRef.current.value)
    }
    return (
        <div>
            <button onClick={handlerClick }>点击按钮</button>
			<input type="text" defaultValue="非受控组件值" ref={inputRef} />
        </div>
    )
}

export default Input;