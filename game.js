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


// Script Game
var options = document.querySelectorAll('.option');
var choices = document.querySelectorAll('.choice');
var available = ['piedra', 'papel', 'tijeras'];
var random;
var compu = document.getElementById('compu-choice');
var compuChoice = new Image();
var userTxt = document.getElementById('userText');
var userImg = document.getElementById('userImg');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        reset();
        choice.classList.add('active');    
        userTxt.innerText = choice.dataset.name;
        userImg.src = 'img/' + choice.dataset.name + '.png';
        computerChoice();
        game();
    });
});

function computerChoice() {
    random = Math.floor(Math.random() * (2 - 0 + 1));

    document.querySelector('h3').style.display = 'none';
    compu.classList.add('active');
    compuChoice.src = 'img/' + available[random] + '.png';
    compu.appendChild(compuChoice);
}

var itsScore = 0;
var userScore = 0;
var uScore = document.getElementById('userScore');
var iScore = document.getElementById('itsScore')
var itsScoreTxt = document.getElementById('itsScore');
var floatWindow = document.getElementById('floating');
var itsTxt = document.getElementById('itsText');
var itsImg = document.getElementById('itsImg');
var verdict = document.getElementById('verdict');
var playAgain = document.getElementById('again');

function game(){
    floatWindow.classList.add('active');
    itsTxt.innerText = available[random];
    itsImg.src = 'img/' + available[random] + '.png';

    var userChoice = userText.innerHTML;
    var itsChoice = itsTxt.innerHTML;
    if (userChoice == itsChoice) {
        verdict.innerText = 'Señores, esto es empateee!!';
    }else if (
        userChoice == 'piedra' && itsChoice == 'papel' ||
        userChoice == 'papel' && itsChoice == 'tijeras' ||
        userChoice == 'tijeras' && itsChoice == 'piedra'
        ) {
        verdict.innerText = 'Eres papilla, suerte a la próxima';
        itsScore += 1;
        iScore.innerText = itsScore;
    }else {
        verdict.innerText = 'Auch!, eso dolió, no ganarás de nuevo';
        userScore += 1;
        uScore.innerText = userScore;
    }

    if (userScore == 3) {
        verdict.innerText = 'Felicidades! ganaste el juego... ¿revancha?';
        playAgain.classList.remove('fa-xmark');
        playAgain.classList.add('fa-rotate-right');
    }else if (itsScore == 3) {
        verdict.innerText = 'Muajaja, sabía que podría vencerte, juguemos de nuevo';
        playAgain.classList.remove('fa-xmark');
        playAgain.classList.add('fa-rotate-right');
    }

    playAgain.addEventListener('click', () => {
        floatWindow.classList.remove('active');
        setTimeout(function(){
            reset();
        }, 800);
        if (playAgain.classList.contains('fa-rotate-right')) {
            restart();
        }
    });
}

function reset(){
    for (i = 0; i < 4; i++){
        options[i].classList.remove('active');
    }    
    document.querySelector('h3').style.display = 'unset';
    compuChoice.src = '';
}

function restart() {
    setTimeout(function(){
        iScore.innerText = 0;
        uScore.innerText = 0;
        userScore = 0;
        itsScore = 0;
        playAgain.classList.remove('fa-rotate-right');
        playAgain.classList.add('fa-xmark');
    }, 800);
}