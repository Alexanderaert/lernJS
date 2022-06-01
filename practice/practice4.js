"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,

   start: function(){
      personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
   
      while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)){
         personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
      }
      return  personalMovieDB.count;
   },

   rememberMyFilms: function() {
      for (let i = 0; i < 2; i++){
         const movieRecent = prompt("Один из просмотренных фильмов?", "").trim();
         const movieGrad   = prompt("На сколько оцените его?", "").trim();
      
         if ( movieGrad !=null && movieRecent != null && movieGrad != '' && movieRecent != '' && movieGrad.length < 50 && movieRecent.length < 50){
            personalMovieDB.movies[movieRecent] = movieGrad;
         } else {
            i--;
         }
      }
   },

   detectPerconalLevel: function() {
      if ( personalMovieDB.count < 10){
         console.log('Просмотрено довольно мало фильмов');
      } else if( personalMovieDB.count >= 10 || personalMovieDB.count < 30){
         console.log('Вы классически1 зритель');
      } else if ( personalMovieDB.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Произошла ошибка');
      }
   },

   showMyDB: function(hidden) {
      if ( hidden == false){
         console.log(personalMovieDB);
      } else {
         console.log('Доступ закрыт!');
      }
   },

   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },

   writeYourGenres: function() {
      for ( let i = 1; i < 4; i++){
         const question = prompt(`Ваш любимы1 жанр под номером ${i}`);
         if (question == '' || question == null){
            i--;
         } else {
            personalMovieDB.genres[i - 1] = question;
         }
      }
      personalMovieDB.genres.forEach(function(value, i){
         console.log(`Любимы1 жанр ${i + 1} - это ${value}`);
      });
   }
};




// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPerconalLevel(personalMovieDB.count);
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();


// console.log(personalMovieDB);
