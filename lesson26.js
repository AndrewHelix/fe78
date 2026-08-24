//math.js
//script.js
// import { calcSum, calcMultiply, PI as mathPI } from './math.js';
import * as mathModule from './math.js';
import logMsg, { someStr } from './logger.js';

const sum = mathModule.calcSum(10, 5);
const result = mathModule.calcMultiply(3, 4);

// logMsg(sum);
// logMsg(result);
// logMsg(mathModule.mathPI);
// console.log(someStr);

// // script.js
// function calcSum(a, b) {
//   return a + b;
// }
// function handleSubmitForm(event) {
//   event.preventDefault();
//   const { currentTarget } = event;
//   console.log(`Form has been sent!`);
//   currentTarget.reset();
// }
// function showElement(element) {
//   element.classList.add('show');
// }
// function calcCircleArea(radius) {
//   const pi = 3.14;
//   return radius ** 2 * pi;
// }
// function paintOverElement(element, color) {
//   element.style.backgroundColor = color;
// }
// function handleClick(event) {
//   event.preventDefault();
//   console.log(`Element is ${event.target.tagName}`);
// }
// // Calling
// const sum = calcSum(23, 8);
// const circleArea = calcCircleArea(67);
// console.log(sum);
// console.log(circleArea);
// document.body.addEventListener('click', handleClick);
// paintOverElement(document.body, '#f2f3f5');

// Ваша задача — разложить функции из этого файла по модулям.
// Математические функции вынести в модуль math.js ,
// функции для dom элементов в dom.js ,
// обработчики событий в handlers.js .
// Следующим шагом подключить в script.js необходимые функции,
// они находятся после комментария Calling.
// Довести задачу до рабочего состояния

// const users = ['Olga', ['Viktor', 'Tsoy'], 'John'];
// // const user1 = users[0]
// // const user2 = users[1]
// const [user1, [user2FisrtName, user2SecondName], user3, user4 = 'Oleg'] = users;

// console.log(user2FisrtName, user2SecondName);

// let a = 10;
// let b = 20;

// // const temp = a;
// // a = b;
// // b = temp;
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Дан массив:
// const users = ['Olga', 'Viktor', 'John', 'Peter'];
// // 1. Создать переменные для каждого пользователя используя
// // деструктуризацию массива users
// // const [user1, user2, user3, user4] = users;
// // console.log(user1);
// // 2. Создать переменные для 1-го и 3-го пользователя используя
// // деструктуризацию массива users
// let [user1, , user3] = users;

// // 3. Обменять значения между переменными п.2
// [user1, user3] = [user3, user1];
// console.log(user1, user3);

// // Дан массив:
// const data = [
//   ['name', 'Anna'],
//   ['age', 26],
//   ['profession', 'Developer'],
// ];
// // Создать объект user , используя перебор массива data и
// // деструктуризацию.
// // Должен получиться такой объект:
// // const object = {
// //   name: 'Anna',
// //   age: 26,
// //   profession: 'Developer',
// // };

// const user = {};

// data.forEach(([key, value]) => {
//   user[key] = value;
// });

// console.log(user);

// Дан массив:
// const profile = ['codesweetly.com', 'Male', ['John', 'Doe']];
// // Создать переменные website и userName через деструктуризацию
// // массива profile
// //userName должен содержать значение John

// const [website, , [userName]] = profile;

// console.log(website, userName);

// const user = {
//   name: 'Anna',
//   // age: 26,
//   personalData: {
//     id: 123,
//     gender: 'Female',
//   },
// };

// const name = user.name;
// const age = user.age;

// const {
//   age = 18,
//   name: userName = 'unknownUser',
//   personalData: { id, gender },
// } = user;
// console.log(userName, age, gender);

// // Дан объект:
// const car = {
//   brand: 'KIA',
//   age: '2019',
// };
// // Создать переменные brand , ageCar , isTruck используя
// // деструктуризацию объекта car . isTruck задать значение по
// // умолчанию false

// // Дан объект:
// const profile = {
//   website: 'codesweetly.com',
//   gender: 'Female',
//   fullName: {
//     firstName: 'Anna',
//     lastName: 'Johnson',
//   },
//   children: ['Lena', 'Ivan'],
// };
// // Создать переменные website , userName (Anna), child1 и child2 через
// // деструктуризацию объекта profile .

// const { website, fullName: { firstName: userName }, children: [child1, child2] } = profile;

//REST
// const users = ['Olga', 'Viktor', 'John', 'Peter'];
// const [firstUser, ...otherUsers] = users;
// console.log(otherUsers);

// const user = {
//   name: 'Anna',
//   age: 26,
//   personalData: {
//     id: 123,
//     gender: 'Female',
//   },
// };

// const { name, ...otherInfo } = user;
// console.log(otherInfo);

// function calcSum(message, ...numbers) {
//   console.log(message);
//   return numbers.reduce((acc, number) => acc + number, 0);
// }

// console.log(calcSum('Some message', 1, 2, 3));

//SPREAD
// const numbers = [1, 2, 3];
// console.log(...numbers);

// const secondNumbers = [4, 5, 6];

// const allNumbers = [...numbers, ...secondNumbers];
// console.log(allNumbers);

// const users = ['Olga', 'Viktor', 'John'];
// const usersCopy = [...users];
// usersCopy.push('Peter');

// console.log(users);
// console.log(usersCopy);

// const user = {
//   name: 'Anna',
//   age: 26,
//   personalData: {
//     id: 123,
//     gender: 'Female',
//   },
// };

// const additionalData = {
//   city: 'Minsk',
// };

// const userCopy = {
//   ...user,
//   ...additionalData,
// };
// userCopy.name = 'New name';
// userCopy.personalData.id = 456;

// console.log(user);
// console.log(userCopy);

function printUser({ name: userName, age = 18 }) {
  console.log(userName);
  console.log(age);
}

const user = {
  name: 'Anna',
  // age: 26,
  personalData: {
    id: 123,
    gender: 'Female',
  },
};

printUser(user);

function printFirstTwoUsers([user1, ...otherNames]) {
  console.log(user1);
  console.log(otherNames);
}

printFirstTwoUsers(['Olga', 'Viktor', 'John']);
