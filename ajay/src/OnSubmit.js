import React, { useState } from 'react'

const OnSubmit = () => {


    const[count,setCount]=useState({
        name:"",
        password:""
    })

    const{name,password}=count;

    const handler= e => {
        setCount({...count,[e.target.name]:[e.taget.value]})

       
    }

    const submithandler=e =>{

        e.preventdefault();
        console.log(count);
    }




  return (
    <div> 
        <form onSubmit={submithandler}>

        <input type="text" value={name} name="name"
        onChange={handler}/>
        <input type="text" value={password} name="password"
        onChange={handler}/>

        <input type="submit" name="submit"/>

        </form>

        <h3>{count}</h3>



    </div>
  )
}

export default OnSubmit