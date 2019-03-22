from PIL import Image
from pytesseract import image_to_string
a = image_to_string(Image.open('eex.jpg'))

from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")
def main():
    output=a
    return render_template('index.html',output=output)

if __name__ == "__main__":
    app.run()

