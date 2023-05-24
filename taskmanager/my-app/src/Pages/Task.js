import React from 'react'
import { useState } from 'react'

const Task = ({setTasks}) => {
    const [task,setTask]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(task==="")return alert("Please enter a task")

        const newTask={
            id:new Date().getTime().toString(),
            task:task,
        }
        setTasks((tasks)=>{
return[...tasks,newTask]
        })
        setTask("")
        }
    
  return (
    <div>
        <form>
    <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
    <button onClick={handleSubmit}>Add Task</button>
   </form>
    </div>
  )
}

export default Task