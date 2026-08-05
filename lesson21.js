'use strict';
// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };
// const sum = (a, b) => a + b;
// console.log(sum(2, 5));

// const duplicate = a => a * 2;
// console.log(duplicate(4));

// const sayHello = () => {
//   console.log('Hello');
// };
// console.log(sayHello());

// const calculateTotalPrice = (price, quantity) => {
//   const totalPrice = price * quantity;

//   return totalPrice;
// };
// console.log(calculateTotalPrice(100, 3));

// const createUser = (name) => ({ name });
// console.log(createUser('Alex'));

// Создайте стрелочную функцию rgb() , которая будет принимать три
// числовых аргумента и возвращать строку вида 'rgb(23, 100, 134)' .
// Если аргументы не заданы, считать их равными нулю. Не проверять
// переменные на тип данных.

// const user = {
//   userName: 'Alex',

//   sayHelloArrow: null,
//   sayHello() {
//     this.sayHelloArrow = () => console.log(this.userName);
//   },
// };

// user.sayHello();
// user.sayHelloArrow();

// const timer = {
//   seconds: 0,

//   start() {
//     setTimeout(() => {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   },
// };

// timer.start();

// function showArguments() {
//   console.log([...arguments]);
// }
// showArguments(1, 2, 3);

// const showArguments = (...args) => {
//   console.log(args);
// };
// showArguments(1, 2, 3);

// const User = (name) => {
//   this.name = name;
// };

// const user = new User('Alex');
// console.log(user);

// function consoleLog(foo, bar) {
//   foo();
// }

// consoleLog(() => {
//   console.log('hello');
// });

// Переписать код ниже с использованием стрелочных функций:
// переписать все 3 фунции - ask и то, что передаем в нее
// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// ask(
//   'Вы согласны?',
//   function () {
//     alert('Вы согласились.');
//   },
//   function () {
//     alert('Вы отменили выполнение.');
//   },
// );

// function processNumber(number, callback) {
//   console.log('process started')
//   const num = number - 10;

//   callback(num);
// }

// processNumber(19, (value) => {
//   console.log(value * 2);
// });

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// const sum = calculate(10, 5, (a, b) => a + b);
// const difference = calculate(10, 5, (a, b) => a - b);

// console.log(sum);
// console.log(difference);

// Есть функция confirmPassword() , у которой 3 параметра:
// password — строка с паролем;
// runSuccess — функция, которая вызывается, если пароль прошел
// проверку;
// runError — функция, которая вызывается, если пароль не прошел
// проверку.
// Функция confirmPassword() при вызове показывает prompt окно, в
// котором пользователь должен подтвердить свой пароль. Если
// password совпадает с полученным из prompt значением, то вызывается
// функция runSuccess() , в противном случае — runError() .
// На место runSuccess передаем стрелочную функцию, которая
// показывает сообщение в alert вида «Пароль успешно подтвержден»,
// на место runError — «Пароль не совпадает».
// Пример:
// confirmPassword(
//   '1234', // 1 аргумент
//   () => {
//     // 2 аргумент
//     // ...
//   },
//   () => {
//     // 3 аргумент
//     // ...
//   },
// );
// // '1234' будет сверяться с введенным в prompt значением
// confirmPassword(
//   '1234',
//   () => {
//     console.log('Success')
//   },
//   function() {
//     console.log('Error')
//   }
// )

// [].forEach((element, index, array) => {}) //вызывает переданный callback, ничего не возвращает
// [].map((element, index, array) => {}) //создает новый массив на основе старого и возвращает его
// [].find((element, index, array) => {}) //ищет первый илемент, подходящий под условие или undefined
// [].filter((element, index, array) => {}) //создает новый массив из элементов, который подходят под условие
// [].some((element, index, array) => {}) //возвращает true, если хотя бы один элемент массива подходит под условие
// [].every((element, index, array) => {}) //возвращает true, если все элементы массива подходит под условие
// [].reduce((accumulator, element, index, array) => {}, accumulator) //сводит массив к одному значению, возвращает accumulator

// Дан массив:
// const numbers = [32, -7, 74, 0, -46, -2, 101, -13];
// // 1. Используя метод forEach , вывести в консоль только
// // положительные числа.
// // 2. Создать новый массив, состоящий из абсолютных значений чисел
// // массива numbers . Решить через метод map . Для получения
// // абсолютного значение можно воспользоваться методом Math.abs .
// // 3. Найти в исходном массиве число 0 . Берем метод find .
// const findRes = numbers.find((number) => number === 0);
// // 4. Получить новый массив, состоящий только из отрицательных
// // чисел, для решения используем метод filter .
// const filterRes = numbers.filter((number) => number < 0);
// // 5. Через reduce посчитать сумму всех чисел в массиве
// const reduceRes = numbers.reduce((acc, number) => acc + number, 0);
// console.log(findRes);
// console.log(filterRes);
// console.log(reduceRes);

