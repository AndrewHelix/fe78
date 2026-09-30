"use strict";
// const numbers = [-2, 1, 3, -5, 7, 20];
// const result = [];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   if (element > 0) {
//     result.push(element * element);
//   }
// }
// // console.log(result);
// const result2 = numbers
//   .filter((number) => number > 0)
//   .map((number) => number * number);
// // console.log(result2);
// function calcNumbers(num1: number, num2: number) {
//   return num1 + num2;
// }
// // console.log(calcNumbers(1, 2));
// // console.log(calcNumbers(3, 4));
// let total = 0;
// function addToTotal(num: number) {
//   total += num;
//   return total;
// }
// // console.log(addToTotal(10));
// // console.log(addToTotal(10));
// function addRoleToUser(user: { role: string }) {
//   return {
//     ...user,
//     role: 'admin',
//   };
// }
// const user = {
//   id: 1,
//   role: 'user',
// };
// const updatedUser = addRoleToUser(user);
// console.log(user);
// console.log(updatedUser);
// const sum = function (a: number, b: number) {
//   return a + b;
// };
// const sumArr = (a: number, b: number) => a + b;
// function makeSomeOperation(a: number, fn: (a: number) => void) {
//   fn(a);
// }
// const operations = {
//   sum: (a: number, b: number) => a + b,
// };
// function returnFn() {
//   return () => {};
// }
// const olderThan = (age: number) => (user: any) => user.age > age;
// const users = [
//   { name: 'Alex', age: 35 },
//   { name: 'Max', age: 17 },
// ];
// const olderThan18 = users.filter(olderThan(18));
// const olderThan30 = users.filter(olderThan(30));
// let name1 = 'Alex';
// name1.toUpperCase();
// console.log(name1);
// const numbers2 = [2, 1];
// // numbers2.push(4);
// // console.log(numbers2);
// const updatedNumbers = [...numbers2, 4];
// // console.log(numbers2);
// // console.log(updatedNumbers);
// const filteredUsers = users.filter((user) => user.name !== 'Alex');
// const sortedNumbers = numbers2.toSorted(
//   (prev: number, next: number) => prev - next,
// );
// console.log(numbers2);
// console.log(sortedNumbers);
// const user3 = {
//   id: 1,
//   name: 'Alex',
//   address: {
//     city: 'Minsk',
//   },
// };
// const user3Copy = {
//   ...user3,
//   address: {
//     ...user3.address,
//     city: 'Warsaw',
//   },
// };
// // user3Copy.address.city = 'Warsaw';
// console.log(user3);
// console.log(user3Copy);
// const square = (number: number) => number * number;
// const res = () => square(5) + square(5); //25 + 25
// const cacheRes = res();
// const randomRes = () => Math.random() + Math.random(); // ????? + ?????
// // Date.now()
// const cacheRandomRes = randomRes();
// const sum = (a: number, b: number) => a + b;
// const sum = (a: number) => (b: number) => a + b;
// console.log(sum(2)(3));
// const addTax = (taxRate: number) => (price: number) => price + price * taxRate;
// const addTwentyPercentTax = addTax(0.2);
// const addTenPercentTax = addTax(0.1);
// console.log(addTwentyPercentTax(100));
// console.log(addTwentyPercentTax(500));
// console.log(addTenPercentTax(100));
//λx. x + 1; >>> x => x + 1
//(λx. x + 1) 5 >>> (x => x + 1)(5)
// const firstUser = users[100]
// user.name
// const names = users.map((user) => user.name).filter(); //0(n) + O(n) = O(2n)
// users.forEach((user) => {
//   // 1, 2, 3
//   users.forEach((user) => {
//     // 1 2 3, 1 2 3, 1 2 3
//     console.log();
//   });
// }); //O(n^2)
const users = [
    {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
        age: 23,
    },
    {
        id: 8,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Lindsay',
        last_name: 'Ferguson',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
        age: 20,
    },
    {
        id: 9,
        email: 'tobias.funke@reqres.in',
        first_name: 'Tobias',
        last_name: 'Funke',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
        age: 40,
    },
    {
        id: 10,
        email: 'byron.fields@reqres.in',
        first_name: 'Byron',
        last_name: 'Fields',
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
        age: 36,
    },
    {
        id: 11,
        email: 'george.edwards@reqres.in',
        first_name: 'George',
        last_name: 'Edwards',
        avatar: 'https://reqres.in/img/faces/11-image.jpg',
        age: 70,
    },
    {
        id: 12,
        email: 'rachel.howell@reqres.in',
        first_name: 'Rachel',
        last_name: 'Howell',
        avatar: 'https://reqres.in/img/faces/12-image.jpg',
        age: 45,
    },
];
// C массивом данных пользователей сделать следующий задачи, используя
// map/reduce вместо for, forEach:
// 1. Получить строку с именами и фамилиями всех пользователей через запятую.
const fullNames = users
    .map((user) => `${user.first_name} ${user.last_name}`)
    .join(', ');
console.log(fullNames);
//2. Создать массив из emails по алфавиту.
const sortedEmails = users
    .map((user) => user.email)
    .toSorted((a, b) => a.localeCompare(b));
console.log(sortedEmails);
// 3. Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию
const normalizedUsers = users.map((user) => ({
    id: user.id,
    username: `${user.first_name} ${user.last_name}`,
}));
console.log(normalizedUsers);
// 4. Создать массив юзеров, где они отсортированы по возрасту по возрастанию и
// все пользователи младше 40 лет
const sortedUsersUnder40 = users
    .filter((user) => user.age < 40)
    .toSorted((a, b) => a.age - b.age);
console.log(sortedUsersUnder40);
// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
const statistics = users.reduce((acc, user) => {
    return {
        totalAge: acc.totalAge + user.age,
        olderThan30: acc.olderThan30 + Number(user.age > 30),
        olderThan40: acc.olderThan40 + Number(user.age > 40),
        olderThan18: acc.olderThan18 + Number(user.age > 18),
    };
}, {
    totalAge: 0,
    olderThan30: 0,
    olderThan40: 0,
    olderThan18: 0,
});
const ageStatistics = {
    avgAge: users.length > 0 ? statistics.totalAge / users.length : 0,
    olderThan30: statistics.olderThan30,
    olderThan40: statistics.olderThan40,
    olderThan18: statistics.olderThan18,
};
console.log(ageStatistics);
// 6. Создать объект, где ключ, это первая буква фамилии, а значение - массив из
// фамилий пользователей начинающихся на эту букву. Объект должен состоять
// только из ключей существующих фамилий в этом массиве. Например в этом
// массиве нет фамилии с букву Y, а значит и такого поля не должно быть в
// объекте. Пример того, что надо получить, когда пользователи имеют
// следующие фамилии Snow, Felton , Ford, Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }
const lastNames = users.reduce((acc, user) => {
    const lastName = user.last_name;
    const firstLetter = lastName[0].toLowerCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(lastName);
    return acc;
}, {});
console.log(lastNames);
