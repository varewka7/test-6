// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


//витягуємо input i span
const input = document.querySelector('#font-size-control');
// console.log(input)
const span = document.querySelector('#text')
// console.log(span)


//задаємо слухача на input
input.addEventListener('input', onInputStyleChange);

// робимо callback для слухача
function onInputStyleChange() {
    // console.log(event)

    //задаємо умову 
 return   span.style.fontSize = `${input.value}px`
}


// function onInputStyleChange(event) {
//     // console.log(event)

//  return   span.style.fontSize = `${event.target.value}px`
// } ------ можна прописати ще так
