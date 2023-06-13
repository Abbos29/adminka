// Получаем элемент, которому нужно добавить класс
const hero = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

// Функция, которая добавляет/удаляет класс .active в зависимости от ширины экрана
function toggleHeroClass() {
  if (window.innerWidth < 768) {
    hero.classList.add('active');
    navbar.classList.add('active');
    burger.classList.add('active-burger');
  } else {
    hero.classList.remove('active');
    navbar.classList.remove('active');
    burger.classList.remove('active-burger');
  }
}

// Назначаем обработчик события на изменение размера окна
window.addEventListener('resize', toggleHeroClass);

// Вызываем функцию при загрузке страницы, чтобы значение было корректным в начале
toggleHeroClass();





const burgerEl = document.querySelector('.burger');
const mainBodyEl = document.querySelector('.main__body');

// Функция, добавляющая класс при клике на бургер при условии, что ширина экрана меньше 768 пикселей
function handleBurgerClick() {
  if (window.innerWidth < 768) {
    mainBodyEl.classList.toggle('scroll-lock');
  }
}

// Назначаем обработчик клика на бургер
burgerEl.addEventListener('click', handleBurgerClick);






document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.hero').classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active-burger');
});



