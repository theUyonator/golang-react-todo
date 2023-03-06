import React, { useState, useEffect, useRef } from 'react';
import TodoApi from '../api/api';

const EditTodoForm = ({todo, setEdit}) => {
    const [formData, setFormData] = useState(todo.task);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        // console.log(e)
        setFormData(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        let todoRes = await TodoApi.editTodo(todo.id, {task: formData});
        console.log(todoRes)
        setEdit(false)
    };

    return (
     <form className="todo-form" onSubmit={handleSubmit}>
         <input 
            type="text" 
            value={formData} 
            name="task"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button edit">Edit todo task</button>
     </form>
    )
}

export default EditTodoForm;