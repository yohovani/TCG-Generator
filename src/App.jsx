import { useState, useEffect } from 'react'
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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardResult from './components/cardResult';
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



    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const [imgSrc, setImgSrc] = useState("");

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    function handleSubmit(e) {
      setImgSrc(e.target.value)
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

            <Form.Select aria-label="Selecciona el tipo de Carta" id="card_select" onChange={handleSubmit}>
              <option value={planta}>Tipo Planta</option>
              <option value={fuego}>Tipo Fuego</option>
              <option value={agua}>Tipo Agua</option>
              <option value={electrico}>Tipo Electrico</option>
              <option value={normal}>Tipo Normal</option>
              <option value={psiquico}>Tipo Psiquico</option>
              <option value={siniestro}>Tipo siniestro</option>
              <option value={metal}>Tipo Metal</option>
              <option value={lucha}>Tipo Lucha</option>
              <option value={dragon}>Tipo Dragon</option>
              <option value={hada}>Tipo Hada</option>
            </Form.Select>< br />

            <Container fluid className='d-flex justify-content-center'>
              <TCGCard src={imgSrc} title="Tipo Planta" color="success" id="card"/>
            </Container>

            <br />
          <div className="d-grid gap-2">
              <Button variant="primary" size="lg">Sorprendeme</Button>
          </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Selecciona tu foto</Accordion.Header>
          <Accordion.Body>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Selecciona tu imagen favorita</Form.Label>
              <Form.Control type="file" size="lg" onChange={onSelectFile}/>
            </Form.Group>
            <Container fluid className='d-flex justify-content-center'>
              {selectedFile &&  <Image src={preview} thumbnail className='image-preview'/> }
            </Container>
            <Button variant="primary" size="lg">Aceptar</Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Aqui esta tu carta</Accordion.Header>
          <Accordion.Body>
            
            <Container fluid className='d-flex justify-content-center'>
              
            </Container>
            <Button variant="primary" size="lg">Aceptar</Button>
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>

    </Container>
  )
}

export default App
