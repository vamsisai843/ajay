import React, { useEffect, useState } from 'react'

const Useeffect = () => {


    const[name,setName]=useState(0);

    useEffect(()=> console.log(name+2),[name]);




  return (
    <div>

        <button onClick={()=> setName(name+2)}> clickHere</button>

        <h2>{name}</h2>



    </div>
  )
}

export default Useeffect