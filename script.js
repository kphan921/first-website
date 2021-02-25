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

const button = document.querySelector('.button');
const container = document.querySelector('.container');
const code = document.querySelector('h3');

button.addEventListener("click", e => {
    color = '#';
    color += Math.random().toString(16).slice(2, 8);
    code.innerText = color;
    container.style.backgroundColor = color;
})

form = document.querySelector('#create-task-form');
let commentContainer = document.querySelector('#tasks')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let li = document.createElement('li') 
  li.textContent= e.target['new-task-description'].value;
  commentContainer.appendChild(li);
  btn = document.createElement('button');
  btn.textContent = 'X';
  btn.style.width = '20px' 
  btn.style.height = '20px'
  btn.style.fontSize = '10px'
  btn.style.background = 'red';
  li.appendChild(btn);
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove(li);
  })
})