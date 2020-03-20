import React, { useState } from 'react';

function ExampleMultple() {
    const [age, setAge] = useState(19);
    
    const [work, setWork] = useState('前端工程师');

    const [sex, setSex] = useState('男');

    return (
        <div>
            <p>ykx：{sex}</p>
            <p>年龄：{age}岁</p>
            <p>工作：{work} </p>
        </div>
    )
}

export default ExampleMultple;