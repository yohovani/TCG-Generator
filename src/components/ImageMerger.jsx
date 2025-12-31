import { useEffect, useRef, useMemo} from "react";
import ex_full_art from "../assets/images/cards/ex_full_art.png"
//Importaciòn de Marcos
import marco_0 from "../assets/images/cards/Full_Art/Marcos/ex_0.png"
import marco_1 from "../assets/images/cards/Full_Art/Marcos/ex_1.png"
import marco_2 from "../assets/images/cards/Full_Art/Marcos/ex_2.png"
import marco_3 from "../assets/images/cards/Full_Art/Marcos/ex_3.png"
//Importacion de descripciones
import electrico_ex from "../assets/images/cards/Full_Art/descripciones/electrico_ex.png"
import psiquico_ex from "../assets/images/cards/Full_Art/descripciones/psiquico_ex.png"
import agua_ex from "../assets/images/cards/Full_Art/descripciones/agua_ex.png"
import fuego_ex from "../assets/images/cards/Full_Art/descripciones/fuego_ex.png"
import lucha_ex from "../assets/images/cards/Full_Art/descripciones/lucha_ex.png"
import planta_ex from "../assets/images/cards/Full_Art/descripciones/planta_ex.png"
import siniestro_ex from "../assets/images/cards/Full_Art/descripciones/siniestro_ex.png"
import normal_ex from "../assets/images/cards/Full_Art/descripciones/normal_ex.png"
//Importacion de particulas
import p1 from "../assets/images/cards/Full_Art/particulas/1.png"
import p2 from "../assets/images/cards/Full_Art/particulas/2.png"

export default function ImageMerger( props ) {
  const marcos = [marco_0, marco_1, marco_2, marco_3]
  const descripciones = [electrico_ex, psiquico_ex, agua_ex, fuego_ex, lucha_ex, planta_ex, siniestro_ex, normal_ex]
  const particulas = [p1,p2]

  const canvasRef = useRef(null);
  // 1. Fijamos los índices aleatorios para que no cambien en el doble render de React
  const aleatorios = useMemo(() => ({
    particula: Math.floor(Math.random() * particulas.length),
    marco: Math.floor(Math.random() * marcos.length),
    descripcion: Math.floor(Math.random() * descripciones.length)
  }), [props.fondoUrl]); // Se recalculan solo si cambia el fondo o cuando tú decidas

  useEffect(() => {
    let isCancelled = false; // Para evitar fugas de memoria si el componente se desmonta
    const mergeImages = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      // 2. IMPORTANTE: Limpiar el canvas antes de empezar a dibujar
      ctx.clearRect(0, 0, 736, 1024);
      canvas.width = 736;
      canvas.height = 1024;

      try {
        // Cargar todas las imágenes necesarias
        const [imgFondo, imgParticula, imgMarco, imgDescripcion] = await Promise.all([
          loadImage(props.fondoUrl),
          loadImage(particulas[aleatorios.particula]),
          loadImage(marcos[aleatorios.marco]),
          loadImage(descripciones[aleatorios.descripcion])
        ]);

        // Si el componente se desmontó mientras cargaban, no dibujamos
        if (isCancelled) return;

        // 3. Dibujar en orden de capas
        ctx.drawImage(imgFondo, 0, 0, 736, 1024);
        ctx.drawImage(imgParticula, 0, 0, 736, 1024);
        ctx.drawImage(imgMarco, 0, 0, 736, 1024);
        ctx.drawImage(imgDescripcion, 0, 0, 736, 1024);

        // Configurar y dibujar el texto
        ctx.font = "italic 40px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.textAlign = "center";

        const x = 255;
        const y = 80;
        ctx.strokeText(props.title, x, y);
        ctx.fillText(props.title, x, y);

      } catch (error) {
        console.error("Error al fusionar imágenes:", error);
      }
    };

    mergeImages();
    return () => { isCancelled = true; }; // Limpieza
  }, [props.fondoUrl, props.title, aleatorios]); // Dependencias claras

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
