const cars = [
  {
    imgUrl: 'https://www.wallpapertip.com/wmimgs/51-510574_nissan-skyline-gtr-r34.jpg',
    make: 'Nissan Skyline',
    model: 'Skyline',
    year: '1999',
    cost: '$100,000'
  },
  {
    imgUrl: 'https://www.meme-arsenal.com/memes/0ca89633a5a07eee8a3e71fa416bfb82.jpg',
    make: 'Toyota Supra',
    model: 'Supra',
    year: '1994',
    cost: '$60,000'
  },
  {
    imgUrl: 'https://cdn.dealeraccelerate.com/international/1/10/4982/790x1024/1991-honda-nsx',
    make: 'Honda NSX',
    model: 'NSX',
    year: '1999',
    cost: '$100,000'
  },
  {
    imgUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--14kWoCVg--/c_scale,f_auto,fl_progressive,q_80,w_800/clrkfmgms31kvu757dl3.jpg',
    make: 'Mazda RX7',
    model: 'RX7',
    year: '1995',
    cost: '$30,000'
  }
]

const buildCars = () => {
  cars.forEach(car => buildCar(car));
};
const buildCar = (car) => {
  let carList = document.querySelector('.car-list');
  let carName = document.createElement('h3');
  carName.textContent = car.make;
  carList.appendChild(carName);
  carName.addEventListener('click', () => showCar(car))
};
buildCars();

const showCar = (car) => {
  let carList = document.querySelector('.car-list');
  let image = document.createElement('img');
  let carName = document.createElement('h3');
  let carModel = document.createElement('h4');
  let carYear = document.createElement('h4');
  let carCost = document.createElement('h4');

  carList.classList = 'car';
  image.src = car.imgUrl;
  carName.textContent = car.make;
  carModel.textContent = car.model;
  carYear.textContent = car.year;
  carCost.textContent = car.cost;
  carList.append(image, carName, carModel, carYear,carCost);
}

const carForm = document.querySelector('.car-form');

carForm.addEventListener('submit', (e) => {
  e.preventDefault()
});


const button1 = document.getElementById('button1');
const body = document.querySelector('body');

button1.addEventListener('click', changeBackground);


// CHANGE BACKGROUND
function changeBackground() {
    body.style.background = "linear-gradient(to right, white, red)";
}


const button2 = document.getElementById('button2');

button2.addEventListener('click', e => { alert('Click! Click!')});

const button = document.querySelector('.button');
const container = document.querySelector('.container');
const code = document.querySelector('.color');

// CHANGE COLOR AND GET COLOR CODE
button.addEventListener("click", e => {
    color = '#';
    color += Math.random().toString(16).slice(2, 8);
    code.innerText = color;
    container.style.backgroundColor = color;
})

toDoForm = document.querySelector('#create-task-form');
let commentContainer = document.querySelector('#tasks')

// ADD TASK TO TODO LIST
toDoForm.addEventListener('submit', (e) => {
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
  btn.style.cursor = 'pointer';
  li.appendChild(btn);
  e.target['new-task-description'].value = '';
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove(li);
  })
})