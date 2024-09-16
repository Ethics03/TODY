import React from 'react'
import { useState } from 'react'
function Todolist(props) {

  const {todos, handleDelete,handleEdit} = props

  return (
    <ul className = 'pt-6'>
      {todos.map((tod,index)=>{

        return(  
        <li className = 'p-2 flex items-center gap-2' key = {index}>
            <input readOnly className = 'bg-white w-full p-2 rounded-full' placeholder={`${tod}`}/>
            <button onClick= {()=>{
              handleEdit(index)
            }}>
            <img className = 'hover:grayscale'src = '/note.png'/>
              </button> 
            <button onClick = {()=>{
             handleDelete(index)
            }}>
            <img src = '/delete.png'/>
            </button>

           
          </li>
        )
      })}
    </ul>
  )
}

export default Todolist
