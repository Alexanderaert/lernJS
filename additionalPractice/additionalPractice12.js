const someString = 'This is some strange string';

function reverse(str) {
   if (typeof(str) === 'string'){

      let string = '';

      for (let i = str.length - 1; i >= 0; i--){
         string += str[i];
      }
      return string;
      
      // return str.split('').reverse().join('');
   } else {
      return 'Ошибка!';
   }
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const arrCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
   let stri = "";
   if (arr.length == 0){
      return `Нет доступных валют`;
   }
   for( let key of arr){
      if(key != missingCurr){
            stri += key + `\n`;
      }
   }
   return `Доступные валюты:\n${stri}`;
}

console.log(availableCurr(arrCurrencies, 'RUB'));