'use strict';

// console.log('Hello world from JS file!');

function getSmth() {
  'use strict';
}

let age = 25;

//let, var, const
// let message = 'Hello';
// // console.log(message);
// message = 123;
// // console.log(message);
// message = 'Oleg';
// message = 'Nice day';
// message = 456;
// console.log(message);

const language = 'JavaScript';
// console.log(language);
// language = 123;
// console.log(language);
// message = '789';

var city = 'Warsaw';
// console.log(city);
// function someFn() {
//   var value = 10;
// }

// console.log(value);

// let value = 10;

// mySuperSecondName

let employeeName = 'Pavel';
// let userAge = 24;
let _user2Age = 23;
let $user2Age = 23;

// const myName = 'Andrei'
// let let = 'value'

const API_URL = 'site.com';
const PI = 3.14;

//Работа с переменными:
// Объявить 2 переменные: name , student
// В name записать свое имя
// В student записать значение из name
// Вывести в консоль значения переменных name и student
let name = '';
let student = name;

//NUMBER
const numberExample = 10;
const numberExample2 = 3;
// console.log(numberExample + numberExample2);
// console.log(numberExample - numberExample2);
// console.log(numberExample * numberExample2);
// console.log(numberExample / numberExample2);

// console.log(NaN); // Not A Number
// console.log(Infinity);
// console.log(10 / 0); //Infinity

//STRING
const firstName = 'Pavel';
const lastName = 'Ivanov';
// const message = `Hello`;

const userName = 'Olga';
const userAge = 18;
const message = `Hello, my name is ${userName}. I am ${userAge} years old`;
// console.log(message);

const message2 =
  'Hello, my name is ' + userName + '. I am ' + userAge + ' years old';
// console.log(message2);
// let message3 = 'Some example';
// message3[0] = 'H';
// console.log(message3);

//BOOLEAN
// true / false
const isTurnedOn = false;
const isLoading = false;

// if (isLoading) {
//   console.log('Application is loading');
// } else {
//   console.log('Application is ready to use');
// }

//Null
let selectedUser = null;
// console.log(selectedUser);

selectedUser = 'Andrei';
// console.log(selectedUser);

//Undefined
let userNameTest;
// console.log(userNameTest);

//Object
const user = {
  name: 'Mark',
  age: 30,
};

// console.log(user.name);
// console.log(user.age);
// console.log(user.secondName);
// let someValue;

//Symbol
const symbol1 = Symbol('testString');
// console.log(symbol1);
const symbol2 = Symbol('testString');
// console.log(symbol1 === symbol2);

//BigIng
const bigNumber = 39999n; //> 2 ^ 54 -1
// console.log(bigNumber);

//TYPEOF
// console.log(typeof 'Hello');
// console.log(typeof 100); //console.log('number')
// console.log(typeof true);

const someText = 'Hello';
const someNumber = 100;
const nullExample = null;
const undefinedExample = undefined;

// console.log(typeof someText);
// console.log(typeof someNumber);
// console.log(typeof nullExample);
// console.log(typeof undefinedExample);
// console.log(nullExample === null);

// Даны 4 переменные:
// let text = 'Hello'
// let counter = 100500
// let isOpen = true
// let someValue = null
// Объявить свои 4 переменные, где имя каждой type + Имя
// переменной из условия. Например, для text будет typeText .
// Записать в них результат выполнения оператора typeof и
// соответствующей переменной из условия.
// Вывести значения новых переменных в консоль
const typeText = typeof text;
// console.log(typeText);

//Преобразование типов
// console.log(typeof String(5));
// console.log('5' + 2);
// console.log('5' - 2);

//к строке
// console.log(String(5));
// console.log(String(-2));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String(user));

//к числу
// console.log(Number('123'));
// console.log(Number('10.5'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(Number('Hello!'));
// console.log(Number(''));

// console.log(+'123');
// console.log(+'10.5');
// console.log(+true);

//к boolean
// console.log(Boolean(-5));
// console.log(Boolean(0));
// console.log(Boolean(true));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean('a'));
// console.log(Boolean(NaN));

// console.log(!!-5);
// console.log(!!0);

// console.log(!-5);
// console.log(!0);

// String(5)
// String(-2)
// Boolean('Some string')
// Boolean('')
// Boolean(' ')
// String(0)
// String(NaN) //'NaN'
// Number(false)
// Number('Hi')
// Boolean(-25)
// +' '
// Number(' \n \t ')
// String(undefined)
// +null
// Boolean(undefined)
// Number(undefined)
// console.log(Number(false));
// console.log(+' ');
// console.log(Number(' \n \t '));

//alert
// const alertMessage = 'Hello JS!';
// alert(alertMessage);

// prompt
// let userAgePrompt = +prompt('Your age?');
// console.log(typeof userAgePrompt);

//confirm
// const isConfirmed = confirm('Do you want to continue?');
// console.log(isConfirmed);

// if (isConfirmed) {
//   console.log('OK');
// }

// Сперва запросить при помощи prompt у пользователя имя, затем
// фамилию. Соединить полученные значения в одну строку (не забудь
// пробел) и показать результат в alert

// const firstUserName = prompt('Enter first name');
// const lastUserName = prompt('Enter last name');

// const resultMessage = `${firstUserName} ${lastUserName}`;
// console.log(resultMessage); firstUserName + " " + lastUserName

// У Павла зарплата 1500, у Ольги 1200, а у Марка 2100. Создать
// понятную переменную для каждого сотрудника и записать туда его
// зарплату. Сколько ребята получают суммарно? Результат показать в
// сообщении через alert .

const paverSalary = 1500;
const olgaSalary = 1200;
const markSalary = 2100;

const totalSalary = paverSalary + olgaSalary + markSalary;
// alert(`Total salary: ${totalSalary}`);
console.log('blabla'.length);
