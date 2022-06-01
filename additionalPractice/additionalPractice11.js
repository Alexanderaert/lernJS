const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = "";
   if (arr && arr.length > 0){
      for (let key of arr){
         str += key + ` `;
      }
      return `Семья состоит из: ${str}`;
   } else {
      return `Семья пуста`;
   }
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    for (let key of arr){
      str += key.toLowerCase() + `\n`;
    }
    console.log(str.trim());
}

// function standardizeStrings(arr) {
//    arr.forEach(function(value){
//       console.log(value.toLowerCase());
//    });
// }

standardizeStrings(favoriteCities);