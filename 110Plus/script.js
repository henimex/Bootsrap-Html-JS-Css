//Event - Keyboard

const input = document.querySelector('#nameInput');

input.addEventListener('keydown',eventHandler);
input.addEventListener('keyup',eventHandler);

function eventHandler(e){
    console.log(`Event Type : ${e.type}`);
}