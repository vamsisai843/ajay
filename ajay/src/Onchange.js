import React, { useState } from 'react'

const Onchange = () => {


const[count,setCount]=useState(" ");

const handler=e=>{
    setCount(e.target.value);

}






  return (
    <div>
        <input type="text" placeholder='username' value={count} name="count"

        onChange={handler}/>

        <h1>{count}</h1>



    </div>
  )
}

export default Onchange