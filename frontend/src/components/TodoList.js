import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoApi from '../api/api';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(function getTodoList() {
        async function getTodos (){
            let todoList = await TodoApi.getAllTodos();
            console.log(todoList)
            setTodos(todoList);
        };
        getTodos();
    }, [todos])

    //This function is uses regular expressions to check in spaces have been entered before a todo task
    //and eliminates those spaces or if no todos have been entered at all and doesn't display an empty string 
    // const addTodo = todo => {
    //     if(!todo.task || /^\s*$/.test(todo.task)){
    //         return
    //     }

    //     const newTodos = [todo, ...todos];

    //     setTodos(newTodos)
    //     console.log(...todos)
    // }
    return (
        <div>
           <h1>What's the plan for today?</h1> 
           <TodoForm />
        </div>
    )
}

export default TodoList
