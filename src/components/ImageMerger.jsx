import { useEffect, useRef } from "react";
import ex_full_art from "../assets/images/cards/ex_full_art.png"
//Importaciòn de Marcos
import marco_0 from "../assets/images/cards/Full_Art/Marcos/ex_0.png"
import marco_1 from "../assets/images/cards/Full_Art/Marcos/ex_1.png"
import marco_2 from "../assets/images/cards/Full_Art/Marcos/ex_2.png"
import marco_3 from "../assets/images/cards/Full_Art/Marcos/ex_3.png"
//Importacion de descripciones
import electrico_ex from "../assets/images/cards/Full_Art/descripciones/electrico_ex.png"
import psiquico_ex from "../assets/images/cards/Full_Art/descripciones/psiquico_ex.png"

export default function ImageMerger( props ) {
  const marcos = [marco_0, marco_1, marco_2, marco_3]
  const descripciones = [electrico_ex, psiquico_ex]

  const canvasRef = useRef(null);


  
  

  useEffect(() => {
    const mergeImages = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      // Cargar imagen de fondo
      const fondo = await loadImage(props.fondoUrl);
      canvas.width = 736;
      canvas.height = 1024;

      // Redimensionar y dibujar fondo
      ctx.drawImage(fondo, 0, 0, 736, 1024);

      // Cargar marco transparente
      const marco = await loadImage(marcos[Math.floor(Math.random() * marcos.length)]);

      // Dibujar marco transparente sobre el fondo
      ctx.drawImage(marco, 0, 0, 736, 1024);

      // Cargar marco transparente
      const descripcion = await loadImage(descripciones[Math.floor(Math.random() * descripciones.length)]);

      // Dibujar marco transparente sobre el fondo
      ctx.drawImage(descripcion, 0, 0, 736, 1024);


      // Configurar el texto
      ctx.font = "italic 40px Arial";
      ctx.fillStyle = "white"; // Color del texto
      ctx.strokeStyle = "black"; // Borde del texto
      ctx.lineWidth = 3;
      ctx.textAlign = "center";

      // Posicionar el texto en el centro inferior
      const x = 255;
      const y = 80;

      // Dibujar borde del texto para que resalte
      ctx.strokeText(props.title, x, y);
      ctx.fillText(props.title, x, y);
    };

    mergeImages();
  }, [props.fondoUrl, ex_full_art]);

  // Función para cargar imágenes como Promesas
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Evita problemas de CORS si es necesario
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  };

  return <canvas ref={canvasRef} />;
}
