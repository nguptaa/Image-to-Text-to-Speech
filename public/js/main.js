

(function ($) {
"use strict"; // Start of use strict

// Closes the sidebar menu
$(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
});

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});


 $('#sidebar-wrapper .js-scroll-trigger').click(function () {
     $("#sidebar-wrapper").removeClass("active");
     $(".menu-toggle").removeClass("active");
     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
 });


})(jQuery);

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
    })
}