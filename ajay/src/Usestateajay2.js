import React, { useState } from 'react'

const Usestateajay2 = () => {

    const[input,setInput]=useState("iam vamsi");

    const onChange=(event)=>{
        setInput(event.target.value);



    }
  return (
    <div>
        <input placeholder='ghjkjkbjbbh'  onChange={onChange} />

        {input}

    </div>
  )
}

export default Usestateajay2