import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Todos from './components/Todos';
import ListHeader from './components/ListHeader';

function App() {
  const [todos, setTodos] = useState([])

  

  const addTodo = (input) => {
    const id = todos.map((todo) => todos.indexOf(todo))
    
    
    const todo = {
      id: id,
      body: input
    }
    
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    const filteredArr = todos.filter((todo) => todo.id !== id);

    setTodos(filteredArr);


  }
  
  
  return (
    <div className="container">
      <Header />
      <Input onAdd={addTodo}/>
      {todos.length ? <ListHeader /> : null}
      <Todos todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
