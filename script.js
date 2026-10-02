console.log("Hello world!");

// Elements
const resetButton = document.querySelector('#restart');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');
const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 8, 4],
    [1, 3, 3],
    [4, 5, 6]
]


let counter = 0;

// Functions
function playTurn(event) {
    const square = event.target;
    square.textContent = 'x';
    console.log('Event Square:', square);
    if (square.textContent === "") {
        square.textContent = currentPlayer.textContent;
        checkwinner
        switchPlayer();
        console.log(switchPlayer)
        console.log(currentPlayer)

    }
}
function checkWinner() {
    for (const line of winningLines);
    const first = (squares[line[0]].textContent);
    const second = (squares[line[1]].textContent);
    const third = (squares[line[3]].textContent);
    if(first !== '' &&first === second && first === third){
console.log(first +'wins!')
    }
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

function switchPlayer() {
    if (currentPlayer.textContent === 'x') {
        currentPlayer.textContent = 'o';
    } else {
        currentPlayer.textContent = 'x';
    }

}

for (const square of squares) {
    square.addEventListener('click', playTurn);
    console.log('squares', square);

}




