import React, { useState } from 'react'

const Usestate = () => {

    const[name,setName]=useState("I am going");
  return (
    <div>


        <h2> {name} </h2>

        <button onClick={()=> setName("it s working")}>touch me</button>

       
    </div>
  )
}

export default Usestate