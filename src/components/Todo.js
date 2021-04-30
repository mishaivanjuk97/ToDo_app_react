import React from 'react'

const Task = ({todo, deleteTodo}) => {
   
   return (
      <div>
         <p>{todo.body}<i className="fas fa-times remove" onClick={() => deleteTodo(todo.id)}></i></p>
      </div>
   )
}

export default Task
