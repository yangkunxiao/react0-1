import React,{ useContext,createContext,useState } from 'react';
import ReactDOM from 'react-dom';
import ShowArea from './showArea';
import { Color } from './color';
import Buttons from './Buttons';
import UseRef from './useRef'
// const countValue = createContext();

// function Item(){
//     const count = useContext(countValue);
//     return (
//         <p>
//            我是子组件： { count }
//         </p>
//     )
// }

// function List(){
    
//     const [count,setCount] = useState(0);

//     return (
//         <div>
//             <p>{ count }</p>
//             <button onClick={ () => { setCount(count + 1) } }>点击</button>
//             <countValue.Provider value={ count }>
//                 <Item />
//             </countValue.Provider>
//         </div>
//     )
// }

const App = () => {
    return (
       <Color >
            <ShowArea />
            <Buttons />
            <UseRef />
       </Color>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

