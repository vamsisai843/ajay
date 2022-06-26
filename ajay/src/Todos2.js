import React from 'react'

const Todos2 = ({todolist,deleteHandler}) => {
  return (
      <div>
        {todolist.map((todos,index) =>
        <div key={index}>
            <h5>{todos} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>  
            </div>)
     }


    </div>
  )
}

export default Todos2