'use strict'
/*
let arr = [5500, 8000, 7700, 5000];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}*/

let span = document.querySelectorAll('span');
let totalSum = 0;
span.forEach(function(span){
    let spanValue = parseInt(span.textContent);
        if(!isNaN(spanValue)){
            totalSum += spanValue;
            }
})

let price = () =>{
    let p = document.querySelector('.online-store_finish-price');
    let newElem = document.createElement('p');
    newElem.style.cssText = 'margin-top: 10px;font-size: 25px; font-weight: 800; color: blue'
    newElem.innerHTML = `${totalSum} руб.`
    p.appendChild(newElem);
}

price()

let btn = document.querySelector('.online-store_button');

let clickButton = () =>{
    totalSum *= 0.8; 
    document.querySelector('p').innerHTML = `${totalSum} рублей со скидкой в 20%`
}


btn.addEventListener('click', clickButton, { once: true })