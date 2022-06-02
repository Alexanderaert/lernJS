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

// const humburger = 3;
// const fries = 0;
// const cola = 0;

// if (humburger === 3 || fries || cola){
//    console.log('Все довольны!');
// } else {
//    console.log('Уходим!');
// }



//// Урок 22

// let num = 50;

// while(num <= 55) {
//    console.log(num);
//    num++;
// }

// do{
//    console.log(num);
//    num++;
// }
// while (num < 55);

// for( let i = 0; i < 55; i++){
//    if(i == 6){
//       // break; отсанавливает цикл
//       continue; // Пропускает значение
//    }
// }



//// Урок 23

// let str = '';

// loop1:
// for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }

// console.log(str);

// let i, j;

// loop1:
// for (i = 0; i < 3; i++) {      //Первый цикл, обозначенный меткой "loop1"
//    loop2:
//    for (j = 0; j < 3; j++) {   //Второй цикл, обозначенный меткой "loop2"
//       if (i === 1 && j === 1) {
//          continue loop1;
//       }
//       console.log('i = ' + i + ', j = ' + j);
//    }
// }

// let result = '';
// const length = 8;

// for (let i = 1; i < length; i++ ){
//    for(let j = 0; j < i; j++){
//       result += '*';
//    }
//    result += '\n';
// }

// console.log(result);


//// Урок 25

// let num = 20; // Глобальная переменная

// function showFirstMessage(text) {
//    console.log(text);
//    let num = 20; //Локальная переменная
//    num = 10; // Перезапись глобально1 переменно1
//    console.log(num);
// }

// showFirstMessage('Hello World!'); // Вызов функции
// console.log(num);


// function calc(a, b){
//    return (a + b);
// }

// console.log(calc(5, 3));


// function ret(){
//    let num = 50;
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//    console.log('Hello');
// };

// logger();



//// Урок 26

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//    console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

//// Урок 27

// const usdCurr = 28;
// const discount = 0.8;

// function convert(amount, curr) {
//    return curr * amount;
// }

// function promotion(result) {
//    console.log(result * discount);
// }

// const res = convert(500, usdCurr);

// convert(500, usdCurr);
// promotion(res);


// function test() {
//    for (let i = 0; i < 5; i++ ){
//       console.log(i);
//       if(i === 3){
//          return;
//       }
//    }
//    console.log('Done');
// }

// test();


// function doNothing(){};
// console.log(doNothing() === undefined); // Вернет true


//// Урок 28

// const str = 'text';
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(arr.length);
// console.log(str[2]);

// console.log(str.toUpperCase()); // Переводит текст в вверхни1 регистр
// console.log(str.toLowerCase()); // Нижни1 регистр;

// let fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit')); // ПОказывает с какого значение начинается разыскиваемое значение, поиск подстроки

// const logg = "hello world";
// console.log(logg.slice(6, 11)); // отрезает от и до какого элемента
// console.log(logg.substring(6, 11)); //

// console.log(logg.substr(6, 5)); // первое значение с какого второе сколько символов

// const nam = 12.2;
// console.log(Math.round(nam)); //Округление до ближа1шего целого

// const text = "12.2px";
// console.log(Number.isInteger(finLength)); //Проверяет на наличие плавающеё запято1 
// console.log(parseInt(text)); //Превращает строку в цифру и уберает все лишнее
// console.log(parseFloat(text)); //Возвращает из строки цифры и сохраняет плаваю=щую точку



////Урок 30 метод trim для строк позволяет убрать все пробелы вначале и в конце строки

// let str = '    ds';
// str.trim();


//// Урок 31 Callback- функции

// function first(){
//    //Do something
//    setTimeout(function(){
//       console.log(1);
//    }, 500);
// }

// function second() {
//    console.log(2);
// }

// first();
// second();

// function learmJS(lang, callback){
//    console.log(`Я учу ${lang}`);
//    callback();
// }

// function done(){
//    console.log('Я прошел этот урок');
// }

// learmJS('JavaScript', done);


////Урок 32 Объекты

