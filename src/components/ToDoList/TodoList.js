import { useState } from 'react';

export const TodoList = (props) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  const deleteTodo = (id) => {
    let newTodo = [...props.todo].filter((item) => item.id !== id);
    props.setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...props.todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item; //возращает оставшиеся элементы массива
    });
    props.setTodo(newTodo);
  };

  const saveTodo = (id) => {
    let newTodo = [...props.todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    props.setTodo(newTodo);
    setEdit(null);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
    console.log(edit);
  };

  return (
    <div>
      {props.todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}> Delete</button>
              <button onClick={() => statusTodo(item.id)}> Close/Open</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
