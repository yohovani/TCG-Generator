from PIL import Image, ImageShow

ruta_pokemon = "C:/Users/yohov/Documents/proyectos/TCG-Generator/src/assets/images/cards/ex_full_art.png"
ruta_imagen = "C:/Users/yohov/OneDrive/Documents/test.jpg"


#Recorrer y reemplazar pixel por pixel
img = Image.open(ruta_pokemon)
img = img.convert("RGBA")
pixdata = img.load()

art = Image.open(ruta_imagen)
art = art.resize((736, 1024), Image.Resampling.LANCZOS)
art = art.convert("RGBA")
pixtest = art.load()



for y in range(0,736):
    for x in range(0,1024):
        r, g, b, a = pixdata[y,x]
        if a != 0:
            pixtest[y, x] = pixdata[y, x]
art.show()


#Superponer imagenes directamente
# Cargar ambas imágenes
fondo = Image.open(ruta_imagen).convert("RGBA")
fondo = fondo.resize((736, 1024), Image.Resampling.LANCZOS)
imagen_transparente = Image.open(ruta_pokemon).convert("RGBA")

# Pegar la imagen transparente sobre el fondo usando su canal alfa como máscara
fondo.paste(imagen_transparente, (0, 0), imagen_transparente)

# Guardar la imagen combinada
fondo.show()
