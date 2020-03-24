import React, { useState, Fragment,useEffect,useLayoutEffect } from 'react'
import { useParams,useRouteMatch,useLocation } from 'react-router-dom'

function HookComponent(props) {
    console.log(props)
    const location = useLocation()
    console.log(location,'location')
    const { path,url } = useRouteMatch();
    console.log(path,url,useRouteMatch())
    const { id } = useParams();
    console.log('params:',id)
    const num = 2;
    //可以多次使用 useState
    let [count, setCount] = useState(() => {
        return 10 * num
    });
    let [refresh,setRefresh] = useState(0);
    /**
     * 异步更新  只有Dom渲染完成时才会触发 浅通过比较进行更新，可以通过设置依赖，进行控制。
     * 用于替代componentDidMount componentDidUpdate
     * 有副作用的函数：副作用：定时器、ajax等
     * 副作用有需要清除的 有不需要清除的 需要清除的
     * 返回一个函数，相当于componentWillUnMount 函数在组件销毁前或者下一次执行前执行。
     * 
     * 如果使用同步 可以使用useLayoutEffect
     *  */ 
    useEffect(() => {
        // setTimeout(() => {
        //     setCount(++count)
        // },1000);
        function clear(){
            console.log('我是清除函数');
        }
        return clear
    },[refresh])
    function handlerClick(type){
        //y异步改变
        if(type === 'add'){
            count++;
        }else if(type === 'minus'){
            count--;
        }
        setCount(count)
    }
	return (
		<Fragment>
			<h1>我是Hooks组件</h1>
			<p>{ count }</p>
            <button onClick={() => {handlerClick('add')}}>点击+1</button>
            <button onClick = {() => {handlerClick('minus')}}>点击-1</button>
            <button onClick = {() => { setRefresh(++refresh) }}>ajax请求</button>
		</Fragment>
	)
}

export default HookComponent
