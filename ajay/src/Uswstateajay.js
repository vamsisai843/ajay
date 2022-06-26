import React, { useState } from 'react'

const Uswstateajay = () => {

    const[counter,setCounter]=useState(8);

    const add=()=>{

        setCounter(counter+1);

        console.log(counter+1);
    }





  return (
    <div>
        {counter}

        <br/>
        <button onClick={add}>click me</button>



    </div>
  )
}

export default Uswstateajay