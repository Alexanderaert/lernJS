'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block){
//    console.log(block.textContent);
// }


console.log(block?.textContent); // Оператор опционально1 цепочки
// работает только для чтения блока

console.log(1 + 2);

const userData = {
   name: 'Ivan',
   age: null,
   say: function() {
      console.log('Hello');
   }
};


userData.say();
userData.hey?.();

if (userData && userData.skills && userData.skills.js){
   console.log(userData.skills.js);
}

console.log(userData.skills?.js);