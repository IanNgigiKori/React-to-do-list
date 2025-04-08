import { useEffect, useState } from 'react'
import './styles.css'
import {NewToDoForm} from './NewToDoForm' 
import { ToDoList } from './ToDoList'

export default function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addToDo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewToDoForm onSubmit={addToDo}/>
    <h1 className='header'>Todo List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}