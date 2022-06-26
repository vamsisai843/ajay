import React, { useState } from 'react'

const Onchange2 = () => {

    const [count,setCont]=useState("");

    const handler=f=>{
        setCont(f.target.value);
    }



  return (
    <div>  
        <input type="text" placeholder='user' value={count} name="count"
        onChange={handler}/>


        <h3>{count}</h3>



    </div>
  )
}

export default Onchange2