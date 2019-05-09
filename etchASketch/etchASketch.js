//Gets the reset_button from the reset section
const reset_button = document.querySelector('.reset_button');
//prompt for getting the number of squares to display; used in a for loop;
const thisMany = prompt("how many rows and columns would you like?");
const blackAndWhite_button = document.querySelector('.blackAndWhite');
const reds_button = document.querySelector('.reds');
const greens_button = document.querySelector('.greens');



blackAndWhite_button.addEventListener('click', () => {
    allMainDivs.forEach((option) => {
        option.addEventListener('mouseenter', function () {
            let red = Math.floor(Math.random() * 246);
            let green = Math.floor(Math.random() * 246);
            let blue = Math.floor(Math.random() * 246);
            this.style.backgroundColor = `rgb(${red}, ${red}, ${red})`;
        })
    })
})

reds_button.addEventListener('click', () => {
    allMainDivs.forEach((option) => {
        option.addEventListener('mouseenter', function () {
            let red = Math.floor(Math.random() * 246);
            let green = 0;
            let blue = 0;
            this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
})

greens_button.addEventListener('click', () => {
    allMainDivs.forEach((option) => {
        option.addEventListener('mouseenter', function () {
            let red = 0;
            let green = Math.floor(Math.random() * 246);
            let blue = 0;
            this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
})

//starts a for loop
for (let i = 0; i < Math.pow(thisMany, 2); i++) {
    //creates a div
    let new_div = document.createElement('div');
    //creates a parent Node
    let parent = document.querySelector('.container');
    //creates the number of columns
    parent.style.gridTemplateColumns = `repeat(${thisMany}, 1fr)`;
    //creates the number of rows
    parent.style.gridTemplateRows = `repeat(${thisMany}, 1fr)`;
    //adds the divs under the parent Node
    parent.appendChild(new_div);
}

//creates a NodeList for all the child Nodes in the container, once created...
const allMainDivs = document.querySelectorAll('.container > div');

//adds an event listener to the reset button
reset_button.addEventListener('click', () => {
    //resets all the background colors to white
    for (let i = 0; i < allMainDivs.length; i++) {
        allMainDivs[i].style.backgroundColor = "white";
    };
    location.reload();
})




allMainDivs.forEach((option) => {
    option.addEventListener('mouseenter', function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
})

console.log(allMainDivs.length);

const valuesNL = document.querySelectorAll('[value]');
console.log(valuesNL[2].textContent);

