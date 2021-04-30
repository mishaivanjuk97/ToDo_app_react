import React from 'react';
import Todo from './Todo';

const Todos = ({todos, deleteTodo}) => {
   return (
      <div>
         {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
         ))}
      </div>
   )
}

export default Todos
