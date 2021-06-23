import Header from "./Components/Header"
import Tasks from './Components/Tasks'
import {useState} from 'react'
import AddTask from './Components/AddTask'

    function App() {

const deleteTask=(id)=>{
setTask(tasks.filter((task)=>task.text!==id))
}

const remindertask=(name)=>{
setTask(tasks.map((task)=>task.text===name?{...task,reminder:!task.reminder}: task))
}

const addTask=(task)=>{
console.log(task)
const id=Math.floor(Math.random()*1000)+1
console.log(id)
const newTask={id,...task}
setTask([...tasks,newTask])
}


const [showAddTask,setShowAddTask]=useState(false)

const [tasks,setTask]=useState([
        {
          id: 1,
          text:'Wolverine',
          day:'Monday',
          reminder: false, 
        },
        {
          id: 2,
          text:'Spider-Man',
          day:'Tuesday',
          reminder: false,
        },
        {
          id: 3,
          text:'Thor',
          day:'Thorsday',
          reminder:false,
        }
    ])


      // const x= false
      return (
        <div className="container">
        <Header color='blue' 
        showAdd={showAddTask}
        onAdd={()=>setShowAddTask(!showAddTask)}
        />
       {showAddTask && <AddTask onAdd={addTask}/>}
     {/* <>{x ? 'Yes': 'No'}</> */}
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} reminder={remindertask}/>):("No Tasks")
      }
        </div>
      );
    }
    const headingStyle={
      color:'green',
      
   }

export default App;
