import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import css from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faEdit,
  faTrashAlt,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons';

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
        <div className={css.listItems} key={item.id}>
          {edit === item.id ? (
            <div>
              <Form.Control
                size='sm'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div className={item.status ? '' : css.close}>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <Button
                variant='info'
                className={css.btn}
                onClick={() => saveTodo(item.id)}
              >
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant='info'
                className={css.btn}
                onClick={() => deleteTodo(item.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
              <Button
                variant='info'
                className={css.btn}
                onClick={() => statusTodo(item.id)}
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}
              </Button>
              <Button
                variant='info'
                className={css.btn}
                onClick={() => editTodo(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