// const numbers = [1, 2, 3];
// const result = numbers.reduce((acc, number) => {
//   console.log(acc, number);
//   return acc + number;
// }, 0);
// console.log(result);

// const users = [
//   {
//     name: 'Alex',
//     age: 15,
//   },
//   { name: 'Oleg', age: 17 },
// ];

// const res = users.reduce((acc, user, index) => {
//   acc[`user${index}`] = user.name;
//   return acc;
// }, {});
// console.log(res);

// function reduce(cb, startValue) {
//   let someRes = startValue;

//   for (const el of array) {
//     const res = cb(el, someRes)
//     someRes = res;
//   }

//   return someRes
// }
// reduce(() => {}, '')

// const numbers = [1, 2, 3];
// const result = numbers.some((number) => number > 1);
// console.log(result);

// const numbers = [1, 2, 3];
// const result = numbers.every((number) => number > 1);
// console.log(result);

// const numbers = [1, 2, 3];
// const result = numbers.filter((number) => number > 1);
// console.log(result);

// const users = [
//   {
//     name: 'Alex',
//     age: 15,
//   },
//   { name: 'Oleg', age: 17 },
// ];

// const res = users.filter((user) => user.age > 16);
// console.log(res);

// const numbers = [1, 2, 3];
// const result = numbers.find((number) => number > 1);
// console.log(result);

// const users = [
//   {
//     name: 'Alex',
//     age: 15,
//   },
//   { name: 'Oleg', age: 17 },
// ];

// const res = users.find((user) => user.age > 16);
// console.log(res);

// const numbers = [1, 2, 3];
// const result = numbers.map((number) => number * 2);

// console.log(result);

// const users = [
//   {
//     name: 'Alex',
//     age: 15,
//   },
//   { name: 'Oleg', age: 17 },
// ];

// const userNames = users.map((user) => user.name);
// console.log(userNames);

// const fruits = ['Apple', 'Banana', 'Orange'];

// fruits.forEach((fruit, index, arr) => {
//   console.log(`Index: ${index}, fruit: ${fruit}`);
//   console.log(arr);
// });

// const numbers = [1, 2, 3];
// let res = 0;
// const result = numbers.forEach((number) => {
//   res += number;
// });

// console.log(res);

function User(name, age) {
  //const this = {}
  this.name = name;
  this.age = age;

  // this.sayHello = function () {
  //   console.log(`Hello ${(this, name)}`);
  // };
  //return this
}
User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

const user1 = new User('Alex', 31);
const user2 = new User('Olga', 18);

// console.log(user1);
// console.log(user2);
// user1.sayHello();

// Напишите функцию-контруктор HtmlElement , которая служит шаблоном
// для объектов такого вида:
// const element = {
// name: 'div',
// content: 'Hello world',
// styles: {
// fontSize: '12px',
// backgroundColor: 'gray'
// // ...
// },
// show: function () {
// this.styles.display = 'block'
// },
// hide: function () {
// this.styles.display = 'none'
// }
// }
// В качестве входных данных выступает 3 поля: name , content и объект
// styles .

// function HtmlElement(name, content, styles) {
//   this.name = name;
//   this.content = content;
//   this.styles = styles;

//   this.show = function () {
//     this.styles.display = 'block';
//   };
// }

// const element = new HtmlElement('div', 'Hello world', {
//   backgroundColor: 'red',
// });
// console.log(element);

//IIFE
// (function (word) {
//   var x = 108;
//   var y = 45;
//   const coords = { x, y };
//   console.log(coords);
// })();

// call - вызывает функцию срауз и позволяет указать this
// apply - вызывает функцию срауз и позволяет указать this
// bind - возвращает функцию с привязанным this

// function showUserName(safeUserName) {
//   console.log(this.userName || safeUserName);
// }

// const user = {
//   userName: null,
// };

// showUserName.call(user, 'Maria');
// showUserName.apply(user, ['Maria']);

// const newFunction = showUserName.bind(user, 'Maria');
// newFunction();

// Есть такой код:
// function changeUserName (newUserName) {
// this.userName = newUserName
// }
// const user = {
// userName: ''
// }
// Задать userName пользователю через глобальную функцию
// changeUserName с помощью:
// 1. декоратора call
// 2. декоратора apply
// 3. новой функции, полученной через bind исходной

function changeUserName(newUserName) {
  this.userName = newUserName;
}
const user = {
  userName: '',
};

changeUserName.call(user, 'Oleg');
console.log(user);
