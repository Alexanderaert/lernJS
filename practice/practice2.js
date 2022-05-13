"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");


const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++){
   const movieRecent = prompt("Один из просмотренных фильмов?", "");
   const movieGrad   = prompt("На сколько оцените его?", "");

   if ( movieGrad !=null && movieRecent != null && movieGrad != '' && movieRecent != '' && movieGrad.length < 50 && movieRecent.length < 50){
      personalMovieDB.movies[movieRecent] = movieGrad;
   } else {
      i--;
   }
}

let j = 0;

while (j < 2){
   const movieRecent = prompt("Один из просмотренных фильмов?", "");
   const movieGrad   = prompt("На сколько оцените его?", "");

   if ( movieGrad !=null && movieRecent != null && movieGrad != '' && movieRecent != '' && movieGrad.length < 50 && movieRecent.length < 50){
      personalMovieDB.movies[movieRecent] = movieGrad;
   } else {
      j--;
   }
   j++;
}

if ( personalMovieDB.count < 10){
   console.log('Просмотрено довольно мало фильмов');
} else if( personalMovieDB.count >= 10 || personalMovieDB.count < 30){
   console.log('Вы классически1 зритель');
} else if ( personalMovieDB.count >= 30) {
   console.log('Вы киноман');
} else {
   console.log('Произошла ошибка');
}

console.log(personalMovieDB);