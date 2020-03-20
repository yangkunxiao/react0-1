import React, { useState } from 'react';

function ExampleHooks() {
    /**
     * useState这个函数接收的参数是状态的初始值(Initial state)
     * 它返回一个数组，这个数组的第0位是当前的状态值，第1位是可以改变状态值的方法函数
     * 
    */
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
        </div>
    )
}

export default ExampleHooks