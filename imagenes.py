from PIL import Image, ImageShow

ruta_pokemon = "C:/Users/yohov/OneDrive/Desktop/pokemon/BWP_ES_BW59.png"
ruta_imagen = "C:/Users/yohov/OneDrive/Desktop/pokemon/test.jpg"

img = Image.open(ruta_pokemon)
img = img.convert("RGBA")

art = Image.open(ruta_imagen)
pixdata = img.load()

base_width = 204

wpercent = (base_width / float(art.size[0]))
hsize = int((float(art.size[1]) * float(wpercent)))
art = art.resize((base_width, hsize), Image.Resampling.LANCZOS)

art = art.convert("RGBA")
art = art.rotate(90)
pixtest = art.load()



for y in range(35,170):
    for x in range(20,224):
        pixdata[x, y] = pixtest[x-20, y]
img.show()