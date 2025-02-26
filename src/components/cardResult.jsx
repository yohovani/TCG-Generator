import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardResult() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Image src={props.src} thumbnail />
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tipo: {props.tipo}</ListGroup.Item>
        <ListGroup.Item>Descripcion: </ListGroup.Item>
        <ListGroup.Item>Vestibulum at {props.descripcion}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardResult;