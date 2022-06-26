import React, { useEffect } from 'react'

const Fetch = () => {

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(
            Response =>Response.json()
        ).then(json=>console.log("json"))

    },[])


    




  return (
    <div>
        Hellowi





    </div>
  )
}

export default Fetch