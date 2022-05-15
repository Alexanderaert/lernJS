let first = 0;
let second = 1;
let result = '';


function fib(number){
   if(Number.isInteger(number) && number > 0 && typeof(number) == 'number'){
      for (let i = 0; i < number; i++){

         if (i + 1 === number){
            result += `${first}`;
            return result;
         } else {
            result += `${first} `;
         }

         let three = first + second;
         first = second;
         second = three;
      }
   } else {
      return "";
   }

}

console.log(fib(55));