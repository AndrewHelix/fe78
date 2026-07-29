// const userName = 'Pavel';
// const userAge = 25;
// const userEmail = 'example@mail.com';

// const user = {
//   //key: value
//   name: 'Pavel',
//   age: 25,
//   isAdmin: true,
//   phone: null,
//   skill: ['HTML', 'CSS'],
//   // address: {
//   //   country: 'Belarus',
//   //   city: 'Minsk',
//   // },
//   'first name': 'some example',
//   someComplexKey: 'Some value',
// };
// console.log(user.address);
// console.log(user.address?.city);

// const userName = user.name;
// console.log(userName);
// console.log(user.name);

const someKey = 'first name';
// console.log(user[someKey]);
// console.log(user['first name']);
// console.log(user.someKey); //invalid syntax
// console.log(user.age);

// const user2 = new Object();
// console.log(user2);

// user.age = 26;
// user.email = 'example123@mail.com';
// user.age = 28;

const newKey = 'newKeyExample';
// user[newKey] = 'new value';

// delete user.someComplexKey;

// console.log(user);

// Создать объект user :
// 1. предусмотреть в нем свойства name , age , phone , email , password //указать их при создании
// 2. измените значение password на новое
// 3. добавьте свойство city
// 4. удалите phone

// Создать объект из одной любой строки таблицы:
// Вместо День , используем id .

const age = 25;

// const user3 = {
//   [newKey]: 'some new value',
//   age,
// };

// console.log('key' in user3);
// console.log(user3.hasOwnProperty('key'));

//string, number, boolean, null, undefined
const a = 10;
let b = a;
b = 20;

// console.log(a);
// console.log(b);

// const user = {
//   name: 'Pavel',
//   age: 25,
// };

// const admin = user;

// // admin.name = 'Alex';

// // console.log(user);
// // console.log(admin.name);
// // console.log(user.name);
// console.log(user === admin);

// const userTest1 = {
//   name: 'Pavel',
// };

// const userTest2 = {
//   name: 'Pavel',
// };

// // console.log(userTest1 === userTest2);
// // console.log({} === {});

// function changeUserName(objUser, key) {
//   objUser[key] = 'Some new name';
// }
// // changeUserName(admin, 'name');
// console.log(changeUserName(admin, 'name'));
// console.log(user);

// const product = {
//   id: 1,
//   title: 'Laptop',
//   store: {
//     city: 'Minsk',
//   },
// };

// const productCopy = Object.assign({}, product);
// productCopy.title = 'Phone';

// console.log(product);
// console.log(productCopy);

// const productCopy = Object.assign({}, product);
// const productCopy2 = {};

// //key in obj
// for (let key in product) {
//   const value = product[key];
//   productCopy2[key] = value;
// }

// console.log(product === productCopy);
// console.log(product === productCopy2);

// productCopy.store.city = 'Krakow';

// const productId = product.id;
// const productStore = product.store;

// console.log(product);
// console.log(productCopy);

// // Перебрать каждое свойство объекта и вывести в консоль строку Ключ: (`Ключ key, значение ${obj[key]}`)
// // {Название свойства}, значение: {значение свойства} . Используем
// // полученный объект из задачи 2.

// for (let key in product) {
//   console.log(`Ключ ${key}, значение ${product[key]}`);
// }

// Создать копию объекта из задачи 2. Решить двумя способами:
// 1. используем метод Object.assign
// 2. используем цикл for..in , где на каждой итерации копируем ключ и
// значение в новый объект
// Для проверки результат вывести в консоль сравнение исходного
// объекта с его клоном (оператор ===)

// const user = {
//   //key: value
//   name: 'Pavel',
//   age: undefined,
//   isAdmin: true,
//   phone: null,
//   skill: ['HTML', 'CSS'],
//   // address: {
//   //   country: 'Belarus',
//   //   city: 'Minsk',
//   // },
//   'first name': 'some example',
//   someComplexKey: 'Some value',
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// const entries = Object.entries(user);
// console.log(entries);
// console.log(Object.fromEntries(entries));

// console.log(user.age);
// console.log(user.city);

// console.log('age' in user);
// console.log('city' in user);

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('city'));

// console.log('toString' in user);
// console.log(user.hasOwnProperty('toString'));

// console.log(user.toString());

const user = {
  name: 'Pavel',
  isAdmin: true,
  phone: null,
  sayHello,
};
const user2 = {
  name: 'Oleg',
  sayHello,
};

function sayHello() {
  console.log('Hello' + ' ' + this.name);
}

user.sayHello();
user2.sayHello();

// Даны два объекта:
let developer1 = {
  firstName: 'Maria',
  lastName: 'Y.',
  country: 'Cyprus',
  continent: 'Europe',
  age: 30,
  language: 'Javascript',
  getLocation,
};
let developer2 = {
  firstName: 'Victoria',
  lastName: 'T.',
  country: 'Puerto Rico',
  continent: 'Americas',
  age: 23,
  language: 'Python',
  getLocation,
};
function getLocation() {
  console.log(`${this.continent}, ${this.country}`);
}

developer1.getLocation();
developer2.getLocation();
// Добавить в каждый объект метод getLocation , который выводит в
// консоль континент и страну разработчика. Далее вызвать метод для
// каждого из объектов.

// Есть объект:
const chart = {
  x: 0,
  y: 0,

  right() {
    this.x += 1;
    return this;
  },

  left() {
    this.x -= 1;
    return this;
  },

  showCoords() {
    console.log(`${this.x}, ${this.y}`);
  },
};
// 1. Добавить метод right() , который при вызове увеличивает
// значение свойства x на 1.
// 2. Добавить метод left() , который при вызове уменьшает значение
// свойства x на 1.
// 3. Добавить метод up() , который при вызове увеличивает значение
// свойства y на 1.
// 4. Добавить метод down() , который при вызове уменьшает значение
// свойства y на 1.
// 5. Добавить метод showCoords , который выводит в консоль значение
// координат x и y .
// 6. * Измените код методов таким образом, чтобы их вызов можно
// было сделать по цепочке, например так:
// chart.up().up().left().showCoords().right().down().right().showCoords()
// В консоли должен быть результат '(-1, 2)', затем '(1, 1)'
chart.right().right().left();
chart.showCoords();
