import { useState } from 'react';

export const TodoList = (props) => {
  const [edit, setEdit] = useState(null);

  const deleteTodo = (id) => {
    let newTodo = [...props.todo].filter((item) => item.id !== id);
    props.setTodo(newTodo);
  };

  let statusTodo = (id) => {
    let newTodo = [...props.todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item; //возращает оставшиеся элементы массива
    });
    props.setTodo(newTodo);
  };

  const editTodo = (id) => {
    setEdit(id);
  };

  return (
    <div>
      {props.todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input />
              <button>Save</button>
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}> Delete</button>
          <button onClick={() => statusTodo(item.id)}> Close/Open</button>
          <button onClick={() => editTodo(item.id)}> Edit</button>
        </div>
      ))}
    </div>
  );
};
