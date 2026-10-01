console.log("Hello world!");

// Elements
const resetButton = document.querySelector('#restart');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');


let counter = 0;

// Functions
// Create a new function
function playTurn(event) {
    const square = event.target;
    square.textContent = 'x';
    
}
function count() {
    counter = counter + 1;
    console.log('Current clicks' + counter);
}

resetButton.addEventListener('click', count);


function createX(square) {
    square.textContent = 'X';
    currentPlayer.textContent = 'O';
    console.log('Button presssed')
}


function handleClick(event) {
    const square = event.target;
    createX(square);
}


function gameLoop(event) {
    const square = event.target;
    if (currentPlayer.textContent = 'o') {
        square.textContent = 'o';
        currentPlayer.textContent = 'x';
    }
    else {
        square.textContent = 'x';
        currentPlayer.textContent = 'o';
    }

}

function switchPlayer(){

    if(currentPlayer.textContent === 'x'){
        currentPlayer.textContent = 'o';
    } else {
        currentPlayer.textContent = 'x';
    }
    
}

for (const square of squares) {
    square.addEventListener('click', playTurn);
    console.log('squares', square);

}


