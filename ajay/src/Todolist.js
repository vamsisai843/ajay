import React, { useState } from 'react'

const Todolist = () => {

    const[task,setTask]=useState("");

    const changeHandle = e =>{
    setTask(e.target.value);
     }
     const submitHandler =e =>{
     e.preventDefault();
     console.log(task);
     }


  return (
      <div>
          <center>


    <div className='card'>
        <div className='card-body' >

            <h4 className='card-title'>  iam going</h4>
            <form onChange={submitHandler}>
                <input type="text" name="task"  value={task} onChange={changeHandle}/>
                <input type="submit" value="add" name="add" />


            </form>
           


            </div>
            
            
            </div> 

            </center  >

            </div>


    
  )
}

export default Todolist