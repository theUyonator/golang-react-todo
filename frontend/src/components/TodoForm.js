import React, { useState } from 'react';
import TodoApi from '../api/api';

const TodoForm = () => {
    const [task, setTask] = useState("");

    const handleChange = e => {
        // console.log(e)
        setTask(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(task)
        let todo = await TodoApi.createTodo({task});
        console.log(todo)

        setTask("");
    };

    return (
     <form className="todo-form" onSubmit={handleSubmit}>
         <input 
            type="text" 
            placeholder="Add a todo task" 
            value={task} 
            name="text"
            className="todo-input"
            onChange={handleChange}
        />
        <button className="todo-button">Add todo task</button>
     </form>
    )
}

export default TodoForm
