console.log("Hello world!");

// Elements
const resetButton = document.querySelector('#restart');
const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#current-player');
const messageText = document.getElementById('message');
const xScoreText = document.getElementById('x-score');
const oScoreText = document.getElementById('o-score');
const drawScoreText = document.getElementById('draw-score');

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
let counter = 0;
let moves = 0;
let xWins = 0;
let oWins = 0;
let draws = 0;
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
             messageText.textContent = (first + 'wins!');
            gameOver = true;
            return
        }
    }
    if (moves === 9) {
        messageText.textContent = "Its a draw!";
        gameOver = true;
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
    xWins
}

function resetGame() {
    gameOver = false;
    messageText.textContent = '';
    currentPlayer.textContent = 'x';
    moves = 0;
    for (const square of squares) {
        square.textContent = '';
    }
}


resetButton.addEventListener('click', resetGame);

for (const square of squares) {
    square.addEventListener('click', playTurn)
}





