// const someValue = 21;

// function getInfo() {
//   console.log(someValue);
//   // const someValue = 'Some str';
// }

// getInfo();

// console.log(userName);

// let userName = 'Andrei';

// console.log(userName);
// const user = { age: 19 };

// console.log(user === user);
// console.log({ age: 19 } == { age: 19 });

// const a = {};
// const b = { age: 12 };
// const c = { age: 13 };
// a[b] = 123;
// //a['[object Object]'] = 123;

// a[c] = 456;
// a['[object Object]'] = 456;
// console.log('' + { name: 'Oleg', age: 12, isAdmin: false });
//'[object Object]'

// const someObj = {
//   a: 12,
//   a: 15,
//   a: 17,
// };
// // console.log(someObj);

// let person = { name: 'AAA' };

// const members = [person];

// // const members = person;
// person = { abc: 123 };

// // let person = 123abc;
// // const members = [123abc]
// // person = 456bcd;

// console.log(members);

// const a = { a: 1 };
// const b = a;
// b.a = 3;

// //const a = 123abc;
// //const b = 123abc;
// //b.a = 3
// console.log(a);

//ПАЛИНДРОМ
//topot
function isPalindrom(str) {
  for (let i = 0; i < str.length; i++) {
    const charA = str[i];
    const charB = str[str.length - 1 - i];

    if (charA !== charB) {
      return false;
    }

    if (i >= str.length - 1 - i) {
      return true;
    }
  }
}
console.log(isPalindrom('шалаш'));
