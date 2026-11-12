import React from 'react'
import {useState} from 'react'

function Todo() {
    const [task, settask]=useState("");
    const [tasks, settasks] = useState([]);

    function addTask(){
        if(task.trim()===""){
            return;
        }
        settasks((elem)=>[...elem,task]);
        settask("");
    }
  return (
    <div>
      <h2>MY TODO LIST</h2>
      <input type="text" value={task} placeholder="Enter a task" onChange={(event)=> settask(event.target.value)}/>
      <button onClick={addTask}>Add a task</button>
      <ul>
        {tasks.map((item,index)=>(<li key={index}>{item} <button onClick={()=>{
            settasks(tasks.filter((_, i)=>i!==index));}}>delete</button>
        </li>))}
        
      </ul>
    </div>
  )
}

export default Todo
