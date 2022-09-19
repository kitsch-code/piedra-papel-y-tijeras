// Script agregar estrellas al azar y responsivamente
let space = document.querySelector('body');
let spaceW;
let spaceH;

function sizes() {
    spaceW = space.clientWidth;
    spaceH = space.clientHeight;
}

let starsContainer = document.getElementById('stars-container')
let numStars = 40;
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


// Script Game
var options = document.querySelectorAll('.option');
var choices = document.querySelectorAll('.choice');
var available = ['piedra', 'papel', 'tijeras'];
var random;
var compu = document.getElementById('compu-choice');
var compuChoice = new Image();
var urText = document.getElementById('urText');
var urImg = document.getElementById('urImg');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        reset();
        choice.classList.add('active');    
        urText.innerText = choice.dataset.name;
        urImg.src = 'img/' + choice.dataset.name + '.png';
        computerChoice();
        modal();
    });
});

function computerChoice() {
    random = Math.floor(Math.random() * (2 - 0 + 1));

    document.querySelector('h3').style.display = 'none';
    compu.classList.add('active');
    compuChoice.src = 'img/' + available[random] + '.png';
    compu.appendChild(compuChoice);
}

var closeModal = document.getElementById('close');
var modalWindow = document.getElementById('modal');
var itsText = document.getElementById('itsText');
var itsImg = document.getElementById('itsImg');
var verdict = document.getElementById('verdict');
function modal(){
    modalWindow.classList.add('active');
    itsText.innerText = available[random];
    itsImg.src = 'img/' + available[random] + '.png';

    var urChoice = urText.innerHTML;
    var itsChoice = itsText.innerHTML;
    console.log(urChoice, itsChoice);
    if (urChoice == itsChoice) {
        verdict.innerText = 'Señores, esto es empateee!!';
    }else if (
        urChoice == 'piedra' && itsChoice == 'papel' ||
        urChoice == 'papel' && itsChoice == 'tijeras' ||
        urChoice == 'tijeras' && itsChoice == 'piedra'
        ) {
        verdict.innerText = 'Eres papilla, suerte a la próxima';
    }else {
        verdict.innerText = 'Auch! me ganaste jugador humano';
    }

    closeModal.addEventListener('click', () => {
        modalWindow.classList.remove('active');
        reset();
    });
}

function reset(){
    for (i = 0; i < 4; i++){
        options[i].classList.remove('active');
    }    
    document.querySelector('h3').style.display = 'unset';
    compuChoice.src = '';
}