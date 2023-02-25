// slideoutnav
// reference https://www.youtube.com/watch?v=OFKBep95lb4

// query button icons and the nav
const menuOpenBtn = document.querySelector('.menuIcon');
const menuCloseBtn = document.querySelector('.buttonContainer')
const slideOutNav = document.querySelector('.slideOutNav');

// when clicking open icon, nav will come out from the side
menuOpenBtn.addEventListener('click', function(){
    slideOutNav.style.left = '0px';
})

// when clicking the close button, nav will return to where it was (out of frame)
menuCloseBtn.addEventListener('click', function() {
    slideOutNav.style.left = '-500px';
})