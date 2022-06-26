import React, { useState } from 'react'

const Submit2 = () => {


    const[count,setCount]=useState({
        uname:" ",
        password:" "

    })

    const{uname,password}=count;
    const handler=e=>(
        setCount({...count,[e.target.name]:[e.target.value]})
    )
    const submithandler=e=>{
        e.preventdefault();
        console.log(count);
}
  return (




    <div> 
        <form onSubmit={submithandler}>
        <input type="text" value={uname} name="uname"
        onChange={handler}/>

        <input type="text" value={password} name="password"
        onChange={handler}/>
        <input type="submit" name="password"/>

        </form>



    </div>
  )
}

export default Submit2