from PIL import Image, ImageShow

img = Image.open("C:/Users/yohov/OneDrive/Desktop/pokemon/BWP_ES_BW59.png")
img = img.convert("RGBA")

pixdata = img.load()

#C:/Users/yohov/OneDrive/Desktop/pokemon/BWP_ES_BW59.png


for y in range(35,170):
    for x in range(20,224):
        pixdata[x, y] = (0, 0, 0, 255)
img.show()