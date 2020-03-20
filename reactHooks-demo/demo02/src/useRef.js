import React,{ useRef,useState,useEffect } from 'react';
function UseRef(){
    // const inpEl = useRef(null);
    // const changeValue = () => {
    //     inpEl.current.value = '0';
    //     console.log(inpEl)
    // }

    const iptRef = useRef(null);
    const [text,setText] = useState('')
    useEffect(() => {
        iptRef.current = text;
        console.log('useEffect=====>:' + iptRef.current)
    },[text])

    return (
        <div>
            {/* <input ref={inpEl} type="text" /> */}
            {/* <button onClick={ changeValue }>设置value</button> */}
            <br />
            <br />
            <input ref={ iptRef } onChange={ (e) => setText(e.target.value) } />
        </div>
    )
}
export default UseRef;