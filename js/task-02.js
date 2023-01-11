// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElements = document.querySelector('#ingredients')


// перебираємо через map
 const ingredientsEl = ingredients.map((el) => {
  //  console.log(el);

// створюємо li 
  const liElement = document.createElement('li');
  // console.log(liElement);

// додаємо в li текст
  liElement.textContent = el;

// додаємо в li клас
  liElement.classList.add('item');
  
  return liElement;
});

// console.log(ingredientsEl)


ulElements.append(...ingredientsEl)