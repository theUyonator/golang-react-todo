import React, { useState } from 'react';
import TodoApi from '../api/api';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

async function completeTodo(id) {
   let complete = await TodoApi.completeTodo(id);
    console.log(complete);
};

const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        task: '',
    })
    return todos.map((todo, index) => (
        <div className={todo.complete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => await completeTodo(todo.id)}>
                {todo.task}
            </div>
            <div className="icons">

            </div>
        </div>
    ))
}

export default Todo
