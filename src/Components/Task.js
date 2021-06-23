import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task =({task,onDelete,reminder})=>{
    return(
       <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>reminder(task.text)}>
           <h3>{task.text}<FaTimes style={{cursor:"pointer"}} onClick={()=>onDelete(task.text)}/></h3>
           <h4>{task.day}</h4>
       </div> 
    )
}

export default Task