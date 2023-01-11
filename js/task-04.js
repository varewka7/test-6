// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


//витягуємо об"єкти, з якими будемо працювати через querySelector//
const counterEl = document.querySelector('#counter');

const removeListenerBtn = counterEl.querySelector('button[data-action="decrement"]')
// console.log(removeListenerBtn)

const addListenerBtn = counterEl.querySelector('button[data-action="increment"]')
// console.log(addListenerBtn)

const valueEl = counterEl.querySelector('#value')
// console.log(valueEl)

//задаємо countValue//
let counterValue = 0;

//створюємо функцію-калькулятор//
  let decrement = () => {
      counterValue -= 1;

      //перезаписуємо значення через innerHTML
      valueEl.innerHTML = counterValue;
      console.log(counterValue)
    }

    //прикріплюємо слухача до кнопки віднімання і задаємо другим аргументом callback
removeListenerBtn.addEventListener('click', (decrement))

//створюємо функцію-калькулятор для додавання
  let increment = () => {
      counterValue += 1; 

      //перезаписуємо значення через innerHTML
      valueEl.innerHTML = counterValue;
      console.log(counterValue)
  }

  //прикріплюємо слухача до кнопки додавання і задаємо другим аргументом callback
addListenerBtn.addEventListener('click', (increment))



