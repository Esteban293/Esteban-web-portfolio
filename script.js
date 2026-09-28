console.log("Hello world!");

const resetButton = document.querySelector('#restart');

let counter = 0;

function count(){
    counter = counter + 1;
    console.log('count:' + counter);
}

resetButton.addEventListener('click', count);