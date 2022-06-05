const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//    alert('click');
// };

// btn.addEventListener('click', function(){
//    alert('Click');
// });

// btn.addEventListener('mouseenter', function(event){
//    event.target.remove();
//    console.log('Hover');
// });
const deleteElement = function(event) {
   console.log(event.currentTarget);
   console.log(event.type);
};

// btn.addEventListener('click', deleteElement); // Добовление слушателя
// overlay.addEventListener('click', deleteElement); // Всплытие событи1
// btn.removeEventListener('click', deleteElement); // Удаление оброботчика событи1

const link = document.querySelector('a');
link.addEventListener('click', function(event){
   event.preventDefault();

   console.log(event.target);
});


btns.forEach((btn, i) => {
   btn.addEventListener('click', deleteElement, {once: true}); // {once: true} при повтороном нажатии отключает слушателя
});

