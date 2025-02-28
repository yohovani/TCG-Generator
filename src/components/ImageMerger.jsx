import { useEffect, useRef } from "react";
import ex_full_art from "../assets/images/cards/ex_full_art.png"
export default function ImageMerger( props ) {
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

      // Cargar imagen transparente
      const imagenTransparente = await loadImage(ex_full_art);

      // Dibujar la imagen transparente sobre el fondo
      ctx.drawImage(imagenTransparente, 0, 0, 736, 1024);
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
