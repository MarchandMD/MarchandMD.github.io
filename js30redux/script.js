const squareOne = document.querySelector("#one");
const squareTwo = document.querySelector("#two");
const squareThree = document.querySelector("#three");
const squareFour = document.querySelector("#four");

const squares = document.querySelectorAll('.soundDiv');


window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const div = document.querySelector(`.soundDiv[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    div.classList.add('playing');
}

function removeStyle(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

squares.forEach(square => {
    square.addEventListener('transitionend', removeStyle)
});


