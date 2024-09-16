import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist'

function App() {
  
  const [open,setOpen] = useState(true)
  const Menu = [
    {title: "My Github" ,  src: 'github', link: "https://github.com/Ethics03"},
    {title: "My Linkedin" , src: "linkedin" , link: "https://www.linkedin.com/in/rachit-srivastava-3b764527a/"},
  ]

  


  const [todos,settodos] = useState([])
  const [todoValue,settodoValue] = useState('')

  function handleTodo(newTodo){
    const newTodoList = [...todos,newTodo]
    settodos(newTodoList)
    
  }

  function handleDelete(index){
    const newTodoList =   todos.filter((todo,Todoindex)=>{
        return Todoindex !== index
    })
    settodos(newTodoList)
  }

  function handleEdit(index){
    const valueToedit = todos[index]
    settodoValue(valueToedit)
    handleDelete(index)
  }
  return (
    <>
      
      <div className = 'flex'>
        <div className = {`${open ? 'w-72' :  'w-20'} duration-300 h-screen bg-blue-700 relative`}>
          <img 
          
          src = 'https://cdn-icons-png.flaticon.com/256/3916/3916837.png' 
          className = {`absolute cursor-pointer right-4 top-9 w-7 border-2 border-dark-purple rounded-full ${!open && "rotate-180"}`}
          onClick={(()=>setOpen(!open))}
          />
          <div className = 'flex gap-4 items-center'>
            <img src = "/checklist.png" 
            className= {`w-10 cursor-pointer duration-500`}/>
            <h1 className = {`text-white origin-left font-medium text-wl duration-300 ${!open && "scale-0"}`}>TODY</h1>
          </div>     
               <ul className= 'pt-6'>
                  {Menu.map((menu,index)=>{
                     return(

                      <li className = 'text-gray-300 text-sm p-2 flex items-center gap-2' key = {index}>
                        <img className = 'w-7'src= {`/${menu.src}.png`}/>
                        <a href = {`${menu.link}`} _blank className= {`${!open && 'scale-0'}`}>{menu.title}</a>
                        </li>
                     )
                  })}
               </ul>
        </div>
         


        {/* this is the home page */} 
        <div className = 'p-7 text-2xl font-semibold flex-1 h-screen'>
          <Todoinput  todoValue = {todoValue} settodoValue = {settodoValue} handleTodo = {handleTodo}/>
          <Todolist handleEdit ={handleEdit} handleDelete={handleDelete}  todos = {todos}/>
        </div>
        
     </div>
      
      

    </>
  )
}

export default App
