import { ToDoItem } from "./ToDoItem"

export function ToDoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return <ToDoItem completed={todo.completed} id={todo.id} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      })}
    </ul>
    )
}