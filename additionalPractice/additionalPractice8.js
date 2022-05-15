"use strict";

// Место для первой задачи
let decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function getTimeFromMinutes(time) {

   const titles = ['час', 'часа', 'часов'];

   if (typeof(time) == 'number' && time >= -1 && Number.isInteger(time)){
      const timeMiliSeconds = time * 60;

      const timeAoures =  Math.floor(timeMiliSeconds / 3600);
      const timeMinutes = timeMiliSeconds / 60 - timeAoures * 60;

      if(!decCache[timeAoures]) decCache[timeAoures] = timeAoures % 100 > 4 && timeAoures % 100 < 20 ? 2 : decCases[Math.min(timeAoures % 10, 5)];

      return(`Это ${timeAoures} ${titles[decCache[timeAoures]]} и ${timeMinutes} минут`);
      
   } else {
      return('Ошибка, проверьте данные');
   }
}

getTimeFromMinutes(100);

// // Место для второй задачи
// function findMaxNumber(one, two, three, fore) {
   
//    const arrNumber = [one, two, three, fore];

//    let element = arrNumber[0];

//    for (let i = 0; i < arrNumber.length; i++){
//       if (typeof(arrNumber[i]) == 'number'){
         
//          if (arrNumber[i] >= element){
//             element = arrNumber[i];
//          }

//          if(i == arrNumber.length - 1){
//             return element;
//          }
         
//       } else {
//          return 0;
//       }
//    }
// }

function findMaxNumber(one, two, three, fore) {
   if(typeof(one) != 'number' || typeof(two) != 'number' || typeof(three) != 'number' || typeof(fore) != 'number'){
      return 0;
   } else {
      return Math.max(one, two, three, fore);
   }
}

console.log(findMaxNumber(3,15,79,45));

