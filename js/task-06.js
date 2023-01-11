// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


//витягуємо input
const input = document.querySelector('#validation-input')

//вішаємо слухача на input
input.addEventListener('blur', onImputBlur);

//пишемо callback для слухача
function onImputBlur(event) {
    console.log( input.dataset.length)
    //задаємо умову для функції
    if (event.currentTarget.value.length.toString() === input.dataset.length) {
   return input.classList = 'valid'
    } else input.classList = 'invalid'
}

//dataset - метод, щоб достукатись до властивості через data атрибут.
//input.dataset.length - '6' - строка
//event.currentTarget.value.length - число
//event.currentTarget.value.length.toString() - перетворюємо на строку, бо прилітає число.
