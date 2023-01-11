// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//витягуємо об'єкти, з якими будемо працювати
const input = document.querySelector('input')
// console.log(input)

const btnCreate = document.querySelector('[data-create]')
// console.log(btnCreate)

const btnDestroy = document.querySelector('[data-destroy]')
// console.log(btnDestroy)

const boxes = document.querySelector('#boxes')
// console.log(boxes)

//створюємо функцію createBoxes(amount)
const createBoxes = amount => {

  //створюємо масив, в який будемо додавати div
  const elementsToAdd = []

  //перебираємо його
  for (let i = 0; i < amount; i += 1) {
    
    //створюємо новий елемент div
    const div = document.createElement('div')
    
    //задаємо йому розміри
		div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    
    //задаємо background
    div.style.background = getRandomHexColor()
    
    //пушимо наші div в масив
		elementsToAdd.push(div)
	}
	return elementsToAdd
}

//задаємо функцію для очистки через innerHTML
const destroyBoxes = () => {
	boxes.innerHTML = ''
}

//додаємо слухача на клік
btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(input.value)
	boxes.append(...boxesToAdd)
})

console.log(input.value)

//очищаємо вміст boxes
btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})