"use strict";

// Место для первой задачи
function sayHello(name){
   return (`Привет ${name}`);
}

sayHello('Антон');

// Место для второй задачи
function returnNeighboringNumbers(num) {
   const arr = [--num, ++num, ++num];
   console.log(arr); 
}

returnNeighboringNumbers(6);

// Место для третьей задачи
function getMathResult(number, repet) {
   let str = '';

   if(typeof(repet) === 'number' && repet > 0 ){
      for (let i = 1; i <= repet; i++){
         if (i === repet){
            str += `${number * i}`;
         } else {
            str += `${number * i}---`;
         }
      }
   } else {
      return number;
   }

   return str;
}

console.log(getMathResult(10, 89));