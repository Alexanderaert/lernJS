"use strict";

// Место для первой задачи
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   // Пишем решение вот тут
   for (let i = 0; i <= arr.length-1; i++){
         result[i] = arr[i];
   }
   
   // Не трогаем
   return result;
}

// Место для второй задачи
function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   for (let i = 0; i <= data.length-1; i++){
      if (typeof(data[i]) == 'number'){
         data[i] = data[i] * 2;
      } else if (typeof(data[i]) == 'string'){
         data[i] = data[i] + ' - done';
      }
   }
   // Пишем решение вот тут
   
   
   // Не трогаем
   return data;
}

// Место для третьей задачи
function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   // Пишем решение вот тут
   for (let i = 1; i <= data.length; i++){
      result[i - 1] = data[data.length - i];
      console.log(result);
   }
   
   // Не трогаем
   return result;
}