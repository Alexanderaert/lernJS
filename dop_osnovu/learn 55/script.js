'use strict';

const boxesQwery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQwery.forEach(box => {
   if (box.matches('.this')) console.log(box); // Позволяет на1ти определенны1 селектор в хтмл колекции
});

console.log(boxesQwery[0].closest('.wrapper'));

// boxesQwery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//    const div = document.createElement('div');
//    div.classList.add('box');
//    document.body.append(div);
// }

// console.log(boxesQwery);
// console.log(boxesGet);

// console.log(Array.from(boxesGet));

