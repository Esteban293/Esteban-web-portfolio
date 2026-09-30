console.log("Hello world!");

const resetButton = document.querySelector('#restart');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');


let counter = 0;

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

// const squares = document.querySelectorAll('.square');

function gameLoop(event) {
    const square = event.target;
    if (currentPlayer.textcontent = 'o') {
        square.textContent = 'o';
        currentPlayer.textContent = 'x';
    }
    else {
        square.textContent = 'x';
        currentPlayer.textContent = 'o';
    }

}

for (const square of squares) {
    square.addEventListener('click', gameLoop);
    console.log('squares', square);

}