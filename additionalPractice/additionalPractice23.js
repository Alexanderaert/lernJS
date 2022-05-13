"use strict";

// Место для первой задачи
function firstTask() {
   for(let i = 5; i <= 10; i++){
       console.log(i);
   }
}

// Место для второй задачи
function secondTask() {
   for(let i = 20; i >= 10; i--){
       if(i === 13){
           break;
       }
       console.log(i);
   }
}

// Место для третьей задачи
function thirdTask() {
  for( let i = 2; i <= 10; i++){
     if(i % 2 === 0){
        console.log(i);
     }
  }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
   let i = 2;
   while( i <= 16 ){
       if (i % 2 !== 0) {
           console.log(i);
       }
   i++;
   }
}

// Место для пятой задачи

function fifthTask() {
   const arrayOfNumbers = [];
   
   for ( let i = 0; i <= 5; i++){
       arrayOfNumbers[i] = i + 5;
       console.log(arrayOfNumbers);
   }

   // Не трогаем
   return arrayOfNumbers;
}