import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import banner from "./assets/images/poke_banner.png"
import Navbar from 'react-bootstrap/Navbar';
import TCGCard from './components/TCGcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from './assets/images/background.jpg'

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    flex: "1"
    }
  return (
    <Container fluid style={myStyle}>
      <Navbar className="bg-body-tertiary">
          <Container fluid>
          <Image src={banner} />
          </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
        </Row><br />
        <Row>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
          <Col><TCGCard /></Col>
        </Row>
        
      </Container>

    </Container>
  )
}

export default App
