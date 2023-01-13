"use strict";
const submit = document.getElementById('submit')
const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const list = document.getElementById('cities');
const api = "b85533b6323797b7c7992557cbd30880";
const url = 'https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric';

let words = 11
function validateForm(params) {
    event.preventDefault()
    let inputvalue = input;
    let listeditem = document.createElement('li');
    let heading = document.createElement('h2')
    let span = document.createElement('span')
    let sup = document.createElement('sup');
    let altSpan = document.createElement('span')
    let figure = document.createElement('figure')
    let img = document.createElement('img')
    let figCaption = document.createElement('figcaption')
    

   if (inputvalue.value != '') {
    listeditem.className = "relative w-72 h-96 mx-auto rounded-lg bg-white text-black flex flex-col space-y-6";
    list.append(listeditem);
    listeditem.appendChild(heading)
    listeditem.append(span)
    listeditem.appendChild(sup)
   // listeditem.appendChild(altSpan)
    altSpan.append(span)
    listeditem.appendChild(figure)
    figure.appendChild(img)
    figure.appendChild(figCaption)
    heading.className = 'ml-6 text-2xl font-inter mt-4 '
    heading.innerHTML = inputvalue.value
    span.className = 'ml-6 text-4xl mt-10 font-poppins  text-black'
    span.innerHTML = words
   // sup.className = 'text-sm'
    sup.innerHTML = words
    sup.className = 'text-5xl font-bold ml-6 mt-60 '
    //altSpan.innerHTML = ''
    img.src = 'icons/icons8-sun-50.png'
    img.className = 'ml-6 w-20'

   }
   
}


submit.addEventListener(
    'click', validateForm
)

