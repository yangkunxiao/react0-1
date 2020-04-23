import React, { useState, useEffect } from 'react'
// import logo from './logo.svg'
import TodoForm from "./TodoForm";
import axios from './api/axios'
import './styles/App.css'

type Todo = {
    id:number,
    name:string,
    done:boolean
};

type Todos = Todo[];

const App : React.FC = () => {

    const [todos,setTodos] = useState<Todos>([]);

    const refreshTodos = () => {
        axios<Todos>('/api/todos').then(setTodos)
    }

    useEffect(() => {
        refreshTodos()
    },[])

    const onToggleTodo = async (todo:Todo) => {
        await axios('/api/toggle',todo.id);
        refreshTodos()
    }

    return  <div className="App">
        <header className="App-header">
            <ul>
                <TodoForm refreshTodos={refreshTodos}/>
                {
                    todos.map((todo,index) => {
                        return (
                            <li 
                                onClick={ () => onToggleTodo(todo) } 
                                key={ todo.name } 
                                className={ todo.done ? 'done' :'' }
                                >
                                    { todo.name }
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    </div>

}

// import Button from 'antd/es/button'
// function App() {
// 	const [count, setCount] = useState(0)
// 	function handleChange() :void{
//         setCount(count+1)
//     }
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				{/* <img src={logo} className="App-logo" alt="logo" />
// 				<Button type="primary" onClick={handleChange}>Button</Button> */}
// 				{/* <p>{ count }</p> */}
// 			</header>
// 		</div>
// 	)
// }

export default App
