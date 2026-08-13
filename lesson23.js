// console.log(window);

//BOM
// console.log(window.document);
// console.log(window.location);

// console.log(document);
// console.log(location);

//window, location, history, navigator, screen
// console.log(window.innerHeight);
// console.log(window.innerWidth);

//LOCATION
// console.log(location);
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.origin);

// location.href = 'about.html';
// location.assign('about.html');
// location.reload();

//HISTORY
// console.log(history);
// history.back();
// history.forward();

// history.go(-1)
// history.go(1)

//NAVIGATOR
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(navigator.onLine);

//SCREEN
// console.log(screen.width);
// console.log(screen.height);

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// Создать две страницы index.html и about.html с произвольным содержимым. Подключить файл script.js на
// обе страницы. В процессе выполнения пунктов проверяем и комментируем, чтобы не было конфликтов.
// 1. Выводим в консоль полный путь текущей страницы ( location )
// 2. Переходим на страницу about.html ( location )
// 3. Перезагружаем страницу ( location )
// 4. Возвращаемся на прошлую страницу ( history )

// console.log(location.href);

// console.log(location.pathname);
// if (location.pathname !== '/about.html') {
//   location.assign('/about.html');
// }

// // location.reload();

// setTimeout(() => {
//   history.back();
// }, 2000);

//DOM
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);

//ПОИСК ЭЛЕМЕНТОВ
// const title = document.querySelector('h1'); //id - #elementId
// if (title) {
//   console.log(title.textContent);
// }

// const titles = document.querySelectorAll('h1');
// titles.forEach((item) => {
//   console.log(item.textContent);
// });

// const item = document.getElementById('listItem3');
// console.log(item);

// const items = document.getElementsByClassName('list-item');
// console.log(Array.from(items));

// const items = document.getElementsByTagName('li');
// console.log(items);

// const items = document.getElementsByName('email');
// console.log(items);

// const links = document.links;
// console.log(links);

// Дана верстка:
{
  /* 1. Найти и записать в переменную заголовок h1 .
2. Найти и записать в переменную параграф с классом text .
3. Найти и записать в переменную li с идентификатором listItem3 .
4. Найти и записать в переменную коллекцию li c классами list-item */
}

// const h1 = document.querySelector('h1');
// console.log(h1);

// const pWithClassText = document.querySelector('p.text');
// console.log(pWithClassText);

// const liWithIdListItem3 = document.getElementById('listItem3');
// const liWithIdListItem3 = document.querySelector('#listItem3');
// console.log(liWithIdListItem3);

// const liCollection = document.getElementsByClassName('list-item');
// console.log(liCollection);

const listItem3 = document.querySelector('#listItem3');
// console.log(listItem3);

// const listItem3Parent = listItem3.parentElement;
// console.log(listItem3Parent);

const ul = document.querySelector('ul');
// console.log(ul.children);
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.firstElementChild);

// console.log(listItem3.nextSibling);
// console.log(listItem3.nextElementSibling);

// console.log(listItem3.closest('.parent'));

// console.log(ul.textContent);
// ul.textContent = 'some bad string';
// ul.innerHTML = '<b>some bad string</b>';
// listItem3.textContent = 'Some new text';

// Работаем с переменными из задачи 2:
// 1. вывести в консоль текстовое содержимое (без дочерних тегов) параграфа с классов text
// 2. изменить содержимое заголовка h1 на «Title level 1»
// 3. элементу li с идентификатором listItem3 задать содержимое «<strong>List item 3</strong>», текст внутри
// должен быть жирным

// console.log(pWithClassText.textContent);
// h1.textContent = 'Title level 1';
// listItem3.innerHTML = '<strong>List item 3</strong>';

const link = document.querySelector('.link');
// console.log(link.getAttribute('href'));
// link.setAttribute('target', '_blank');
// link.removeAttribute('href');

// link.dataset.customId = 'new custom value';
// console.log(link.dataset.customId);

// Найти и записать в переменную элемент a , который находится в первом параграфе.
// 1. Задать ей атрибут target="_blank" и rel="noopener" .
// 2. Удалить атрибут role .
// 3. Изменить значение атрибута href

// const a = document.querySelector('a');
// a.setAttribute('target', '_blank');
// a.setAttribute('rel', 'noopener');

// a.removeAttribute('role');
// a.setAttribute('href', 'error');

// const paragraph = document.createElement('p');
// paragraph.textContent = 'Hello from JS';
// console.log(paragraph);

// ul.append(paragraph);
// document.body.prepend(paragraph);
// document.body.before(paragraph);
// document.body.after(paragraph);

// document.body.insertAdjacentHTML('beforebegin', '<p>Hello from JS</p>');
// ul.insertAdjacentElement('afterend', paragraph);

// const ulCopy = ul.cloneNode(true);
// document.body.append(ulCopy);

// setTimeout(() => {
//   ulCopy.remove();
// }, 2000);

// Дана ссылка на картинку:
// const imageUrl =
//   'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
// // Вам надо создать через Javascript элемент img , добавить ему атрибут src , значение для которого берем из
// // переменной imageUrl . Вставить этот элемент под заголовок h1 . Далее клонировать картинку и вставить копию
// // в конец страницы

// const img = document.createElement('img');
// // img.src = imageUrl;
// img.width = 200;
// img.height = 200;

// // const h1 = document.querySelector('h1');
// document.body.after(img);

// const imgCopy = img.cloneNode();
// document.body.append(imgCopy);

// const firstListItem = document.querySelector('.list-item');
// console.log(firstListItem.className);

// firstListItem.className = 'text active';

// console.log(firstListItem.classList);
// firstListItem.classList.add('text', 'active');
// firstListItem.classList.remove('some-my-class');
// console.log(firstListItem.classList.contains('list-item'));

// firstListItem.style.backgroundColor = 'red';

// Сгенерировать элементы a на основании массива. Для каждого элемента:
// 1. уставить атрибуту href значение из массива
// 2. в содержимое добавить Link n , где n — индекс + 1 ссылки из массива
// 3. добавить класс link
// 4. выполнить вставку в конец body .
const links = [
  'https://learn.javascript.ru',
  'https://learn.javascript.ru/searching-elements-dom',
  'https://learn.javascript.ru/structure',
  '#test',
];

// const parentDiv = document.createElement('div');
const fragment = document.createDocumentFragment();

links.forEach((href, index) => {
  const link = document.createElement('a');

  link.setAttribute('href', href);
  link.textContent = `Link ${index + 1}`;
  link.classList.add('link');

  fragment.append(link);
  fragment.append(document.createElement('p'));
});

// console.log(parentDiv);
// document.body.append(parentDiv);
console.log(fragment);
document.body.append(fragment);
