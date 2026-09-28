// const age: number = 25;
// const userName: string = 'Alex';
// const isAdmin: boolean = false;

// let user: string = 'Oleg';

// const numbers: string[] = ['1', '2', '3'];
// numbers.push('4');

// //tuple
// const userTuple: [number, string, boolean] = [1, 'Oleg', true];

// //Enum
// enum Role {
//   User,
//   Admin,
//   Manager,
// }

// const role: Role = Role.Manager;

// enum Status {
//   Idle = 'Idle',
//   Loading = 'Loading',
//   Error = 'Error',
// }

// const requestStatus: Status = Status.Loading;
// console.log(requestStatus);

// // const Status1 = {
// //   Loading: 'Loading',
// // }
// // const reqStatus = Status1.Loading

// const enum Direction {
//   Up = 'UP',
//   Down = 'DOWN',
// }

// const go: Direction = Direction.Up;

// let dataAny: any = 10;
// dataAny = 'oops';

// let dataUnknown: unknown = 'hello';
// if (typeof dataUnknown === 'string') {
//   dataUnknown.toUpperCase();
// }

// //type assertions
// const input = document.querySelector('#input') as HTMLInputElement | null;

// if (input) {
//   console.log(input.value);
// }

// // const x = '123' as unknown as number;

// //interface
// interface BaseUser {
//   id: number;
// }

// interface User extends BaseUser {
//   name: string;
//   email: string;
//   readonly createdAt: Date;
// }

// const person: User = {
//   id: 123,
//   name: 'Oleg',
//   email: '',
//   createdAt: new Date(),
// };

// interface SomeObj {
//   [key: string]: number;
// }
// const someObj: SomeObj = {
//   a: 1,
//   b: 2,
// };

// //type
// type UserObj = {
//   name: string;
//   email: string;
// };

// const userObj: UserObj = {
//   name: '',
//   email: '',
// };

// // const users: User[] = [person, person, person, person, person];

// //union | - или
// type ID = number | string;
// const userId: ID = 123;

// //intersection & - и
// type WithId = { id: number };
// type WithName = { name: string };
// type ResultEntity = WithId & WithName;

// const entity: ResultEntity = {
//   id: 123,
//   name: '',
// };

// // type Cat = { meow: () => void };
// // type Dog = { bark: () => void };
// // type Pet = Cat | Dog;
// // const pet: Pet = {
// //   bark() {},
// // };

// const userNameAlex: 'Alex' = 'Alex';

// type DirectionLiteral = 'left' | 'right';
// const move: DirectionLiteral = 'left';

// // const routes = {
// //   home: '/',
// //   profile: '/profile'
// // } as const;

// // console.log(routes.profile)

// //functions
// function sum(a: number, b: number): number {
//   return a + b;
// }

// const sumArrow = (a: number, b: number): number => a + b;

// interface User2 {
//   sayHello: (name: string) => void;
// }

// function receiveCb(fn: (params: number) => void) {
//   fn(123);
// }

// function greet(name: string, title?: string): string {
//   return title ? `Hello, ${title} ${name}` : `Hello ${name}`;
// }

// function greet2(name: string, title: string = 'Mr/Ms'): string {
//   return title ? `Hello, ${title} ${name}` : `Hello ${name}`;
// }

// function joinStrings(separator: string, ...parts: string[]) {
//   return parts.join(separator);
// }

// joinStrings(',', 'asfdsa', 'asdfsfd', 'fasfdsaf');

// //this
// // type Counter = {
// //   value: number,
// //   inc(this: Counter): void
// // }

// // const counter: Counter = {
// //   value: 0,
// //   inc() {
// //     this.value++;
// //   }
// // }

// // counter.inc()
// // const incFn = counter.inc;
// // incFn() //error

// //overload
// function parseValue(value: string): number;
// function parseValue(value: number): string;
// function parseValue(value: string | number): string | number {
//   if (typeof value === 'string') {
//     return Number(value);
//   }

//   return String(value);
// }

// const num = parseValue('123');
// const str = parseValue(123);

// //type guards
// function formatValue(value: string | number) {
//   if (typeof value === 'number') {
//     return value.toFixed();
//   }

//   return value.trim();
// }

// type Cat = { meow: () => void };
// type Dog = { bark: () => void };
// type Pet = Cat | Dog;

// function makeSound(pet: Pet) {
//   if ('meow' in pet) {
//     pet.meow();
//   } else {
//     pet.bark();
//   }
// }

// try {
//   throw new Error('some error');
// } catch (error) {
//   if (error instanceof Error) {
//     error.message;
//   }
// }

// [].forEach(() => '123');

// type User123 = { id: number; name: string };
// type SomeObj123 = { value: string };

// function isUser123(param: unknown): param is User123 {
//   return (
//     typeof param === 'object' &&
//     param !== null &&
//     'id' in param &&
//     'name' in param
//   );
// }

// const obj1234 = { id: 123, name: '' };
// function helloEntity(obj: User123 | SomeObj) {
//   if (isUser123(obj)) {
//     console.log('hello ', obj.name);
//   }
// }

interface PersonalData {
  documentType: string;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
  personalData?: PersonalData;
}

const users: User[] = [
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
    personalData: {
      documentType: 'passport',
    },
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  ingredients: string[];
  type: string;
  available: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Burger Premium',
    price: 6,
    currency: 'euro',
    ingredients: ['flour', 'beef', 'salad', 'cheese', 'sauce'],
    type: 'burger',
    available: true,
  },
  {
    id: 2,
    name: 'Burger Lite',
    price: 2.3,
    currency: 'euro',
    ingredients: ['flour', 'beef', 'cheese', 'sauce', 'cucumber'],
    type: 'burger',
    available: true,
  },
];

const getUser = (id: number, users: User[]): User | undefined =>
  users.find((user) => user.id === id);

//never
function fail(msg: string): never {
  throw new Error(msg);
}

function infinite(): never {
  while (true) {}
}

type Direction = 'up' | 'down' | 'left';

function exhaustiveCheck(param: never): never {
  throw new Error('Unhandled case: ' + param);
}

function move(direction: Direction) {
  switch (direction) {
    case 'down':
      return 'вниз';
    case 'up':
      return 'вверх';
    case 'left':
      return 'влево';
    default:
      return exhaustiveCheck(direction);
  }
}

move('up');
