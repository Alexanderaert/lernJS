"use strict";

//// Урок 9

// let number = 5;
// number = 10;
// console.log(number);

// const leftBorderWidth = 1;

// const obj = {
//    a: 50
// };
// obj.a = 10;
// console.log(obj.a);



//// Урок 11

// let number = 4;
// const persone = 'Alex';
// const bool = false;

// const obj = {
//    name: "Jon",
//    age: 25,
//    isMarried: false
// };
// console.log(obj.age);

// let arr = ['arr.png', 'gtr.jpeg'];
// console.log(arr[1]);



//// Урок 11.Д

// const arr = [1, 2, 3, 4];
// console.log(arr[0]);

// const obj = {
//    Anna: 500,
//    Alice: 2000
// };

// obj.agePerson = '24';

// console.log(obj);



//// Урок 13

// alert('Hello'); // Модальное окно с предупреждением

// const result = confirm("Are you here?"); //Модальное окно с вариантами ответов
// console.log(result);

// const answer = prompt("Вам есть 18?", "18"); //Модальное окно с вопросом и вариантом ответа
// console.log(typeof(answer)); //typeof Узнать тип значения

// const agePerson = +prompt("Вам есть 18?", "18"); //+prompt Для диномическо1 типизации получим число
// console.log(agePerson + 10 + ' Столько вам будет в 2032 году'); //typeof Узнать тип значения

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);



//// Урок 14

// const category = 'toys';

// console.log('https://somsing.com/' + category);
// console.log(`https://somsing.com/${category}/5`);

// const user = "Alex";
// alert(`Привет ${user}`);



//// Урок 15

// console.log('arr' + '-object');

// let incr = 10,
//     decr = 10;

//     ++incr; //Инкримент прибовляет 
//     --decr; //Декримент вычитает
//     // Когда мы ставим в постфиксная-- форма возвращает данные в начально1 форме, если используем ++префексную то делается автомтически

//     console.log([incr, decr]);

// console.log(5%2);
// console.log(2*4 == '8');
// console.log(2*4 == '8'); // Строгое сравнению по значению и типу

// const isCheckedd = true,
//       isClose = true;

//    console.log(isCheckedd && !isClose);



//// Урок 16

// git staus Проверка статусов фа1лов
// git add -A начать следить за фа1лами и изменениями в них
// git commit -a -m'text'
// git log Для просмотра всех commit
// git push



//// Урок 17

// git clone "ссылка репозитория с ит хаба" "папка куда нужно положить данные"   для подключения к репозиторию
// git pull получить данные



//// Урок 18

// Получение данных по SSH



//// Урок 20

// if (4 == 9){
//    console.log('Ok!');
// } else{
//    console.log('error');
// }

// const num = 50;

// if (num < 40){
//    console.log('Слишком мало');
// } else if (num > 100){
//    console.log('Слишком много');
// } else{
//    console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('error');

// switch (num) {
//    case 48: console.log('Неверно!');
//    break;

//    case 50: console.log('Попали');
//    break;

//    default: console.log('Не попал!');
// }



//// Урок 21

const humburger = 3;
const fries = 0;
const cola = 0;

if (humburger === 3 || fries || cola){
   console.log('Все довольны!');
} else {
   console.log('Уходим!');
}
