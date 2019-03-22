from PIL import Image
from pytesseract import image_to_string
a = image_to_string(Image.open('online.jpg'))

