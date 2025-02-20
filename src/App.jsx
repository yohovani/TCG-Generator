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
import './App.css'
import Accordion from 'react-bootstrap/Accordion';

//Importaciòn de las cartas

import agua from './assets/images/cards/agua.png'
import dragon from './assets/images/cards/dragon.png'
import electrico from './assets/images/cards/electrico.png'
import fuego from './assets/images/cards/fuego.png'
import hada from './assets/images/cards/hada.png'
import lucha from './assets/images/cards/lucha.png'
import metal from './assets/images/cards/metal.png'
import normal from './assets/images/cards/normal.png'
import planta from './assets/images/cards/planta.png'
import psiquico from './assets/images/cards/psiquico.png'
import siniestro from './assets/images/cards/siniestro.png'


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

      <Container fluid className='d-flex justify-content-center'>
          <Image src={banner} className="image-fullwidth"/>
      </Container>
      
      <hr />


      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Selecciona el tipo de Carta</Accordion.Header>
          <Accordion.Body>
            <Row>
            <Col><TCGCard src={planta} title="Tipo Planta" color="success"/></Col>
            <Col><TCGCard src={agua} title="Tipo Agua" color="info"/></Col>
            <Col><TCGCard src={fuego} title="Tipo Fuego" color="danger"/></Col>
          </Row><br />
          <Row> 
            <Col><TCGCard src={electrico} title="Tipo Electrico" color="warning"/></Col>
            <Col><TCGCard src={normal} title="Tipo Normal" color="light"/></Col>
            <Col><TCGCard src={siniestro} title="Tipo siniestro" color="dark"/></Col>
          </Row>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Container>
  )
}

export default App
