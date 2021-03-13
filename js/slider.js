let timer;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(value) {
  showSlides(slideIndex = value);
}

function showSlides(n) {
  let p = 0;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot-button");

  if (n > slides.length){
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (p = 0; p < slides.length; p = p + 1) {
      slides[p].style.display = "none";
  }

  for (p = 0; p < dots.length; p = p + 1) {
      dots[p].className = dots[p].className.replace("current", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " current";

  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 2000);
}
