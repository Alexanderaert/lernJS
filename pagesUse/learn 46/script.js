// console.log(document.documentElement); // Получить все что лежит в теле html
// console.log(document.head); // Получить все лежит в head

// console.log(document.body.childNodes); // Получить все элементы которые лежат в Body

// console.log(document.body.firstElementChild); // получаем первы1 элемент
// console.log(document.body.lastElementChild); // получаем последнего

// Недостаток можно получить ноду
// console.log(document.querySelector('#current').parentNode); //Получить родителя узла
// console.log(document.querySelector('#current').parentNode.parentNode); //Получить родителя 

// Аналог для получение элемента
// console.log(document.querySelector('#current').parentElement); // ПОлучить родителя


// Недостаток что можно получить текстовые ноды
// console.log(document.querySelector('[data-current="3"]').nextSibling); // ПОлучить следующи1 элемент
// console.log(document.querySelector('[data-current="3"]').previousSibling); // ПОлучить предыдущи1 элемент

// Аналог которы1 будет получать только элементы
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // ПОлучить следующи1 элемент которы1 будет блок


for (let node of document.body.childNodes){
   if(node.nodeName == '#text'){
      continue; // Остоновит итерацию и пере1дет к следующему шагу
      // break; // полностью остоновит цикл
   }

   console.log(node);
}

