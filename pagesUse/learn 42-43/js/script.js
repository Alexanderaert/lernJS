'use strict';

const box = document.getElementById('box'); // Получает элемент по ID
const btns = document.getElementsByTagName('button'); // Получаяет элемент по Teg
const circles = document.getElementsByClassName('circle'); // Получает элемент по классу
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper. ('.heart'); // получает элемент по селектору
const oneHeart = wrapper.querySelector('.heart'); // вызывает первы1 элемент



box.style.cssText = 'background-color: blue; width: 400px';

hearts.forEach(item => { // есть возможно использовать форыч
   item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // Создаем элемент
div.classList.add('black');

wrapper.append(div);// append добавляет в конец блок
// wrapper.prepend(div); // prepend Добовляет в начало блок

div.innerHTML = '<p>Hello World</p>'; // Добавляет html структуру
// div.textContent = 'Hello'; // Добавляет текст

// hearts[0].before(div); // Перед первым элементом вставляет блок
// hearts[0].after(div); // после вставить блок

// circles[0].remove(); // удаляет элемент
hearts[0].replaceWith(circles[0]); // Заменяет элемент

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Вставляет перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Вставляет во внутрь вначало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Вставляет в конец элемента
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Вставляет после элемента