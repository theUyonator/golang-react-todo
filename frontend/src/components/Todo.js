import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti'



const Todo = ({ todo, completeTodo, deleteTodo }) => {
    const [edit, setEdit] = useState(false);

    return(
        <>
        {
        
        edit ? <EditTodoForm todo={todo} setEdit={setEdit} /> :
       
       <div className={todo.complete ? 'todo-row complete' : 'todo-row'}>
           
           <div onClick={() => completeTodo(todo.id)}>
                {todo.task}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className="delete-icon"/>
                <TiEdit 
                    onClick={() => setEdit(!edit)} 
                    className="edit-icon"
                />
            </div>
        </div>
}
        </>
    )
}

export default Todo
