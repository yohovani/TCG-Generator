import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function TCGCard(props) {
    return (
        <Card style={{ width: '18rem' }} bg={props.color}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Image src={props.src} thumbnail />
            </Card.Body>
        </Card>
    )
}

export default TCGCard