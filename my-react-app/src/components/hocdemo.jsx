//高阶组件 抽离公共部分 复用
import React from 'react';

function Child(props) {
	return (
        <h1>你好，{props.name}</h1>
    )
}

function Child2(props) {
	return (
        <h1>hello ,{props.name}</h1>
    )
}

function HocComponent(Component){
    let obj = {
        name:'kaka'
    }
    return function newHocComponent(){
        return (
            <Component name={obj.name}/>
        )
    }
}

let Childs = HocComponent(Child)
let Childs2 = HocComponent(Child2)

function HocGreeting (){
    return (
        <>
        {/* <h1>90</h1> */}
        <Childs />
        <Childs2 />
    </>
    )
}

export default HocGreeting