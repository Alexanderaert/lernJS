// touchstart // активация по нажатию на элемент
// touchmove // При фиксации на элементе и движению пальзу по нему 
// touchend // При потери фокуса срабатывает
// touchenter
// touchleave
// touchcancel


window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (event) => {
      event.preventDefault();

      console.log('start');
      console.log(event.touches);
      console.log(event.targetTouches);
   });

   box.addEventListener('touchmove', (event) => {
      event.preventDefault();

      console.log('move');
   });

   box.addEventListener('touchend', (event) => {
      event.preventDefault();

      console.log('end');
   });


});


// touches // Показывает количество пальцев которые использует пользователь
// targetTouches //Количество пальцев которое взю именно с определенным элементом
// chengedTouches