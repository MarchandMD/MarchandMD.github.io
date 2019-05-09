const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const increaseBtn = document.querySelector('#increaseBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');
const resetBtn = document.querySelector('#resetBtn');
const display = document.querySelector('#digits');
const breakTimer = document.querySelector('#breakTimer');

let studyTime = 1500;
let breakTime = 300;
let countingDown = false;


display.textContent = minutesAndSeconds(studyTime);
breakTimer.textContent = minutesAndSeconds(breakTime);


//Event Listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
increaseBtn.addEventListener('click', addMinute);
decreaseBtn.addEventListener('click', subtractMinute);
resetBtn.addEventListener('click', resetDisplay);

//Functions
function countDown() {
    countingDown = true;
    studyTime--;
    display.textContent = minutesAndSeconds(studyTime);
    if (studyTime > 0 && studyTime <= 5) {
        display.style.background = "red";
    } else {
        display.style.background = "none";
    }
    if (studyTime <= 0) {
        resetDisplay();
        startBreakTimer();
    }
};

function startTimer() {
    if (countingDown) return;
    timer = setInterval(countDown, 1000);
}

function stopTimer() {
    countingDown = false;
    clearInterval(timer);
};

function countDownBreak() {
    breakTime--;
    breakTimer.textContent = minutesAndSeconds(breakTime);
    console.log(breakTime);
    if (breakTime <= 0) {
        stopBreakTimer();
        startTimer();
        breakTime = 300;
        breakTimer.textContent = minutesAndSeconds(breakTime);
     }
}

function startBreakTimer() {
    timer = setInterval(countDownBreak, 1000);
}

function stopBreakTimer() {
    clearInterval(timer);
}


function addMinute() {
    if (studyTime < 2700) {
        studyTime += 60;
        display.textContent = minutesAndSeconds(studyTime);
    }
}

function subtractMinute() {
    if (studyTime > 300) {
        studyTime -= 60;
        display.textContent = minutesAndSeconds(studyTime);
    }
}

function resetDisplay() {
    studyTime = 1500;
    breakTime = 300;
    countingDown = false;
    display.textContent = minutesAndSeconds(studyTime);
    breakTimer.textContent = minutesAndSeconds(breakTime);
    clearInterval(timer);
    //return;
}

function minutesAndSeconds(int) {
    let minutes = Math.floor(int / 60);
    let seconds = int % 60;
    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
};