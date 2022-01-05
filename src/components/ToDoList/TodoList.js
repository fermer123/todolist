export const TodoList = (props) => {
  function deleteTodo() {
    console.log('delete');
  }
  console.log(props.todo);
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
