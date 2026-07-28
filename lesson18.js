// const userName1 = 'Pavel';
// console.log(`Hello, ${userName1}`);

// const userName2 = 'Olga';
// console.log(`Hello, ${userName2}`);

// const userName3 = 'Mark';
// console.log(`Hello, ${userName3}`);

// function sayHello(userName) {
//   console.log(`Hello, ${userName}`);
// }

// sayHello('Pavel');
// sayHello('Olga');
// sayHello('Mark');

//Хорошие примеры имени функции
// getUserName()
// calculateTotalPrice()
// validateEmail()
// showError()

//Пример нрефикса с возвратом булеана
//is
//has
//can
//should

//Плохие примеры имени функции
//func()
//test()
//data()
//abc()
//doIt()
//someFunction()

function doEverything() {
  //получить данные
  //проверить данные
  //посчитать сумму
}

// getUserData()
// validateData()
// calculateTotalPrice()

function formatPrice(price) {
  console.log(`${price} USD`);
}

// formatPrice(100);

function isEmptyString(str) {
  console.log(str === '');
  return str === '';
}

// isEmptyString('');
// isEmptyString('Hello');

function askUserName() {
  const userName = prompt('Enter your name');
  console.log(userName);
}

// function functionName() {
//   //тело функции (действия)
//   console.log('Function example');
// }

// functionName();

function checkAge() {
  const userAge = prompt('Enter some number');

  if (isEmptyString(userAge)) {
    console.log('Empty string :(');
  }

  if (+userAge >= 18) {
    console.log(' HAve access');
  } else {
    console.log(' DO not have access');
  }
}

// checkAge();

// Написать функцию, которая при вызове запрашивает через prompt
// имя пользователя и приветствует его, например Привет, Алексей! .
// Придумайте понятное имя для функции.
// console.log(checkAge.name);

const time = Date.now();

// function showMessage() {
//   const message = 'Hello';
//   console.log(time);
// }

// showMessage();
// showMessage();

let count = 0;

function increaseCount() {
  count++;
}

increaseCount();
increaseCount();

// console.log(count);

const message = 'External message';

// function showMessage() {
//   // const message = 'Local message';
//   console.log(message);
// }

// showMessage();

// console.log(message);

let x = 10;
let y = 20;

//logic
x = 100;

function showSum() {
  console.log(x + y);
}

// showSum();

function sayFullName(firstName = 'UNKNOWN', lastName = 'GUEST') {
  console.log(`Hello, ${firstName} ${lastName}`);
}

// sayFullName(undefined, 'Olga');
// sayFullName('Ivanov', 'Pavel');

function sum(a, b) {
  return a + b;
}

const result = sum(10, 5);
// console.log(result);
// console.log(result * 2);

function checkAge(age) {
  if (age < 18) {
    return 'User does not have access';
  }

  return 'Have access';
}

// console.log(checkAge(16));
// console.log(checkAge(21));

// function showMessage() {
//   console.log('Some message');
// }

// const res = showMessage();
// console.log(res);

// Написать функцию, которая считает сумму x, y, z и выводит в консоль:
// 1. переменные используем внешние;
// 2. переменные используем локальные;
// 3. x, y, z берем из аргументов;
// 4. функция результат не выводит в консоль, а возвращает

// Написать функцию isEven , которая возвращает true , если
// переданный аргумент четный, false — нечетный. Если в качестве
// аргумента выступает не числовое значение, то показать сообщение
// об ошибке.

function isEven(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    console.error('Error');
    return;
  }

  return value % 2 === 0;
}

// console.log(isEven('sfsdf'));
// console.log(isEven(NaN));
// console.log(isEven(10));
// console.log(isEven(5));

//function declaration
// sayHello('Pavel');

// function sayHello(userName) {
//   console.log(`Hello, ${userName}`);
// }

//function expression

const sayHello = function (userName) {
  console.log('Hello' + ' ' + userName);
};

// sayHello('SOME USER');
// console.log(sayHello);

// Написать функцию, которая принимает любую строку, как аргумент, и
// возвращает отчет в виде «Строка ${yourString}" состоит из
// stringLength символов». Реализовать двумя способами —
// через Function Expression и Function Declaration.

// Написать функцию pow(number, n) , где number — переданное при
// вызове число, а n — степень в которую надо возвести number .
// Результат вернуть из функции. Оператор ** и метод Math.pow
// использовать нельзя, реализовать через цикл.

function pow(number, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result = result * number;
  }

  return result;
}

// console.log(pow(2, 0));
// console.log(Math.pow(2, 0));

// Написать функцию, которая принимает строку, как аргумент, и
// возвращает новую строку, но уже без пробелов. Например, Я люблю
// javascript! —> Ялюблюjavascript!

function removeSpaces(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    console.log(i, string[i]);
    if (string[i] !== ' ') {
      result += string[i];
    }
  }

  return result;
}

// console.log(removeSpaces('I love.     JS!    '));

function showResult(value) {
  console.log(`Result: ${value}`);
}

function calculateSum(a, b, callback) {
  const result = a + b;

  callback(result);
}
calculateSum(3, 7, showResult);

function proccessNumber(number, callback) {
  callback(number);
}

function showDouble(number) {
  console.log(number * 2);
}

function showSquare(number) {
  console.log(number * number);
}

proccessNumber(5, showDouble);
proccessNumber(5, showSquare);

// Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
// который хочет получить клиент и верните результат переплаты по кредиту:
// процентная ставка в год — 17%,
// количество лет — 5.
// Мы пишем функцию для хорошего банка, поэтому сумма кредита не
// увеличивается.
