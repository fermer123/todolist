import React, { useState } from 'react';
import './App.css';
import { AddTodo } from './components/addToDo/AddTodo';
import { Header } from './components/header/Header';
import { TodoList } from './components/ToDoList/TodoList';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: 'first todo', status: true },
    { id: 2, title: 'second todo', status: true },
    { id: 3, title: 'first todo', status: false },
  ]);
  return (
    <div className='App'>
      <Header />
      <AddTodo />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
