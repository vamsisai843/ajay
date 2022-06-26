import React from 'react'

const Map = () => {

    const arr=["vamsi","vijay","kash"];
  return (
    <div>{
        arr.map(

            (value,index)=> <li>{value}</li>
        )
        
        }



    </div>
  )
}

export default Map