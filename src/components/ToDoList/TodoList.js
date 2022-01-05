export const TodoList = (props) => {
  const deleteTodo = (id) => {
    let newTodo = [...props.todo].filter((item) => item.id != id);
    props.setTodo(newTodo);
  };
  console.log(props);
  return (
    <div>
      {props.todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}> Delete</button>
        </div>
      ))}
    </div>
  );
};
