// const fruit1 = 'Apple';
// const fruit2 = 'Banana';
// const fruit3 = 'Orange';
// const fruit4 = 'Mango';

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// console.log(fruits);

// const numbers = [10, 20, 30];
// console.log(numbers);

// const products = [
//   { id: 1, title: 'Laptop' }, //0
//   { id: 2, title: 'Phone' }, //1
//   { id: 3, title: 'Monitor' }, //2
// ];
// console.log(products[1]);
// console.log(products.length);
// console.log(products.length - 1);
// console.log(products[products.length - 1]);

// const someArr = [];
// console.log(someArr);

// const mixedArray = ['Hello', 0, true, null];
// console.log(mixedArray);

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// fruits[1] = 'Mango';
// console.log(fruits);
// fruits[fruits.length] = 'Melon';
// fruits[7] = 'Melon';
// console.log(fruits);

// Создать массив fruits :
// 1. предусмотреть в нем четыре произвольных фрукта
// 2. вывести в консоль второй и четвертый
// 3. вывести в консоль длину массива
// 4. добавить пятый фрукт
// 5. третий фрукт заменить на другой //то есть любой произвольный другой фрукт
// 6. проверить результат в консоли

// console.log(typeof []);
// console.log(Array.isArray('123'));

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// const copy = fruits;

// copy[0] = 'Mango';
// console.log(fruits);
// console.log(copy);

// const arr1 = [1, 2, 3];
// const arr2 = arr1; //[1, 2, 3];
// console.log(arr1 === arr2);

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// // const fruitsCopy = fruits.slice();
// // const fruitsCopy = [].concat(fruits);
// const fruitsCopy = [];
// for (let i = 0; i < fruits.length; i++) {
//   // console.log(fruits[i]);
//   fruitsCopy[i] = fruits[i];
// }

// fruitsCopy[0] = 'Mango';
// console.log(fruits);
// console.log(fruitsCopy);
// console.log(fruits === fruitsCopy);

// const users = [
//   {
//     name: 'alex',
//   },
//   {
//     name: 'olga',
//   },
// ];

// const usersCopy = users.slice();
// usersCopy[0].name = 'Maria';

// console.log(users);
// console.log(usersCopy);

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// Дан массив:
// const numbers = [27, -3, 92, 0, -17, -2, 108]
// Вывести в консоль строку > 0 для положительных чисел, < 0 — для
// отрицательных, 0 — для числа 0 .
// 1. Решить через цикл for
// 2. Решить через цикл for..of
// `число 27 > 0`

// Написать функцию, которая принимает массив в качестве аргумента и
// возвращает сумму всех элементов массива. Исходный массив всегда
// содержит только числа. Пример:
// calcSumArr([2, 5, 1, 3]) // -> 11

// Написать функцию, которая добавляет в конец массива новый
// элемент. Она принимает два аргумента arr и item , где arr — массив
// в который добавляется item . Использовать метод push нельзя, в
// решении пригодится свойство length .
// Пример:
// const arr = ['a', 'b']
// addItem(arr, 'c')
// console.log(arr) // -> ['a', 'b', 'c']

// arr[arr.length] = 'Melon';

// const someArr = [1, 2];
// const res = someArr.push(5, 6);
// console.log(someArr);
// console.log(res);

// // Есть массив с объектами:
// const users = [
//   { name: 'Alex', age: 31 },
//   { name: 'Olga', age: 17 },
//   { name: 'Carl', age: 15 },
//   { name: 'Nancy', age: 28 },
//   { name: 'Eric', age: 9 },
// ];
// // Создать новый массив с именами пользователей, у которых возраст
// // меньше 18 . Для решения задачи используем цикл for..of и метод
// // push .
// const userNames = [];
// for (const user of users) {
//   if (user.age < 18) {
//     userNames.push(user.name);
//   }
// }

// console.log(userNames);

// [].push(123 ,123, 123,234) //добавляет в конец ; изменяет массив, на котором применяем метод
// [].unshift(123 ,123, 123,234) //добавляет в начало ; изменяет массив, на котором применяем метод
// [].pop()  //удаляет последний элемент; изменяет массив, на котором применяем метод
// [].shift() //удаляет первый элемент; изменяет массив, на котором применяем метод
// [].concat(['JS', 'React']) //объединяет массивы; не изменяет массив, на котором применяем метод
// [].indexOf('Apple') //ищет элемент в массиве и возвращает его индекс или -1, если не найден
// [].indludes('Apple') //ищет элемент в массиве и возвращает true, false если не найден
// [].reverse() //разворачивает массив; изменяет массив, на котором применяем метод (toReversed не меняет порядок)
// [].slice(from, to) // вырезает массив от и до переданного значения, возращая новый массив
// [].splice() //может удалять, добавлять, аменять элементы массива; изменяет массив, на котором применяем метод
// [].splice(startIndex, deleteCount, item1, imte2, item3)
// [].join(',') //превращает массив в одну строку; не изменяет массив, на котором применяем метод

// Дан массив:
// const stack = ['React', 'Vue', 'Angular']
// 1. Удалить последний элемент и показать в консоль
// 2. Добавить Svelte и Stimulus в начало массива
// 3. Развернуть массив, т.е. последний должен стать первым, а
// первый — последним
// 4. Добавить в конец Solid
// 5. Показать в консоль индекс Vue
// 6. Превратить массив в строку, где разделителем между каждым
// элементом будет / . Результат записать в переменную и
// проверить через консоль

// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// const res = fruits.join('');
// console.log(fruits);
// console.log(res);

// const alexUser = { name: 'Alex', age: 31 };

// const users = [
//   { name: 'Alex', age: 31 },
//   { name: 'Olga', age: 17 },
//   { name: 'Carl', age: 15 },
//   { name: 'Nancy', age: 28 },
//   { name: 'Eric', age: 9 },
// ];
// console.log(users);

// console.log(users.includes(alexUser));

// const str = 'Hello!';
// const arr = str.split('');
// arr.reverse();
// console.log(arr.join(''));
