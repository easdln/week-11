
let button = document.querySelector('.button');
const input = document.querySelector('.input');
const ulElem = document.querySelector('.items');
const liElem = document.querySelectorAll('li');


function clickButton () {
    let newElem = document.createElement('li');
    newElem.textContent = input.value
    ulElem.appendChild(newElem);
    input.value = '';
    return newElem
}

button.addEventListener("click", clickButton);

function resetElem(event){
    if(event.target.closest('li')){
    event.target.classList.toggle('active')}
}

ulElem.addEventListener('click', resetElem)


console.log(5 + 7);
