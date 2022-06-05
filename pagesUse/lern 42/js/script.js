'use strict';

const box = document.getElementById('box'); // Получает элемент по ID
console.log(box);

const btns = document.getElementsByTagName('button'); // Получаяет элемент по Teg
console.log(btns[2]);

const circles = document.getElementsByClassName('circle'); // Получает элемент по классу
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // получает элемент по селектору
hearts.forEach(item => { // есть возможно использовать форыч
   console.log(item);
});

const oneHeart = document.querySelector('.heart'); // вызывает первы1 элемент
console.log(oneHeart);