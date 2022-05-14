"use strict";

// Место для первой задачи
function calculateVolumeAndArea(finLength) {
   if(typeof(finLength) == 'number' && finLength > 0 && Number.isInteger(finLength)){
      const cubaVolume = finLength * finLength * finLength;
      const сubaArea = 6 * finLength * finLength;

      return (`Объем куба: ${cubaVolume}, площадь всей поверхности: ${сubaArea}`);
   } else {
      return 'При вычислении произошла ошибка';
   }
}
calculateVolumeAndArea('10.2');

// Место для второй задачи
function getCoupeNumber(number) {
   if (typeof(number) == 'number' && Number.isInteger(number) && number >= -1){
      if (number > 0 && number < 37){

         for (let i = 4; i <= 36; i = i + 4){
            if(number <= i){
               return Math.ceil(i / 4);
            }
         }

      } else {
         console.log('error2')
         return 'Таких мест в вагоне не существует';
      }
   } else {
      console.log('error')
      return 'Ошибка. Проверьте правильность введенного номера места';
   }
}

getCoupeNumber(34);
