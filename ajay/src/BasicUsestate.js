import React, { useState } from 'react'

const BasicUsestate = () => {


    const[name,setName]=useState(0);


  return (
    <div>

        <h1>{name}</h1>
        <button onClick={()=>setName(name+2)}>hbedbq,d</button>


    </div>
  )
}

export default BasicUsestate