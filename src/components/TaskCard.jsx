import React from 'react'

const TaskCard = ({task,handleDelete}) => {
  return (
    <>
         <li 
        
        className={task.complete ? "completed" :"incomplete"}
       > <span>{task.id}-{task.name}</span>  
       <button className='delete' onClick={()=> handleDelete(task.id)}>Delete</button> </li>
    </>
  )
}

export  {TaskCard};
