
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


const body = document.querySelector('body');
const btnElement = document.querySelector('.change-color')

btnElement.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const changeButton = document.querySelector('button.change-color')
// const body = document.querySelector('body')
// const colorValue = document.querySelector('span.color')


// changeButton.addEventListener('click', e => {
//   let color = getRandomHexColor();
//   body.style.backgroundColor = color;
//   colorValue.textContent = color;
// })