// Script agregar estrellas al azar y responsivamente
let space = document.querySelector('body');
let spaceW;
let spaceH;

function sizes() {
    spaceW = space.clientWidth;
    spaceH = space.clientHeight;
}

let starsContainer = document.getElementById('stars-container')
let numStars = 50;
let star;

function drawElements() {
    sizes();
    for(i = 1; i <= numStars; i++) {
        star = document.createElement('div');
        starsContainer.appendChild(star);
        star.classList.add('star');

        let x = Math.floor(Math.random() * ((spaceW - 20) - 1 + 1)) + 1;
        let y = Math.floor(Math.random() * ((spaceH - 20) - 1 + 1)) + 1;
        
        star.style.position = 'absolute';
        star.style.left = x + 'px';
        star.style.top = y + 'px';
    }
}

window.addEventListener('load', drawElements);
window.addEventListener('resize', function(){
    document.querySelectorAll('.star').forEach(e => e.remove());
    drawElements();
});


