"use strict";
const age = 25;
const userName = 'Alex';
const isAdmin = false;
let user = 'Oleg';
const numbers = ['1', '2', '3'];
numbers.push('4');
//tuple
const userTuple = [1, 'Oleg', true];
//Enum
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Manager"] = 2] = "Manager";
})(Role || (Role = {}));
const role = Role.Manager;
var Status;
(function (Status) {
    Status["Idle"] = "Idle";
    Status["Loading"] = "Loading";
    Status["Error"] = "Error";
})(Status || (Status = {}));
const requestStatus = Status.Loading;
console.log(requestStatus);
const go = "UP" /* Direction.Up */;
let dataAny = 10;
dataAny = 'oops';
let dataUnknown = 'hello';
if (typeof dataUnknown === 'string') {
    dataUnknown.toUpperCase();
}
//type assertions
const input = document.querySelector('#input');
if (input) {
    console.log(input.value);
}
const person = {
    id: 123,
    name: 'Oleg',
    email: '',
    createdAt: new Date(),
};
const someObj = {
    a: 1,
    b: 2,
};
const userObj = {
    name: '',
    email: '',
};
const users = [person, person, person, person, person];
const userId = 123;
const entity = {
    id: 123,
    name: '',
};
// type Cat = { meow: () => void };
// type Dog = { bark: () => void };
// type Pet = Cat | Dog;
// const pet: Pet = {
//   bark() {},
// };
const userNameAlex = 'Alex';
const move = 'left';
// const routes = {
//   home: '/',
//   profile: '/profile'
// } as const;
// console.log(routes.profile)
//functions
function sum(a, b) {
    return a + b;
}
const sumArrow = (a, b) => a + b;
function receiveCb(fn) {
    fn(123);
}
function greet(name, title) {
    return title ? `Hello, ${title} ${name}` : `Hello ${name}`;
}
function greet2(name, title = 'Mr/Ms') {
    return title ? `Hello, ${title} ${name}` : `Hello ${name}`;
}
function joinStrings(separator, ...parts) {
    return parts.join(separator);
}
joinStrings(',', 'asfdsa', 'asdfsfd', 'fasfdsaf');
function parseValue(value) {
    if (typeof value === 'string') {
        return Number(value);
    }
    return String(value);
}
const num = parseValue('123');
const str = parseValue(123);
//type guards
function formatValue(value) {
    if (typeof value === 'number') {
        return value.toFixed();
    }
    return value.trim();
}
function makeSound(pet) {
    if ('meow' in pet) {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
try {
    throw new Error('some error');
}
catch (error) {
    if (error instanceof Error) {
        error.message;
    }
}
[].forEach(() => '123');
function isUser(param) {
    return (typeof param === 'object' &&
        param !== null &&
        'id' in param &&
        'name' in param);
}
const obj1234 = { id: 123, name: '' };
function helloEntity(obj) {
    if (isUser(obj)) {
        console.log('hello ', obj.name);
    }
}
