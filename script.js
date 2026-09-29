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
