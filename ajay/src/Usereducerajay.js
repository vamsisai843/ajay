import React, { useState } from 'react'

const Usereducerajay = () => {

    const[count,setCount]=useState(5);
    const[type,setType]=useState(true);



  return (
    <div>
        <h3>{count}</h3>

        <button onClick={()=>{setCount(count*3);setType(!type)}}> clickhere</button>

        {type && <p>this is type</p>}




    </div>
  )
}

export default Usereducerajay