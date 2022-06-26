import React, { useState } from 'react'
import Todos2 from './Todos2';

const Todo = () => {
    const[task,setTask]=useState("");
    const[todos,setTodos]=useState([]);

    const changeHandler= e =>{
        setTask(e.target.value);
    }
     const submitHandler= e=>{
         e.preventDefault();
         const newTodos= [...todos,task];
         setTodos(newTodos);
         setTask(""); 


     }

     const deleteHandler=(indexValue)=>{
         const newTodos =todos.filter((todos ,index)  => index !== indexValue);
           setTodos(newTodos);
     }
  return (
    <div>
        <center>

      <div className='card'>
     <div className='card-body'>
        <h5 className='card-title'>todo management</h5>

        <form onSubmit={submitHandler}>
            <input type="text" name="add" onChange={changeHandler}/>&nbsp;&nbsp;
            <input type="submit" value="add" name="add"/>
        </form>
        <Todos2  todolist={todos}  deleteHandler={deleteHandler} />



     </div>



 </div>
 </center>

    </div>
  )
}

export default Todo