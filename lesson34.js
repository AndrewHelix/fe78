//Чем отличается margin от padding?
//Как ведут себя margin у двух элементов по соседству?
//Какие подходы в верстке вам известны (float, flex, grid, etc.)?
//Чем отличаются position static, absolute, relative, fixed?
//Как отпозиционировать один элемент относительно другого?
//Какие вы знаете псевдоэлементы? Где их используют?
//Расскажите о принципах Responsive верстки
//Расскажите способы центрирования элементов
//Какие есть принципы семантической верстки?

//JS
//В чем разница между ключевыми словами «var», «let» и «const»?
//В чем разница между null и undefined?
//Назовите методы массивов и расскажите для чего они нужны
//В чем разница между операторами "==" и "==="?
//Почему результатом сравнения двух похожих объектов является false?
//Как определить наличие свойства в объекте?
//Что такое DOM?
//Что такое область видимости (Scope)?
//Что такое замыкание (Closures)?
//Какая разница между декларацией функции (function declaration) и
//функциональным выражением (function expression)?
//Что такое стрелочные функции (Arrow Functions)? какие их особенности?
//Для чего предназначены методы setTimeout и setInterval?
//Что такое рекурсия?
//Что такое классы (Classes)?
//Каковы основные типы данных в JavaScript?
//Как работает event loop в JavaScript?
//Как работает прототипное наследование в JavaScript?
//Как обрабатывать ошибки в JavaScript?
//Что такое Promise в JavaScript и какие методы он имеет?
//Как работает async/await в JavaScript?

// function test() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counterFn = test();
// console.log(counterFn());
// console.log(counterFn());

// const counterFn2 = test();
// console.log(counterFn2());
// console.log(counterFn2());

// function helloUser(name) {
//   console.log(arguments);
// }
// console.log(helloUser('blabla', 'hello', 'newString'));

// const helloUser2 = (name, ...rest) => {
//   console.log(name, rest);
// };
// console.log(helloUser2('blabla', 1, true, {}));
// let count = 0;
// function countNum() {
//   count++;
//   console.log(count);

//   if (count > 5) {
//     return;
//   }
//   countNum();
// }

// countNum();
// new Promise((resolve, reject) => {}).then(res => console.log(res)).catch().finally()

// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()

// function getUser() {
//   console.log('start');
//   fetch().then(console.log);
//   console.log('end');
// }

// async function getUser() {
//   console.log('start');
//   const user = await fetch();
//   console.log(user);
//   console.log('end');
// }
// const USER_DATA_LS_KEY = 'userData';

// localStorage.setItem('userName', 'oleg');

// const json = JSON.stringify([{ id: 22, type: 'passport' }]);
// localStorage.setItem(USER_DATA_LS_KEY, json);

// const userDataFromLS = localStorage.getItem(USER_DATA_LS_KEY);
// const userData = JSON.parse(userDataFromLS);
// console.log(userData);

// // localStorage.removeItem(USER_DATA_LS_KEY);

// // localStorage.clear();
// console.log(localStorage.length);

// При первом посещении страницы пользователю показываем окно `prompt`, где просим ввести его имя.

// Далее сохраняем имя в `localStorage` под ключом `userName`.

// При повторном входе или перезагрузке страницы вместо `prompt` показываем сообщение в `alert`:

// ```
// Добро пожаловать, userName
// ```

// где `userName` — имя пользователя, которое было записано ранее в хранилище.

// Если пользователь не ввел имя или закрыл окно `prompt`, то показываем его повторно.
// !prompt()

// function askUserName() {
//   let userName = localStorage.getItem('userName');

//   while (!userName) {
//     const enteredUserName = prompt('Enter your name');
//     if (!enteredUserName) {
//       continue;
//     }

//     if (!enteredUserName.trim()) {
//       continue;
//     }

//     userName = enteredUserName.trim();

//     localStorage.setItem('userName', userName);
//   }

//   alert(`Hello, ${userName}`);
// }

// askUserName();

// С ниже приведенным массивом пользователей решить следующие задачи:
// 1. Получить средний возраст пользователей.
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли
// пользователь соответствующего возраста.
// Например, есть ли пользователь, которому 22 года? Ответ должен быть: true
const users = [
  { id: 1, username: 'Michael Lawson', age: 22 },
  {
    id: 2,
    username: 'Tom Spot',
    age: 32,
  },
  {
    id: 3,
    username: 'Kate Ford',
    age: 18,
  },
];

//1
const totalAge = users.reduce((acc, user) => {
  return acc + user.age;
}, 0);
console.log(totalAge / users.length);

//2
console.log(users.sort((prev, next) => prev.age - next.age));

//3
const doesUserExist1 = !!users.find((user) => user.age === 22);
console.log(doesUserExist1);
const doesUserExist2 = users.some((user) => user.age === 22);
console.log(doesUserExist2);
