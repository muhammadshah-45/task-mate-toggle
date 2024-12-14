import React, { useState } from 'react'
import { TaskCard } from './TaskCard';
import "../App.css"
const TaskList = () => {

    const [tasks,setTask] = useState([
        {id:3463,name:"Reon Deldhand ",complete:true},
        {id:7853,name:"Therhap  Rqurao",complete:false},
        {id:9663,name:"Kmahge  Orghan",complete:false},
        {id:2783,name:"Ulhamgha  Ewadoo",complete:true},

    ])
    const [show,setShow] = useState(true)
    function handleDelete (id){
       console.log(id)
       setTask(tasks.filter(task => 
        
        task.id !== id
     
    ))
    }
  return (
    <>
    
        
      <h1 className='text-3xl text-amber-600'>Task List</h1>
      <ul>
      <button className="trigger" onClick={()=> setShow(!show)}>Toggle</button>

        {show && tasks.map((task)=> 
          
          <TaskCard  key={task.id}  task = {task} handleDelete={handleDelete}></TaskCard>
         
       ) }
       
         
      </ul>
   
      
     
       </>
  )
}

export default TaskList;
