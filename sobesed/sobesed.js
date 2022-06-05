"use strict";

function firstExp() {
   let x = 5;
   alert(x++);
}

function secondExp() {
   console.log([] + false - null + true);
}

function threeExp() {
   let y = 1;
   let x = y = 2;
   alert(x);
}

function foreExp() {
   console.log([] + 1 + 2);
}

function fiveExp() {
   alert("1"[0]);
}

function sixExp() {
   alert( 0 || "" || 2 || undefined || true || falsе ); 
}
// firstExp();
// secondExp();
// threeExp();
// foreExp();
// fiveExp();
sixExp();