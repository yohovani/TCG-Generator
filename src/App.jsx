import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import banner from "./assets/images/poke_banner.png"
import TCGCard from './components/TCGcard';
import background from './assets/images/background.jpg'
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImageProcessor from './components/ImageProcessor';
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



    const [mostrarProcesador, setMostrarProcesador] = useState(false);

    const generarCarta = () => {
      setMostrarProcesador(true); // Activa el componente
    };

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const [imgSrc, setImgSrc] = useState();
    const [title_card_select, setTitle_card_select] = useState();
    
    const [bg_color, setBg_color] = useState();
    const [image_card, setImage_card] = useState()
    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setImage_card(objectUrl)
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
      console.log(e.target.value)
      switch(e.target.value){
        case "/TCG-Generator/src/assets/images/cards/planta.png":{
          setTitle_card_select("Tipo Planta")
          setImgSrc(planta)
          setBg_color("#77bf00")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/fuego.png":{
          setTitle_card_select("Tipo Fuego")
          setImgSrc(fuego)
          setBg_color("#de4711")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/agua.png":{
          setTitle_card_select("Tipo Agua")
          setImgSrc(agua)
          setBg_color("#33e0ff")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/electrico.png":{
          setTitle_card_select("Tipo Electrico")
          setImgSrc(electrico)
          setBg_color("#fbeb00")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/normal.png":{
          setTitle_card_select("Tipo Normal")
          setBg_color("#ebebeb")
          setImgSrc(normal)
          break
        }
        case "/TCG-Generator/src/assets/images/cards/psiquico.png":{
          setTitle_card_select("Tipo Psiquico")
          setImgSrc(psiquico)
          setBg_color("#b380b8")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/siniestro.png":{
          setTitle_card_select("Tipo Siniestro")
          setImgSrc(siniestro)
          setBg_color("#005666")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/metal.png":{
          setTitle_card_select("Tipo Metal")
          setImgSrc(metal)
          setBg_color("#9c979d")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/lucha.png":{
          setTitle_card_select("Tipo Lucha")
          setImgSrc(lucha)
          setBg_color("#db8410")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/dragon.png":{
          setTitle_card_select("Tipo Dragon")
          setImgSrc(dragon)
          setBg_color("#716b3b")
          break
        }
        case "/TCG-Generator/src/assets/images/cards/hada.png":{
          setTitle_card_select("Tipo Hada")
          setBg_color("#eb00fd")
          setImgSrc(hada)
          break
        }
      }
      
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
              <option >Selecciona tu tipo de carta</option>
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
              <TCGCard src={imgSrc} title={title_card_select} color={bg_color} id="card"/>
            </Container>

            <br />
          <div className="d-grid gap-2">
              <Button className='animated-button' variant="primary" size="lg">Sorprendeme</Button>
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
            <Button variant="primary" size="lg" onClick={generarCarta}>Aceptar</Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Aqui esta tu carta</Accordion.Header>
          <Accordion.Body>
            
            <Container fluid className='d-flex justify-content-center'>
              {mostrarProcesador && <ImageProcessor image={image_card} card={agua} />}
            </Container>
            <Button variant="primary" size="lg">Aceptar</Button>
          </Accordion.Body>
        </Accordion.Item>


      </Accordion>

    </Container>
  )
}

export default App
