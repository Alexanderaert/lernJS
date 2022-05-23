"use strict";

let numberOfFilms;

function start(){
   numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++){
      const movieRecent = prompt("Один из просмотренных фильмов?", "").trim();
      const movieGrad   = prompt("На сколько оцените его?", "").trim();
   
      if ( movieGrad !=null && movieRecent != null && movieGrad != '' && movieRecent != '' && movieGrad.length < 50 && movieRecent.length < 50){
         personalMovieDB.movies[movieRecent] = movieGrad;
      } else {
         i--;
      }
   }
}

rememberMyFilms();

function detectPerconalLevel() {
   if ( personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов');
   } else if( personalMovieDB.count >= 10 || personalMovieDB.count < 30){
      console.log('Вы классически1 зритель');
   } else if ( personalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPerconalLevel();

function showMyDB(hidden) {
   if ( hidden == false){
      console.log(personalMovieDB);
   } else {
      console.log('Доступ закрыт!');
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for ( let i = 1; i < 4; i++){
      const question = prompt(`Ваш любимы1 жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = question;
   }
}

writeYourGenres();
