import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

const ImageProcessor = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Cargar la imagen base
        const img = new Image();
        img.src = props.card; // Cambia a la ruta de tu imagen en public/
        await img.decode();

        // Definir tamaño del canvas
        canvas.width = img.width;
        canvas.height = img.height;

        // Dibujar la imagen base en el canvas
        ctx.drawImage(img, 0, 0);

        // Cargar la imagen a superponer
        const art = new Image();
        art.src = props.image; // Cambia a la ruta correcta
        await art.decode();

        // Redimensionar la imagen a 204px de ancho
        const baseWidth = 204;
        const wpercent = baseWidth / art.width;
        const hsize = Math.floor(art.height * wpercent);

        // Crear un canvas temporal para la imagen escalada
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        tempCanvas.width = baseWidth;
        tempCanvas.height = hsize;
        tempCtx.drawImage(art, 0, 0, baseWidth, hsize);

        // Crear un canvas para la imagen rotada
        const rotatedCanvas = document.createElement("canvas");
        rotatedCanvas.width = hsize;
        rotatedCanvas.height = baseWidth;
        const rotatedCtx = rotatedCanvas.getContext("2d");

        // Rotar 90 grados
        rotatedCtx.translate(hsize / 2, baseWidth / 2);
        rotatedCtx.rotate((90 * Math.PI) / 180);
        rotatedCtx.drawImage(tempCanvas, -baseWidth / 2, -hsize / 2);

        // Obtener píxeles de la imagen rotada
        const rotatedImageData = rotatedCtx.getImageData(0, 0, hsize, baseWidth);
        const originalImageData = ctx.getImageData(0, 0, img.width, img.height);
        const originalPixels = originalImageData.data;
        const rotatedPixels = rotatedImageData.data;

        // Aplicar píxeles a la imagen base
        for (let y = 35; y < 170; y++) {
          for (let x = 20; x < 224; x++) {
            const targetIndex = (y * img.width + x) * 4;
            const sourceIndex = ((y - 35) * hsize + (x - 20)) * 4;

            originalPixels[targetIndex] = rotatedPixels[sourceIndex];       // R
            originalPixels[targetIndex + 1] = rotatedPixels[sourceIndex + 1]; // G
            originalPixels[targetIndex + 2] = rotatedPixels[sourceIndex + 2]; // B
            originalPixels[targetIndex + 3] = rotatedPixels[sourceIndex + 3]; // A
          }
        }




        // Poner la imagen editada en el canvas
        ctx.putImageData(originalImageData, 0, 0);


                // Configurar el texto
      ctx.font = "italic 15px Arial";
      ctx.fillStyle = "white"; // Color del texto
      ctx.strokeStyle = "black"; // Borde del texto
      ctx.lineWidth = 3;
      // Posicionar el texto en el centro inferior
      const x = 50;
      const y = 25;

      // Dibujar borde del texto para que resalte
      ctx.strokeText(props.title, x, y);
      ctx.fillText(props.title, x, y);

        // Convertir a URL base64 y actualizar el estado
        setImageSrc(canvas.toDataURL("image/png"));

      } catch (error) {
        console.error("Error al procesar la imagen:", error);
      }
    };

    processImage();
  }, []);

  return (
    <Container fluid className="text-center">
      <h2>Imagen Procesada</h2>
      {imageSrc ? <img src={imageSrc} alt="Imagen procesada" className="img-fluid" /> : <br />}
    </Container>
  );
};

export default ImageProcessor;
