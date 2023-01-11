// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).


// const listCategories = document.querySelectorAll('.item');
// // console.log(listCategories)
// console.log(`Numbers of categories: ${listCategories.length}`)

// // listCategories.forEach((item) => {
// //     console.log(`Category: ${item.firstElementChild.textContent}`)
// //     console.log(`Elements: ${item.lastElementChild.children.length}`)
// // })

for (const el of listCategories) {
    const titleEl = el.querySelector('h2')
    // console.log(titleEl);
    console.log(`Category: ${titleEl.textContent}`);

    const totalItemEl = el.querySelectorAll('li')
    console.log(`Elements: ${totalItemEl.length}`);
};
