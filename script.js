// const alert = document.getElementsByClassName('button2');

// function clickAlert() {
//     alert('Click click!');
// }

// alert.addEventListener('click', clickAlert)

function addingEventListener() {
    const input = document.getElementsByClassName('button2');

    function clickAlert() {
        alert('Click!');
    }

    input.addEventListener('click', clickAlert); 
}

input.addEventListener('click', addingEventListener);