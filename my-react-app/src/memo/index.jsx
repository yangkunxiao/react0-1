//React.memo() 可以将函数组件转换成pureComponent
import React,{ useState } from 'react'

function ChildComponent(props){
    console.log('我被改变了')
    return (
        <>
            <h1>我是memo组件：{ props.count }</h1>
        </>
    )
}

let MemoComponent = React.memo(ChildComponent);

function ParentComponent(){
    let [count,setCount] = useState(0);
    let [num,setNum] = useState(0);
    return (
        <>
            <button onClick={ () => setCount(count + 1) }>改变count</button>
            <button onClick={ () => setNum(num + 1) }>改变age</button>
            <MemoComponent count={ count }/>
        </>
    )
}

export default ParentComponent