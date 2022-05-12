"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");


const personalMovieDB = {
   count: numberOfFilms,
   movies: {

   },
   actors: {

   },
   genres: [],
   privat: false
};

const movieRecent = prompt("Один из просмотренных фильмов?", "");
const movieGrad   = prompt("На сколько оцените его?", "");
const movieRecentOne = prompt("Один из просмотренных фильмов?", "");
const movieGradOne   = prompt("На сколько оцените его?", "");

personalMovieDB.movies[movieRecent] = movieGrad; //Для создание новых ключе1 используем тако1 синтоксис
personalMovieDB.movies[movieRecentOne] = movieGradOne;

console.log(personalMovieDB);