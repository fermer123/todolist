import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddTodo = (props) => {
  console.log(props);
  const [value, setValue] = useState('');

  const saveTodo = () => {
    return props.setTodo([
      ...props.todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
  };
  console.log(props);
  return (
    <div>
      <input
        placeholder='Enter task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
};
