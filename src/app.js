import { calcSum } from './math';

console.log('hello world');

console.log(calcSum(1, 4));

let someUserName = prompt('enter name');
if (someUserName) {
  someUserName = 'oleg';
} else {
  someUserName = 'olga';
}

console.log(someUserName);
