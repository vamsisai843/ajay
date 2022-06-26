import React from 'react'

const Map1 = () => {
    const arr=["vamsi","sai","kumar"];
    const filtered=arr.filter(name=>name.includes('k'));



  return (
    <div>{
        filtered.map(

            value=><li>{value}</li>
        )
        
        }
        arr


    </div>
  )
}

export default Map1