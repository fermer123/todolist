import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { AddTodo } from './components/addToDo/AddTodo';
import { Header } from './components/header/Header';
import { TodoList } from './components/ToDoList/TodoList';

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
