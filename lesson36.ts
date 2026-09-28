// class User {
//   public name: string; //можно отовсюду
//   protected role: string; //только в самом классе и его наследниках
//   // private passwordHash: string; //доступен только в самом классе
//   #passwordHash: string; //доступен только в самом классе
//   readonly createdAt: Date; //только для чтения

//   constructor(name: string, passwordHash: string) {
//     this.name = name;
//     this.role = 'user';
//     this.#passwordHash = passwordHash;
//     this.createdAt = new Date();
//   }

//   public checkPasswordHash(hash: string): boolean {
//     return this.#passwordHash === hash;
//   }

//   protected setRole(role: string) {
//     this.role = role;
//   }
// }

// class Admin extends User {
//   constructor(name: string, passwordHash: string) {
//     super(name, passwordHash);
//     this.setRole('admin');
//   }

//   public getRole() {
//     return this.role;
//   }

//   // hack() {
//   //   return this.passwordHash //error
//   // }
// }

// const user = new User('Alex', 'hash1');
// console.log(user.name);
// // user.checkPasswordHash('hash3')

// // console.log(user.role) //error
// // console.log(user.passwordHash)
// // user.createdAt = new Date()

// const admin = new Admin('Bob', 'hash2');
// console.log(admin.getRole());

// class Session {
//   static activeCount = 0;

//   constructor(userId: number) {
//     Session.activeCount += 1;
//   }

//   static getActiveCount() {
//     return Session.activeCount;
//   }
// }

// const session1 = new Session(1);
// const session2 = new Session(2);

// console.log(Session.getActiveCount());

// abstract class CustomStorage {
//   abstract save(key: string, data: string): void;
//   abstract load(key: string): any | undefined;

//   has(key: string): boolean {
//     return this.load(key) !== undefined
//   }
// }

// class MemoryStorage extends CustomStorage {
//   save(key: string, data:  string) {
//     localStorage.setItem(key, data)
//   }

//   load(key: string) {
//     return localStorage.getItem('key')
//   }
// }

// class CustomSessionStorage extends CustomStorage {
//   save(key: string, data:  string) {
//     sessionStorage.setItem(key, data)
//   }

//   load(key: string) {
//     return sessionStorage.getItem('key')
//   }
// }

// const ls = new MemoryStorage()
// ls.save('a', '10')
// console.log(ls.has('a'))

// const ss = new CustomSessionStorage()
// ss.save('b', '10')

// class Logger {
//   log(msg: string): void {
//     console.log('[LOG]: ', msg)
//   }
// }

// function doWork(logger: Logger) {
//   logger.log('Working...')
// }

// doWork(new Logger())

// interface LoggerInterface {
//   log(msg: string): void;
// }

// class Logger implements LoggerInterface {
//   log(msg: string): void {
//     console.log('[LOG]: ', msg);
//   }
// }

// function doWork(logger: LoggerInterface) {
//   logger.log('Working...');
// }

// doWork(new Logger());

// function identity<T>(value: T): T {
//   return value;
// }

// const num = identity<number>(123);
// const str = identity('hello'); //T выводится автоматически

// type ApiResponse<T> = {
//   data: T;
//   error?: string;
// };

// const res1: ApiResponse<{ id: number; title: string }> = {
//   data: { id: 1, title: '' },
// };

// class MyCustomStorage<T> {
//   constructor(private value: T) {}

//   getValue(): T {
//     return this.value;
//   }
// }

// const customStor = new MyCustomStorage('abc')
// customStor.getValue()

// function getId<T extends {id: number}>(obj: T): number {
//   return obj.id
// }

// getId({ id: 1, name: 'abc' })

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  friends?: string[];
};

type UserPublic = Pick<User, 'name' | 'createdAt'>;

// const user: UserPublic = {
//   name: '',
//   createdAt: '',
// };

type UserSafe = Omit<User, 'password' | 'friends'>;

// const user: UserSafe = {
//   name: '',
//   createdAt: '',
//   id: 1,
//   email: '',
// };

type UserPartial = Partial<User>; //все поля опциональны
type UserRequired = Required<User>;
type UserReadOnly = Readonly<User>;

// const user: UserReadOnly = {
//   id: 0,
//   name: '',
//   email: '',
//   password: '',
//   createdAt: ''
// };

// type UserRecord = Record<string, number | string>
// const user: UserRecord = {
//   sadfsdf: '',
//   sdfdsf: 123,
//   sgkldfgjkll: 'dfgdsgfdsfg'
//   sdgdgf: null
// }

type Role = 'user' | 'admin';
type PermissionsRecord = Record<Role, string[]>;

// const perms: PermissionsRecord = {
//   user: ['read'],
//   admin: ['read', 'write', 'delete']
// }

function createUser(name: string, id: number) {
  return {
    name,
  };
}

type CreateUserReturn = ReturnType<typeof createUser>;
type CreateUserParams = Parameters<typeof createUser>;

const args: CreateUserParams = ['Alex', 123];
const user1 = createUser(...args);

async function fetchSmth() {
  return '';
}

type FnResponse = Awaited<ReturnType<typeof fetchSmth>>;

interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  friends?: string[];
}

type KeysOfUser = keyof UserInterface;

const key: KeysOfUser = 'createdAt';

const user = {
  id: 1,
  name: '',
  email: '',
};

type KeysOfUser2 = keyof typeof user;

type Country = {
  country: string;
  abbreviation: string;
  city: string;
  currency_name: string;
  population: number;
};

const countries: Country[] = [
  {
    country: 'United Arab Emirates',
    abbreviation: 'AE',
    city: 'Abu Dhabi',
    currency_name: 'Arab Emirates Dirham',
    population: 9630959,
  },
  {
    country: 'Poland',
    abbreviation: 'PL',
    city: 'Warszawa',
    currency_name: 'Polish Zloty',
    population: 37974750,
  },
  {
    country: 'Russian Federation',
    abbreviation: 'RU',
    city: 'Moscow',
    currency_name: 'Russian Ruble',
    population: 144478050,
  },
];

// 1. Создать строку из названий стран через запятую
// 2. Подсчитать общее количество людей в данном массиве стран.
// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по
// названию.
// 4. Получить массив валют.
// 5. Получить массив городов, отсортированных в алфавитном порядке.
// 6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее
// количество людей в этих странах.

//1
function joinStringProperty<T extends Record<K, string>, K extends keyof T>(
  items: T[],
  key: K,
): string {
  return items.map((item) => item[key]).join(',');
}

const countryNames: string = joinStringProperty(countries, 'country');

//2
function sumPopulation<T extends Record<K, number>, K extends keyof T>(
  items: T[],
  key: K,
): number {
  return items.reduce((acc, item) => acc + item[key], 0);
}
const totalPopulation = sumPopulation(countries, 'population');

//3
function sortCountriesByName<T extends Pick<Country, 'country'>>(items: T[]) {
  return items.toSorted((prev, next) =>
    prev.country.localeCompare(next.country),
  );
}

const sortedCounties = sortCountriesByName(countries);

//4
function getStringArray<T extends Record<K, string>, K extends keyof T>(
  items: T[],
  key: K,
): string[] {
  return items.map((item) => item[key]);
}

const currencies = getStringArray(countries, 'currency_name');

//5
const sortedCities = getStringArray(countries, 'city').sort((prev, next) =>
  prev.localeCompare(next),
);

//6
function getAveragePopulation<T extends Required<Pick<Country, 'population'>>>(
  items: T[],
) {
  if (!items.length) {
    return 0;
  }

  const total = sumPopulation(items, 'population');

  return total / items.length;
}
