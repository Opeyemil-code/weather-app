"use strict";
const submit = document.getElementById('submit')
const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const list = document.getElementById('cities');
const api = "b85533b6323797b7c7992557cbd30880";

let words = 'lorem ipsum '
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
    listeditem.className = "relative w-72 h-96 mx-auto rounded-lg bg-white text-black flex flex-col";
    list.append(listeditem);
    listeditem.appendChild(heading)
    listeditem.appendChild(span)
    heading.className = 'ml-6 text-2xl font-inter mt-4'
    heading.innerHTML = inputvalue.value
    span.className = 'ml-6 text-3xl font-poppins mt-8'
     span.innerHTML = words
    console.log(inputvalue.value)

   }
   
}


submit.addEventListener(
    'click', validateForm
)

