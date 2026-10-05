console.log("Hello world!");

// Elements
const resetButton = document.querySelector('#restart');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');
const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7]
];

let gameOver = false;

const messageText = document.getElementById("message");

let counter = 0;
let moves = 0;

// Functions
function switchPlayer() {
    if (currentPlayer.textContent === 'x') {
        currentPlayer.textContent = 'o';
    } else {
        currentPlayer.textContent = 'x';
    }

}

function checkWinner() {
    for (const line of winningLines) {
        const first = squares[line[0]].textContent;
        const second = squares[line[1]].textContent;
        const third = squares[line[2]].textContent;
        if (first !== '' && first === second && first === third) {
            console.log(first + 'wins!');
            gameOver = true;
        }
    }
}

function playTurn(event) {
    const square = event.target;
    if (square.textContent === "" && gameOver === false) {
        square.textContent = currentPlayer.textContent;
        moves = moves + 1;
        checkWinner();
        switchPlayer();
    }
}

function count() {
    counter = counter + 1;
    console.log('Current clicks' + counter);
}

resetButton.addEventListener('click', count);

for (const square of squares) {
    square.addEventListener('click', playTurn)
}

function resetGame(){
gameOver = false;
messageText.textContent = '';
}