// const obj = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function() { // Создание функции в объектк называется методом
//       console.log('Test');
//    }
// };

// console.log(obj.name); // Ображение через ключь к значению в объекте

// delete obj.name; //Удаляет значение из объекта
// console.log(obj);


// for in Работает только для объекта

// let counter = 0;
// for (let key in obj){
//    if (typeof(obj[key]) === 'object'){
//       for ( let i in obj[key]){
//          console.log(`Сво1ства ${i} имеет значение ${obj[key][i]}`);
//          counter ++;
//       }
//    } else {
//       console.log(`Сво1ства ${key} имеет значение ${obj[key]}`);
//       counter ++;
//    }
// }
// console.log(counter);
// console.log(Object.keys(obj).length); // Создает массив из ключе1 объекта для подсчета элементов

// obj.makeTest(); // Вызов метода

// // Деструктиризация объекта
// const {border, bg} = obj['colors'];
// console.log(border);


////Урок 33 Массивы

// const arr = [1, 2, 3, 6, 8];

// arr[99] = 0;

// console.log(arr.length);

// arr.pop(); // Удаляет последни1 элемент массива
// arr.push(10); // Добовляет последни1 элемент массива

// for (let i = 0; i < arr.length ; i++ ){
//    console.log(arr[i]);
// }

// for ( let value of arr){
//    console.log(value);
// }

// console.log(arr);

// arr.forEach(function(value, i, arr){
//    console.log(`${i}: ${value} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const product = str.split(', ');// делит строку по разделителю на массив
// arr.sort(compareNum); // Сортировка элементы массива и строк

// console.log(arr);
// function compareNum(a, b){
//    return a - b;
// }


// console.log(product).join('; ');// Объеденяет массив в строку через разделитель



////Урок 34 Передача данных по ссылке или по значению 

// let a = 5,
//     b = a;

//    b = b + 5;

//    console.log(b);


//    const obj = {
//        a: 5,
//        b: 1,
//    }

//    // const copy = obj; // ссылка на существующи1 объект
//    // copy.a = 10;

//    function copy(mainObj){
//       let objCopy = {};
//       let key;

//       for(key in mainObj){
//          objCopy[key] = mainObj[key];
//       }

//       return objCopy;
//    }
//    console.log(copy);

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x:5,
//       y:7
//    }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;

// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20
// };

// console.log(Object.assign({}, add)); // Объедиение объектов в 1


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // СОздаем копию массива

// newArray[1] = 'add';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youTube', 'video', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'telegram']; // ... оператор разворота

// console.log(internet);


// function log(a, b, c){
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const nawArray = [...array];

// const d = {
//    one: 1,
//    two: 2
// };

// const newObj = {...d};

////Урок 36 Основы ООП

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// const soldier = {
//    health: 400,
//    armor: 100,
//    sayHello: function(){
//       console.log("hello");
//    },
// };

// const jonh = Object.create(soldier); // Создание протатипных связе1

// // Object.setPrototypeOf(jonh, soldier); // наследование протатипа

// jonh.sayHello();


////Урок 38 Отлавливаем ошибки с помощью консоли 

// debugger; //Использовать для дебга кода



////Урок 39 Динамическая типизация 


// // To String
// // 1)
// console.log(typeof(String(null)));

// // 2)
// console.log(typeof(5 + ' '));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';


// //To Number

// //1)
// console.log(typeof(Number('4')));

// //2)
// console.log(typeof(+'5'));

// //3
// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// // To boolean

// // 0, '', null, undefined, NaN; False

// //1)
// let switcher = null;

// if (switcher){
//    console.log('Work...');
// }

// //2)
// console.log(typeof(Boolean('4')));

// //3)
// console.log(typeof(!!'44444'));


////Урок 40 Замыкание и лексическое окружение

// let number = 5;

// function logNumber() {
//    console.log(number);
// }

// number = 6;

// logNumber();

// function createCounter(){
//    let counter = 0;

//    const myFunction = function() {
//       counter = counter + 1;
//       return counter;
//    }

//    return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


