var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("learn-slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); //Change image every 2 seconds
}

/*
function changeToPs() {
    document.getElementById("slideImage").src="assets/img/photoshop_screen.png";
}

function changeToAi() {
    document.getElementById("slideImage").src="assets/img/Ai-screenshot.png";
}
function changeToWhim() {
    document.getElementById("slideImage").src="assets/img/Whimsical-screenshot.png";
}
function changeToFigma() {
    document.getElementById("slideImage").src="assets/img/figma_screen.png";
}
function changeToFramerX() {
    document.getElementById("slideImage").src="assets/img/framer_screen.png";
}
function changeToJs() {
    document.getElementById("slideImage").src="assets/img/js_screen.png";
}
function changeToHtml() {
    document.getElementById("slideImage").src="assets/img/HTML-screenshot.png";
}
function changeToCss() {
    document.getElementById("slideImage").src="assets/img/Css-screenshot.png";
}*/