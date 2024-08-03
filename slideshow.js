var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index and reset if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide and update dots
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";

    // Auto advance slides every 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to manually move to the previous or next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}