//=== OPERATORS
// const count = 10;

// console.log(count + 5);
// console.log(count - 5);
// console.log(count * 5);
// console.log(count / 5);
// console.log(count % 3);
// console.log(6 % 2); //0
// console.log(7 % 2); //1
// console.log(2 ** 3); //8
// console.log('Pavel' + ' ' + 'Ivanov');
// console.log('Hello' + 5);
// console.log(4 + (5 + 'px'));

// Создать переменные x , y и z . Записать в каждую произвольное
// положительное число, далее:
// вывести в консоль сумму x , y и z // +
// вывести в консоль разность z и x // -
// вывести в консоль произведение x и y // *
// вывести в консоль результат возведения z в степень y // **
// посчитать остаток от деления y на x // %

//=== СОСТАВНОЕ ПРИСВАИВАНИЕ
// let count = 10;
// count += 5; //count = count + 5
// count -= 5; //count = count - 5
// count *= 5; //count = count * 5
// count /= 5; //count = count / 5
// count %= 5; //count = count % 5
// count **= 5; //count = count ** 5;

// let totalPrice = 0;
// totalPrice += 250; // total = total + 250;
// totalPrice += 100;
// totalPrice += 50;
// console.log(totalPrice);

//=== ИКРЕМЕНТ И ДЕКРЕМЕНТ
// let count = 0;
// const res = count++;
// // const res = --count;
// console.log(`Operator result: ${res}. Count: ${count}`);

//=== ОПЕРАТОРЫ РАВЕНСТВА
//==
// console.log('5 == 5', 5 == 5);
// console.log("5 == '5'", 5 == '5');
// console.log('false == 0', false == 0);
// console.log('null == undefined', null == undefined);

//===
// console.log('5 === 5', 5 === 5);
// console.log("5 === '5'", 5 === '5');
// console.log('false === 0', false === 0);
// console.log('null === undefined', null === undefined);
// console.log("'5' === '5'", '5' === '5');

// != / !==
// console.log("5 !== '5'", 5 !== '5');

//=== ОПЕРАТОРЫ СРАВНЕНИЯ
// console.log('10 > 5', 10 > 5);
// console.log('10 < 5', 10 < 5);
// console.log('10 >= 10', 10 >= 10);
// console.log('10 <= 15', 10 <= 15);
// const userAge = 18;
// const canAccess = userAge >= 18;
// console.log(canAccess);

// console.log('apple > banana', 'apple' > 'banana');
// console.log('cat > car', 'cat' > 'car');
// console.log('t'.charCodeAt());
// console.log('r'.charCodeAt());

//=== ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
//&& - И
//|| - ИЛИ
// ! - НЕ
// const age = 18;
// const hasTicket = true;
// const canAccess = age >= 18 && '' && hasTicket && 'some str';
// console.log(canAccess);

// const isAdmin = false;
// const isManager = false;
// console.log('1' || isAdmin || isManager || 0);

// console.log('!true', !true);
// console.log('!false', !false);

// console.log("!'Hello'", !'Hello');
// console.log('!0', !0);
// console.log('!null', !null);

// console.log('!!Hello', !!'Hello');
// console.log('!!""', !!'');
// console.log('!!0', !!0);

//=== ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ
// const user = null;
// const result = user ?? 'Guest';
// console.log(result); //Guest

// console.log("'' ?? 'Guest'", '' ?? 'Guest');
// console.log('0 ?? 100', 0 ?? 100);
// console.log('0 || 100', 0 || 100);

// Записать в переменную someString результат ввода из prompt , используя оператор
// нулевого слияния (??). Если пользователь закрыл окно prompt , то значение
// переменной someString должно быть равно «Default string». Результат проверить в
// консоли.

// const promptResult = prompt('Enter string') ?? 'Default string'; //null ?? 'Default string'
// console.log(promptResult);

//при сложении со строкой - приводит к строке
//при других мат. операциях пытается преобразовать к числу
// console.log('1' + 1);
// console.log('2' / 2);

