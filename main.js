// Select all slides
const slides = document.querySelectorAll(".p-img");


//Loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
});