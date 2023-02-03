// slideoutnav
// reference https://www.youtube.com/watch?v=OFKBep95lb4

const menuOpenBtn = document.querySelector('.menuIcon');
const menuCloseBtn = document.querySelector('.buttonContainer')
const slideOutNav = document.querySelector('.slideOutNav');

menuOpenBtn.addEventListener('click', function(){
    slideOutNav.style.left = '0px';
})

menuCloseBtn.addEventListener('click', function() {
    slideOutNav.style.left = '-500px';
})