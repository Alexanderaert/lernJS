/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(element => {
   element.remove();
});

document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.cssText = ('background: url("img/bg.jpg"); background-size: cover;');


const list = document.querySelector('.promo__interactive-list');

const {movies} = movieDB;

function moviesUpdate(data) {
   list.innerHTML = "";

   data.sort().forEach(function(element, i) {
      list.innerHTML += `
         <li class="promo__interactive-item">${i + 1} ${element}
            <div class="delete"></div>
         </li>`;
   });
   removeItem();
}

moviesUpdate(movies);



const submit = document.querySelector('button');

submit.addEventListener('click', function(event){
   event.preventDefault();

   const input = document.querySelector('.adding__input'),
         checkbox =  document.querySelector('input[type="checkbox"]');

   let valueInput = input.value;
   if(valueInput){

      if(checkbox.checked){
         console.log('Добавляем любимый фильм');
      }

      if(valueInput.length > 21){
         valueInput = valueInput.slice(0, 20) + '...';
      }

      movieDB.movies.push(valueInput.toUpperCase());

      moviesUpdate(movies);
   }

   input.value = '';
   checkbox.checked = false;
});


function removeItem(){
   const btnRemove = list.querySelectorAll('.delete');

   btnRemove.forEach( element => {
      element.addEventListener('click', function(event){
         const parent = event.target.parentElement;
         const textParent = parent.textContent;
   
         movieDB.movies.forEach((item, i) => {
            if(textParent.trim() == `${i + 1} ${item}`){
               movieDB.movies.splice(i, 1);
               
               moviesUpdate(movies);
            }
         });
         parent.remove();
      });
   });
}



