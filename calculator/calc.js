//!NEXT ISSUE: HITTING OPERATOR BUTTON ON KEYPAD RESULTS IN CALCULATE FUNCTION AND SCREEN OUTPUT


const buttons = document.querySelectorAll('.button');
const numericBtns = document.querySelectorAll('.numeric');
const screen = document.querySelector('#screen');
const operatorBtns = document.querySelectorAll('.operator');
const enterBtn = document.querySelector('#enter');
const clearBtn = document.querySelector('#clear');
let digits = [];
let operands = [];
let result;
let operation;

buttons.forEach(button => {

    button.addEventListener('click', () => {
        button.classList.add('shake');
        setTimeout(function () {
            button.classList.remove('shake')
        }, 100);
    })
});

clearBtn.addEventListener('click', () => {
    digits = [];
    screen.textContent = 0;
    operands = [];
})

numericBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (digits.length < 10) {
            digits.push(parseInt(this.getAttribute('data-value')));
        }
        screen.textContent = digits.join('');
    })
})

//!THIS IS FOR MOUSE CLICKS!!!!
operatorBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        operation = this.id;
        operands.push(parseInt(digits.join('')));
        digits = [];
        console.log(operands);
    })
})

function calculate(arr, str) {
    switch (str) {
        case "plus":
            return arr.reduce((a, b) => a + b, 0);
            break;
        case "minus":
            return arr.reduce((a, b) => a - b);
            break;
        case "times":
            return arr.reduce((a, b) => a * b, 1);
            break;
        case "divide":
            return arr.reduce((a, b) => a / b);
            break;
        default:
            console.log('Maths too thicc');
            break;
    }
}





//!THIS IS FOR MOUSE CLICKS ONLY
enterBtn.addEventListener('click', () => {
    operands.push(parseInt(digits.join('')));
    result = calculate(operands, operation);
    screen.textContent = result;
    operands = [];
    console.log(operands);

});


//!THIS IS FOR THE KEYPAD/KEYBOARD
//*Adding eventListeners to keyboard
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 12) {
        digits = [];
        screen.textContent = 0;
        operands = [];
    };

    if (e.keyCode == 107) {
        operation = "plus";
        operands.push(parseInt(digits.join('')));
        digits = [];
        if (operands.length > 1) {
            screen.textContent = calculate(operands, operation);
        }
    }
    if (e.keyCode == 106) {
        operation = "times";
        operands.push(parseInt(digits.join('')));
        digits = [];
    }
    if (e.keyCode == 109) {
        operation = "minus";
        operands.push(parseInt(digits.join('')));
        digits = [];
        console.log(`The operands are: ${operands}`);
        console.log(`The operation is: ${operation}`);
    }
    if (e.keyCode == 111) {
        operation = "divide";
        operands.push(parseInt(digits.join('')));
        digits = [];
    }

    if (digits.length < 10) {

        if (e.keyCode == 13) { //Enter button
            operands.push(parseInt(digits.join('')));
            digits = [];
            result = calculate(operands, operation);
            screen.textContent = result;
            //digits = [result.toString()];
            operands = [];
        } else if (e.keyCode == 96 || e.keyCode == 48) { //the zero buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 97 || e.keyCode == 49) { //the one buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 98 || e.keyCode == 50) { //the two buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 99 || e.keyCode == 51) { //the three buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 100 || e.keyCode == 52) { //the four buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 101 || e.keyCode == 53) { //the five buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 102 || e.keyCode == 54) { //the six buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 103 || e.keyCode == 55) { //the seven buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 104 || e.keyCode == 56) { //the eight buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else if (e.keyCode == 105 || e.keyCode == 57) { //the nine buttons
            digits.push(e.key);
            screen.textContent = digits.join('');
        } else {
            return;
        }
    } else {
        return;
    };
})