function factorial(value) {
   if(typeof(value) == 'number' && Number.isInteger(value)){
      if (value <= 0){
         return 1;
      }


      if (value === 1){
         return value;
      } else {
         return value *= factorial(value = value - 1);
      }

   } else {
      return 'Введены некорректные данные';
   }
}


console.log(factorial(-5));