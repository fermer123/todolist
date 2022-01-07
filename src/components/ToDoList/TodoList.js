import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap';
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
  const [filter, setFilter] = useState(props.todo);
  useEffect(() => {
    setFilter(props.todo);
  }, [props.todo]);

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
    setEdit(id); // Записываем в edit наш Id
    setValue(title);
    console.log(edit);
  };

  const todoFilter = (status) => {
    if (status === 'all') {
      setFilter(props.todo);
    } else {
      let newTodo = [...props.todo].filter((item) => item.status === status);
      setFilter(newTodo);
    }
  };

  return (
    <div>
      <Row>
        <Col className={css.filter}>
          <ButtonGroup className={css.btns} aria-label='Basic example'>
            <Button onClick={() => todoFilter('all')} size='sm'>
              All
            </Button>
            <Button onClick={() => todoFilter(true)} size='sm'>
              Open
            </Button>
            <Button onClick={() => todoFilter(false)} size='sm'>
              Close
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {filter.map((item) => (
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
