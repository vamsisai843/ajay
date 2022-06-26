import React, { useState } from 'react'

const Calculator = () => {
    const[input,setInput]=useState("");
    const [result,setResult]=useState(0);


    const handler=e=>{
        setInput(e.target.value);
    }



  return (
    <div>
        <input type="text"  value={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={()=>setResult(eval(input))}>result</button>

        {eval(input)}




    </div>
  )
}

export default Calculator