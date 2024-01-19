
let button = document.querySelector('.button');
const input = document.querySelector('.input');
const ulElem = document.querySelector('.items');
//const liElem = document.getElementsByTagName('li');


function clickButton () {
    let newElem = document.createElement('li');
    newElem.textContent = input.value;
    ulElem.appendChild(newElem);
    input.value = '';
    return newElem
}

button.addEventListener("click", clickButton);

function resetElem(event){
    let newElem = document.getElementsByTagName('li');
    if (event.target.closest('li')) {
        event.target.classList.toggle('active');
    }
    return newElem
}

newElem.addEventListener("click", resetElem);





