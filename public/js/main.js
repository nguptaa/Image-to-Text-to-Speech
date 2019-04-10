// img-text-tesseract
let img = new Image()
img.src = document.getElementById("ml").getAttribute("src")

img.onload = function () {
    console.log("loaded...", "$$$$");
    Tesseract.recognize(img).progress((progress) => {
        if (progress.status === "recognizing text") {
            $('#progress').text(progress.progress * 100 + "%");
        }
    }).then((result) => {
        console.log(result, "$$$$");
        $('#result').text(result.text);
        $('#speak').html('<a class="click" onclick="playsound();"><i class="fas fa-volume-up fa-4x"></i></a>');
    })
}
function playsound() {
    var node = document.getElementById('result'),
        textContent = node.textContent;
    responsiveVoice.speak(textContent);
}