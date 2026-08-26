// const user1 = {
//   name: 'Anna',
//   age: 25,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const user2 = {
//   name: 'John',
//   age: 30,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const user3 = {
//   name: 'Olga',
//   age: 22,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// console.log(Object.getPrototypeOf(user1));
// // console.log(user1.toString);
// console.log(user1.__proto__);

// const animal = {
//   eats: true,
//   eat() {
//     console.log('Animal is eating');
//   },
// };

// const rabbit = {
//   jumps: true,
// };

// rabbit > animal > [[Prototype]] > null

// Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit.jumps);
// console.log(rabbit.eats);
// console.log(Object.hasOwn(rabbit, 'jumps'));
// console.log(Object.hasOwn(rabbit, 'eats'));

// const rabbit = Object.create(animal);
// rabbit.jumps = true;

// rabbit.eat();

//создать объект vehicleMethods с методами start и stop
//создать 2 объекта car , bike
//использовать методы start и stop на объектах car и bike

// const vehicleMethods = {
//   start() {
//     console.log(`${this.name} stared`);
//   },

//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const car = Object.create(vehicleMethods);
// car.name = 'CAR';

// const bike = Object.create(vehicleMethods);
// bike.name = 'BIKE';

// car.start();
// car.stop();

// bike.start();
// bike.stop();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User('Anna', 23);
// const user2 = new User('Oleg', 30);
// User.prototype.sayHello = function () {
//   console.log(`Hello ${this.name}`);
// };
// console.log(user1.sayHello === user2.sayHello);
// console.log(user1);
// console.log(user2);
// console.log(Object.getPrototypeOf(user1) === User.prototype);

// console.log(user1 instanceof User);

// function CustomError(msg) {
//   this.msg = msg;
// }

// const newError = new CustomError('smth went wrong')
// try {

// } catch (error) {
//   if (error instanceof CustomError) {}
// }

// function Product(title, price) {
//   ((this.title = title), (this.price = price));
// }
// Product.prototype.getInfo = function () {
//   console.log(`Product: ${this.title}, price: ${this.price}`);
// };

// const product = new Product('Laptop', 1234);

// product.getInfo();

// class Animal {
//   sayHello() {
//     console.log('Animal hello');
//   }
// }

// const animal1 = new Animal();
// console.log(animal1);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const user1 = new User('Anna', 25);
// const user2 = new User('John', 35);

// console.log(user1);
// console.log(user2);
// user1.sayHello();
// console.log(typeof User);

//cоздать класс TodoItem
//должны быть свойства title, isCompleted (по умолчанию false)
//методы - complete, uncomplete, getInfo (возвращает строку 'Completed' / 'Active')

// class TodoItem {
//   constructor(title, isCompleted = false) {
//     this.title = title;
//     this.isCompleted = isCompleted;
//   }

//   complete() {
//     this.isCompleted = true;
//   }

//   uncompleted() {
//     this.isCompleted = false;
//   }

//   getInfo() {
//     return this.isCompleted ? 'Completed' : 'Active';
//   }
// }

// const task = new TodoItem('Learn JS');
// console.log(task.isCompleted);

// task.complete();
// console.log(task);

// console.log(task.getInfo());

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');

//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user = new User('Anna', 'SecondName');
// console.log(user.fullName);

// user.fullName = 'John Doe';
// console.log(user);

// class BankAccount {
//   #balance;

//   constructor(owner, balance) {
//     this.owner = owner;
//     this.#balance = balance;
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }
// }

// const account = new BankAccount('Anna', 1000);
// // account.#balance = 2000;
// // console.log(account);
// // console.log(account.owner);
// console.log(account.getBalance());
// console.log(account.deposit(1300));
// console.log(account.getBalance());

// class User {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }

//   static createGuest() {
//     return new User('Guest', 'guest');
//   }
// }

// const guest = User.createGuest();

// class Session {
//   static activeCount = 0;

//   constructor(userId) {
//     Session.activeCount += 1;
//   }

//   close() {
//     Session.activeCount -= 1;
//   }
// }

// const session1 = new Session(1);
// const session2 = new Session(2);

// console.log(Session.activeCount);

// class User {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }

//   login() {
//     console.log(`${this.name} Logged in`);
//   }
// }

// class Admin extends User {
//   constructor(name, role, permission) {
//     super(name, role);

//     this.permission = permission;
//   }

//   deleteUser(user) {
//     console.log(`user ${user.name} deleted`);
//   }

//   login() {
//     super.login();
//     console.log(`ADMIN child Logged in`);
//   }
// }

// const admin = new Admin('Anna', 'admin', ['delete_users', 'create_users']);
// console.log(admin.login());

// const user = new User('guest', 'somerole');
// admin.deleteUser(user);

//создать класс Animal
//у него свойства name, метод eat
//создать класс Dog, который наследует Animal
//у класса Dog долежен быть метод bark

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} is barking`);
//   }
// }

// const dog = new Dog('Rex');

// dog.eat();
// dog.bark();

class Animal {
  speak() {
    console.log(`Animal makes sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`DOg barks`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`Cat meows`);
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((animal) => {
  animal.speak();
});
