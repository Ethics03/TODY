import React from 'react'
import { useState} from 'react'
function Todoinput(props) {
  
  const {handleTodo,todoValue,settodoValue} = props;


  
  const handleChange = (event)=>{
    settodoValue(event.target.value);
  }

  return (
    <header>
        <div className = 'flex gap-2 justify-center items-center h-[10vh] font-semibold m-2'>
        <input type = 'text' value={todoValue} onChange={handleChange} className = 'rounded-3xl m-2 p-3 w-full '  placeholder = "Enter Todo.."/>
        <button onClick = {()=>{
          handleTodo(todoValue)
          settodoValue('')
        }}className ='bg-blue-400 rounded-full p-1 w-20'>Add</button>
        </div>
    </header>
  )
}

export default Todoinput