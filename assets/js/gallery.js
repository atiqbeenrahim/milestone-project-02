var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var imageIndexBeingShown = 0;
nextSlide.onclick = function () {
    changeImage(+1);
};
prevSlide.onclick = function () {
    changeImage(-1);
};
function changeImage(changeDirectionValue) {
    imageIndexBeingShown += changeDirectionValue;
    if (imageIndexBeingShown == totalSlides) {
        imageIndexBeingShown = 0;
    } else if (imageIndexBeingShown < 0) {
        imageIndexBeingShown = totalSlides - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[imageIndexBeingShown].classList.add("active");
}

setInterval(function () {
    changeImage(+1);
}, 4000);
