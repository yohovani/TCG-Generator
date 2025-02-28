import { useState, useEffect, useRef  } from 'react'
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
import { meta } from '@eslint/js';


function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    flex: "1"
    }

    // Estadps
    const [card_selection, setCard_selection] = useState(false);
    const [mostrarProcesador, setMostrarProcesador] = useState(false);
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [imgSrc, setImgSrc] = useState();
    const [title_card_select, setTitle_card_select] = useState();   
    const [bg_color, setBg_color] = useState();
    const [image_card, setImage_card] = useState()
    const [accor_usr_img, setAccor_usr_img] = useState(false)
    const [accord_result, setAccord_result] = useState(false)
    const [btn_card_select, setBtn_card_select] = useState(false)
    const [activeKey, setActiveKey] = useState("0"); // Inicia con el primer item abierto

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

    function card_select(e) {
      switch(e.target.value){
        case "planta":{
          setTitle_card_select("Tipo Planta")
          setImgSrc(planta)
          setCard_selection(planta)
          setBtn_card_select(true)
          setBg_color("#77bf00")
          break
        }
        case "fuego":{
          setTitle_card_select("Tipo Fuego")
          setImgSrc(fuego)
          setCard_selection(fuego)
          setBg_color("#de4711")
          break
        }
        case "agua":{
          setTitle_card_select("Tipo Agua")
          setImgSrc(agua)
          setCard_selection(agua)
          setBg_color("#33e0ff")
          break
        }
        case "electrico":{
          setTitle_card_select("Tipo Electrico")
          setImgSrc(electrico)
          setCard_selection(electrico)
          setBg_color("#fbeb00")
          break
        }
        case "normal":{
          setTitle_card_select("Tipo Normal")
          setBg_color("#ebebeb")
          setCard_selection(normal)
          setImgSrc(normal)
          break
        }
        case "psiquico":{
          setTitle_card_select("Tipo Psiquico")
          setImgSrc(psiquico)
          setCard_selection(psiquico)
          setBg_color("#b380b8")
          break
        }
        case "siniestro":{
          setTitle_card_select("Tipo Siniestro")
          setImgSrc(siniestro)
          setCard_selection(siniestro)
          setBg_color("#005666")
          break
        }
        case "metal":{
          setTitle_card_select("Tipo Metal")
          setImgSrc(metal)
          setCard_selection(metal)
          setBg_color("#9c979d")
          break
        }
        case "lucha":{
          setTitle_card_select("Tipo Lucha")
          setImgSrc(lucha)
          setCard_selection(lucha)
          setBg_color("#db8410")
          break
        }
        case "dragon":{
          setTitle_card_select("Tipo Dragon")
          setImgSrc(dragon)
          setCard_selection(dragon)
          setBg_color("#716b3b")
          break
        }
        case "hada":{
          setTitle_card_select("Tipo Hada")
          setBg_color("#eb00fd")
          setCard_selection(hada)
          setImgSrc(hada)
          break
        }
        default:{
          setBtn_card_select(false)
        }
      }
          
    }

    const generarCarta = () => {
      setMostrarProcesador(true); // Activa el componente
      setAccord_result(true)
      avanzarPaso("2")
    };

    function show_AccordionImgUsr () {
      setAccor_usr_img(true)
      avanzarPaso("1")
    }

    const avanzarPaso = (nextKey) => {
      setActiveKey(nextKey); // Mueve al siguiente paso
    };


  return (
    <Container fluid style={myStyle}>

      <Container fluid className='d-flex justify-content-center'>
          <Image src={banner} className="image-fullwidth"/>
      </Container>
      
      <hr />


      <Accordion activeKey={activeKey} onSelect={setActiveKey} flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Selecciona el tipo de Carta</Accordion.Header>
          <Accordion.Body>

            <Form.Select aria-label="Selecciona el tipo de Carta" id="card_select" onChange={card_select}>
              <option >Selecciona tu tipo de carta</option>
              <option value="planta">Tipo Planta</option>
              <option value="fuego">Tipo Fuego</option>
              <option value="agua">Tipo Agua</option>
              <option value="electrico">Tipo Electrico</option>
              <option value="normal">Tipo Normal</option>
              <option value="psiquico">Tipo Psiquico</option>
              <option value="siniestro">Tipo siniestro</option>
              <option value="metal">Tipo Metal</option>
              <option value="lucha">Tipo Lucha</option>
              <option value="dragon">Tipo Dragon</option>
              <option value="hada">Tipo Hada</option>
            </Form.Select>< br />

            <Container fluid className='d-flex justify-content-center'>
              <TCGCard src={imgSrc} title={title_card_select} color={bg_color} id="card"/>
            </Container>

            <br />
          <div className="d-grid gap-2">
              <Button className='animated-button' variant="primary" size="lg">Sorprendeme</Button>
          </div><br />
          <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={show_AccordionImgUsr} disabled={btn_card_select}>Continuar</Button>
          </div>
          </Accordion.Body>
        </Accordion.Item>

        { accor_usr_img && 

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
              <br />
              <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" onClick={generarCarta}>Generar Carta</Button>
              </div>
            </Accordion.Body>
          </Accordion.Item> 
        }

        { accord_result &&
          <Accordion.Item eventKey="2">
            <Accordion.Header>Aqui esta tu carta</Accordion.Header>
            <Accordion.Body>
              
              <Container fluid className='d-flex justify-content-center'>
                {mostrarProcesador && <ImageProcessor image={image_card} card={card_selection} />}
              </Container>
              <Button variant="primary" size="lg">Aceptar</Button>
            </Accordion.Body>
          </Accordion.Item>
        }


      </Accordion>

    </Container>
  )
}

export default App
