import React from 'react'
import './todoTask.css';
type TodoProps = {
    todos:{
        
        taskName:string,
        deadline:number,
    }
    key:number,
    onCompleted(tasks:string):void 
}
export const TodoTask = ({todos,onCompleted}: TodoProps) => {

  const handleClick=(task:string)=>{
    onCompleted(task)
  }
  return (
    <div className="todo-info">
       <div className='container'>
         <span className="todo-name">
           {todos.taskName}
         </span>
         <span className="time">
           {todos.deadline} {todos.deadline === 1 ? 'day' : 'days'}
         </span>
         <button type="button" onClick={()=>handleClick(todos.taskName)}>X</button>
       </div>
    </div>
  )
}
