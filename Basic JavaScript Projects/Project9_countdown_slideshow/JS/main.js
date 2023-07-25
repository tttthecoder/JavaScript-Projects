function countdown() {
    var seconds = document.getElementById('seconds').value;
    function tick() {
        seconds = seconds - 1;
        document.getElementById('timer').innerHTML = seconds;
        var time = setTimeout(tick, 1000)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time)
            document.getElementById('timer').innerHTML = '';
        }
    }
    tick()
}

// slideshow project. 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// this function is for showing the current slide.
function showSlides(n) {
  let i;
  // get the slides and dots objects from the html file.
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // reset the style for all the slides and all the dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // showing the current slide and dot. 
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}