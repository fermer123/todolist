import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Form, Row } from 'react-bootstrap';
import css from './AddTodo.module.css';
export const AddTodo = (props) => {
  const [value, setValue] = useState('');

  const saveTodo = () => {
    return props.setTodo(
      [
        ...props.todo,
        {
          id: uuidv4(),
          title: value,
          status: true,
        },
      ],
      setValue(''),
    );
  };

  return (
    <Row>
      <Col className={css.addTodoForm}>
        <Form.Control
          size='sm'
          placeholder='Enter task'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={css.btn} variant='info' onClick={saveTodo}>
          Save
        </Button>
      </Col>
    </Row>
  );
};
