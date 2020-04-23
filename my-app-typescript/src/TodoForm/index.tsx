import React, { useState } from 'react';
import axios from '../api/axios';

interface Props {
    refreshTodos(): void
}

const TodoForm : React.FC<Props> = ({ refreshTodos }) => {
    const [name,setName] = useState("");

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = {
            id:Math.ceil(Math.random()) * 10,
            name,
            done:false
        }
        if (name.trim()) {
            axios('/api/add', newTodo)
            refreshTodos()
            setName('')
          }
    }
    return (
        <form className="todo-form" onSubmit={ onSubmit }>
            <input 
                className="todo-input"
                value={name}
                onChange={onChange}
                placeholder="请输入待办事项"
            />
            <button className="btn" type="submit">新增</button>
        </form>
    )
}   


export default TodoForm;