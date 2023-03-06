import React, { useState, useEffect } from 'react';
import TodoApi from '../api/api';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(function getTodoList() {
        async function getTodos (){
            let todoList = await TodoApi.getAllTodos();
            // console.log(todoList)
            setTodos(todoList);
        };
        getTodos();
    }, [todos])

    async function completeTodo(id) {
        console.log(id)
       let completed =  await TodoApi.completeTodo(id);
         console.log(completed);
    };
    
    async function deleteTodo(id) {
        await TodoApi.deleteTodo(id);
    }

    return (
        <div>
           <h1>What's the plan for today?</h1> 
           <TodoForm />
           {/* {console.log(todos)} */}
           {todos.map((todo) => (
                  <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
               ))}
    
        </div>
    )
}

export default TodoList