// '' + 1 + 0 // '10'
// '' - 1 + 0 // -1
// true + false // 1
// 6 / '3' // 2
// '2' * '3' // 6
// 4 + 5 + 'px' // 4 + 5 = 9, '9px'
// '$' + 4 + 5 // '$45'
// '4' - 2 // 2
// '4px' - 2 // NaN
// ' -9 ' + 5 // ' -9 5'
// ' -9 ' - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// ' \t \n' - 2 // -2

//=== УСЛОВИЯ
// const userAge = 21;
// if (userAge >= 18) {
//   console.log('=> 18');
// } else if (userAge >= 20) {
//   console.log('=> 20');
// } else {
//   console.log('Some error');
// }

// const userAge = 17;
// const hasTicket = true;
// if (userAge >= 18 && hasTicket) {
//   console.log('User has access');
// } else {
//   console.log('Not valid user');
// }

// const isBlocked = false;
// if (!isBlocked) {
//   console.log('User is active');
// }

// if (isLoggedIn) {
//   if (userRole === 'admin') {
//     console.log('Open admin pannel')
//   } else {
//     console.log('Open user profile')
//   }
// }

// Запросить у пользователя любое число через prompt . Если число четное, то
// выводим в консоль «Число n четное», в противном случае — «Число n нечетное»,
// где n — полученное число из prompt .
// * Если пользователь ввел значение, которое не преобразуется в число, показать в
// alert сообщение с ошибкой ввода

// const userInput = prompt('Write any number');

// if (userInput === null) {
//   alert('User closed app');
// } else {
//   const number = +userInput;

//   if (Number.isNaN(number)) {
//     alert('Input error');
//   } else if (!(number % 2)) {
//     console.log('число ченое');
//   } else {
//     console.log('число неченое');
//   }
// }

// // Найти наибольшее из чисел и вывести в консоль.
// let a = 15;
// let b = -8;
// let c = 23;

// // if (a >= b && a >= c) {
// //   console.log(a);
// // } else if (b >= a && b >= c) {
// //   console.log(b);
// // } else {
// //   console.log(c);
// // }

// let max = a;

// if (b > max) {
//   max = b;
// }

// if (c > max) {
//   max = c;
// }

// console.log(max);

//=== ЦИКЛ
// let counter = 0;
// while (counter < 5) {
//   console.log(counter);
//   counter++;
// }

// Вывести в консоль квадраты чисел от 0 до 10 (не включая 10) — т.е. вывести числа
// 0, 1, 4, 9, 16... Используем цикл while
// let number = 0;
// while (number < 10) {
//   console.log(number ** 2);
//   number++;
// }

//for (initialization; condition; step) {}
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// Вывести в консоль сумму чисел от 0 до 20 — т.е. 0 + 1 + 2 + 3 + ... + 20. Используем
// цикл for .
// * Если число кратно 5, то итерацию пропускаем ( continue ).
// * Как только значение суммы станет больше 15, принудительно завершить цикл
// ( break ).
// let sum = 0;

// for (let i = 0; i <= 20; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }

//   sum += i;

//   if (sum > 15) {
//     break;
//   }
// }

// console.log(sum);

// let counter = 0;
// do {
//   console.log(counter);
//   counter++;
// } while (counter < 0);

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если
// посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл
// должен спрашивать число пока либо посетитель не введёт число большее 100,
// либо не нажмёт кнопку Отмена (ESC). Предполагается, что посетитель вводит
// только числа. Предусматривать обработку нечисловых строк в этой задаче
// необязательно.

// let value;

// do {
//   value = prompt('Write a number')
// } while(value !== null && +value <= 100)

const role = 'manager1';
// if (role === 'admin') {
//   console.log('Oped admin panel');
// } else if (role === 'manager') {
//   console.log('Open manager dashboard');
// } else if (role === 'user') {
//   console.log('Open user profile');
// } else {
//   console.log('Unknow user');
// }

//===
switch (role) {
  case 'admin':
  // console.log('Oped admin panel');
  // break;
  case 'manager': {
    console.log('I know this user');
    // console.log('Open manager dashboard');
    break;
  }
  default:
    console.log('Unknow user');
    break;
}
