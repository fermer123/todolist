import { Col, Row } from 'react-bootstrap';
import css from './Header.module.css';

export const Header = () => {
  return (
    <Row>
      <Col>
        <div className={css.root}>Todo list</div>
      </Col>
    </Row>
  );
};
