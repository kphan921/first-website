const button1 = document.getElementById('button1');
const body = document.querySelector('body');

button1.addEventListener('click', changeBackground);

// setTimeout(() => {
//     button1.removeEventListener('click', changeBackground)
// }, 2000)

function changeBackground() {
    body.style.background = "linear-gradient(to right, white, red)";
}


const button2 = document.getElementById('button2');

button2.addEventListener('click', e => { alert('Click! Click!')});