// const button = document.getElementById('demo-button');
// button.onclick = function () {
//   alert('button clicked 1');
// };

// button.onclick = () => {
//   alert('button clicked 2');
// };
// console.log(button);

// const clickHandler = () => {
//   console.log('button clicked 1');
// };

// button.addEventListener('click', clickHandler);

// button.addEventListener('click', function () {
//   console.log('button clicked 2');
// });

// button.removeEventListener('click', clickHandler);

// button.addEventListener('click', clickHandler, {
//   once: true,
// });

// Создать три кнопки в html и повесить на каждую кнопку обработчик события:
// 1. через атрибут
// 2. через свойство элемента
// 3. через метод addEventListener
// При клике на каждую из кнопок, показать сообщение через alert , соответствующее способу назначения
// обработчика

// Создать кнопку в html и повесить на нее обработчик через метод addEventListener , который при клике выводит
// значение счетчика. Каждый клик увеличивает значение счетчика на 1, а начинаем с 0.
// * После 5 клика удалить обработчик. Подсказка: обработчик должен быть отдельной именованной функцией.

// let counter = 0;

// const clickHandler = () => {
//   counter++;
//   console.log(counter);

//   if (counter === 5) {
//     button.removeEventListener('click', clickHandler);
//   }
// };

// button.addEventListener('click', clickHandler);

// button.addEventListener('click', (e) => {
//   // console.log(e.type);
//   // console.log(e.target); //на ком произошло событие
//   // console.log(e.currentTarget); //на ком навешано событие
//   // console.log(e.clientX);
//   // console.log(e.clientY);
// });

// const input = document.getElementById('input');
// // input.addEventListener('keydown', (e) => {
// //   console.log(e.key);
// // });
// const inputHandler = (e) => {
//   console.log(e.target.value);
// };

// input.addEventListener('input', inputHandler);

// input.value = 'default value';

// Есть верстка вида:
// Ваша задача: написать код, который при клике на кнопку будет переключать элемент с классом content . Если
// content скрыт, то мы его показываем, если отображается — скрываем. При загрузке страницы content должен
// быть скрыт

// const showBtn = document.getElementById('buttonToggleContent');
// const content = document.getElementById('content');

// showBtn.addEventListener('click', () => {
//   const isRemoved = content.classList.toggle('content');

//   if (!isRemoved) {
//     showBtn.textContent = 'Hide text';
//   } else {
//     showBtn.textContent = 'Show text';
//   }
// });

// const outer = document.querySelector('.outer');
// const middle = document.querySelector('.middle');
// const inner = document.querySelector('.inner');

// outer.addEventListener('click', (e) => {
//   console.log('outer');
//   // console.log('e.target', e.target);
//   // console.log('e.currentTarget', e.currentTarget);
// });

// middle.addEventListener('click', () => {
//   console.log('middle');
// });

// inner.addEventListener('click', (e) => {
//   console.log('inner');
//   // console.log(e);
//   // e.stopPropagation();
// });

// outer.addEventListener(
//   'click',
//   (e) => {
//     console.log('outer погружение');
//   },
//   {
//     capture: true,
//   },
// );

// middle.addEventListener(
//   'click',
//   () => {
//     console.log('middle погружение');
//   },
//   true,
// );

// const items = document.querySelectorAll('#list li');
// items.forEach((item) => {
//   item.addEventListener('click', () => {
//     console.log(item.textContent);
//   });
// });

// const list = document.querySelector('#list');

// list.addEventListener('click', (e) => {
//   console.log(e.target);
// });

// Используя делегирования событий, повесить обработчик на container . При клике на «крестик» должен
// скрываться только тот message , в котором находится целевой «крестик».
// Подсказка: сильно упростит реализацию использование метода элементов closest .

// const container = document.querySelector('.container');
// container.addEventListener('click', (event) => {
//   // console.log(event.target.closest('.close'));
//   // const isCloseBtn = event.target.classList.contains('close');
//   const closeBtn = event.target.closest('.close');
//   if (!closeBtn) {
//     return;
//   }

//   const message = closeBtn.closest('.message');
//   if (!message) {
//     return;
//   }

//   message.remove();
// });

const link = document.querySelector('a');
const form = document.querySelector('form');
const input = document.querySelector('input');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('переход отменен');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
});
