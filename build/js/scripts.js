// Custom Scripts
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







// BURGER MAIN
document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.hero').classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active-burger');
});








// DROPDOWN
var mainButtons = document.getElementsByClassName("dropdown__btn");
var buttonContainers = document.getElementsByClassName("dropdown__body");
var dynamicButtons = document.getElementsByClassName("dropdown__item");

for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", function() {
        var container = this.nextElementSibling;
        container.style.display = "block";
    });
}

function replaceMainButton(button, containerIndex) {
    var container = buttonContainers[containerIndex - 1];
    var mainButton = container.previousElementSibling;
    mainButton.innerHTML = button.innerHTML;
    container.style.display = "none";
}

// Set the first buttons as selected initially
replaceMainButton(dynamicButtons[0], '1');







// TABS
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='block') {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none'
      });
      tab.forEach(item => {
          item.classList.remove(activeClass)
      });
  }
  function showTabContent(i = 0) {
     content[i].style.display = display
     tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
          tab.forEach((item, i) => {
              if ( target == item || target.parentNode == item ) {
                  hideTabContent()
                  showTabContent(i)
              }
          });
      }
  })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
