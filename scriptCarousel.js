// carousel for the categories section
// reference: https://www.youtube.com/watch?v=gBzsE0oieio
    // Kevin Powell's tutorial is awesome as explaining how this works

const track = document.querySelector('.categoryGallery');
const slides = Array.from(track.children);
    // this is storing all the li's as an array

// buttons
const nextButton = document.querySelector('.btnNext');
const prevButton = document.querySelector('.btnPrev');

// declare the width of the track
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// slides currently overlapping in one place, arrange them next to one another
    // slides[0].style.left = slideWidth * 0 + 'px';
    // slides[1].style.left = slideWidth * 1 + 'px';

// refactor for a lot of slides/cards
const setSlidePosition = function(slide, index){
    slide.style.left = (slideWidth * index) + 'px';
};

slides.forEach(setSlidePosition);

// function for how much to move
const moveToSlide = function(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // to keep it moving after the first one, move the .currentItem class to another li
    currentSlide.classList.remove('currentItem');
    targetSlide.classList.add('currentItem');
}

// click left, move left
prevButton.addEventListener('click', function(){
    // what slide are we on?
    const currentSlide = track.querySelector('.currentItem');
    // define where to go
    const prevSlide = currentSlide.previousElementSibling;
    // how much to move
    moveToSlide(track, currentSlide, prevSlide);
})

// click right, move right; 
nextButton.addEventListener('click', function() {
    // what slide are we on?
    const currentSlide = track.querySelector('.currentItem');
    // define next slide
    const nextSlide = currentSlide.nextElementSibling;
    // how much to move
    moveToSlide(track, currentSlide, nextSlide);
})