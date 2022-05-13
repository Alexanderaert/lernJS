"use strict";

function firstTask() {
   for(let i = 5; i <= 10; i++){
       console.log(i);
   }
}

function secondTask() {
   for(let i = 20; i >= 10; i--){
       if(i === 13){
           break;
       }
       console.log(i);
   }
}

function thirdTask() {
   for( let i = 2; i <= 10; i++){
      if(i % 2 === 0){
         console.log(i);
      }
   }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;

while( i <= 16 ){
   if (i % 2 !== 0) {
      console.log(i);
   }
   i++;
}


let arr = [];
for ( let i = 0; i <= 5; i++){
   arr[i] = i + 5;
   console.log(arr);
}