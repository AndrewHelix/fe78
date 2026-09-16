function getUser(userId, cb) {
  setTimeout(() => {
    // fetch
    cb({
      id: userId,
      name: 'Alex',
    });
  }, 1000);
}

function getUserPosts(userId, cb) {
  setTimeout(() => {
    // fetch
    cb([
      {
        id: 101,
        userId,
        title: 'Some user post',
      },
    ]);
  }, 1000);
}

function getPostComments(postId, cb) {
  setTimeout(() => {
    // fetch
    cb([
      {
        id: 501,
        postId,
        text: 'Some post comment',
      },
    ]);
  }, 1000);
}

// getUser(1, (user) => {
//   console.log('User: ', user);

//   getUserPosts(user.id, (posts) => {
//     console.log('Posts: ', posts);

//     getPostComments(posts[0].id, (comments) => {
//       console.log('Comments: ', comments);
//     });
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise fail');
//   }, 1000);
// });
// //pending
// //fulfilled - resolve()
// //reject - reject()
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then((res) => {
//   console.log(res);
// });
// console.log('end');
// //start 1 end 2

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise fail');
//   }, 1000);
// });

// promise.then(
//   (value) => {
//     console.log(value);
//   },
//   (err) => {
//     console.log(err);
//   },
// ).finally(() => {});

// Сделайте обертку при помощи Promise так, чтобы потребитель then получил значение переменной string .
// const prpmise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const string = 'foo';
//     resolve(string);
//   }, 2000);
// });

// prpmise
//   .then((string) => {
//     console.log(string);
//     return string.length;
//   })
//   .then((value) => value + 10)
//   .then((value) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value * 2);
//       }, 2000);
//     });
//   })
//   .then(console.log);

// fetch('//url')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('HTTP err');
//     }

//     return response.json();
//   })
//   .catch((err) => console.log(err));

// function renderElement(template) {
//   document.body.insertAdjacentHTML('beforeend', template);
// }

// function createWidget() {
//   return new Promise((resolve, reject) => {
//     const templateWidget =
//       '<fxwidget-cc amount="100" decimals="2" large="false" shadow="true" symbol="true" grouping="true" border="true" from="USD" to="EUR"></fxwidget-cc>';
//     const scriptUrl =
//       'https://s.fx-w.io/widgets/currency-converter/latest.js?ru';
//     const scriptElement = document.createElement('script');
//     scriptElement.src = scriptUrl;

//     scriptElement.onload = () => {
//       console.log('Widget is loaded!');
//       resolve(templateWidget);
//     };
//     scriptElement.onerror = () => {
//       reject(new Error('Error! Try again later'));
//     };

//     document.head.append(scriptElement);
//   });
// }

// createWidget()
//   .then((res) => renderElement(res))
//   .catch((err) => console.error(err));

// Попробуйте запустить и проверить работу виджета.
// Ваша задача — доработать функцию createWidget так, чтобы она работала через Promise.
// Вызов функции должен выглядеть так:
// createWidget()
// .then((template) => {
// renderElement(template)
// })
// .catch((error) => console.error(error))

// Promise.all
// const promise1 = Promise.resolve('1 promise');
// const promise2 = Promise.resolve('2 promise');
// const promise3 = Promise.reject('3 promise');

// Promise.all([promise1, promise3, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([promise1, promise3, promise2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('1 promise');
//   }, 300);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('2 promise');
//   }, 300);
// });

// Promise.race([promise2, promise1]).then((res) => console.log(res));

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('1 promise');
//   }, 100);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('2 promise');
//   }, 300);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('3 promise reject');
//   }, 0);
// });

// Promise.any([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.resolve();

// function getUserFromCache() {
//   const cachedUser = {
//     id: 1,
//     name: 'Alex',
//   };

//   return Promise.resolve(cachedUser);
// }

// getUserFromCache().then((user) => console.log(user));

// Promise.reject();

// Есть массив с URL-адресами, где каждый при запросе вернет данные для конкретной todo:
// 1. Создайте массив промисов, полученных из метода fetch для каждого элемента массива urls
// 2. Используя какой-то из методов Promise, передайте в него полученный массив из п.1 так, чтобы мы
// увидели в консоли одновременно все результаты. При любой ошибке остальные данные нас не
// интересуют
// 3. Используя какой-то из методов Promise, передайте в него полученный массив из п.1 так, чтобы мы
// получили результат первого, успешно выполненного запроса

// const urls = [
//   'https://jsonplaceholder.typicode.com/todos/12',
//   'https://jsonplaceholder.typicode.com/todos/27',
//   'https://jsonplaceholder.typicode.com/todos/46',
//   'https://jsonplaceholder.typicode.com/todos/91',
// ];

// const requests = urls.map((url) => {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }

//     return response.json();
//   });
// });

// Promise.all(requests)
//   .then((todos) => {
//     console.log(todos);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.any(requests)
//   .then((todos) => {
//     console.log(todos);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function loadData() {
//   //await
// }

// const loadData = async () => {
//   return 10;
// };

// // const result = loadData();

// // console.log(result);
// loadData().then((res) => console.log(res));

// fetch('https://jsonplaceholder.typicode.com/todos/12')
//   .then((response) => response.json())
//   .then((todo) => console.log(todo));

// async function loadTodo() {
//   console.log('начало функции');
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/12');

//   const todo = await response.json();

//   console.log(todo);

//   // fetch('https://jsonplaceholder.typicode.com/todos/12')
//   //   .then((response) => response.json())
//   //   .then((todo) => console.log(todo));

//   console.log('функция завершена');
// }
// console.log('перед вызовом');
// loadTodo();
// console.log('после вызова');

// Переписать код ниже с использованием async / await :
// fetch('https://jsonplaceholder.typicode.com/todos/50')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// Подсказка: нужна будет новая функция.

// async function loadTodo() {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/todos123123/50',
//     );

//     if (!response.ok) {
//       throw new Error('Failed');
//     }

//     const todo = await response.json();

//     console.log(todo);
//   } catch (error) {
//     console.error(error);

//     throw new Error(error);
//   } finally {
//     console.log('final');
//   }
// }

// loadTodo().catch((err) => {
//   console.log('error inside catch block', err);
// });

async function loadTodo() {
  try {
    const promiseUser = fetch('https://jsonplaceholder.typicode.com/users/1');

    const promisePosts = fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=1',
    );

    const [responseUser, responsePosts] = await Promise.all([
      promiseUser,
      promisePosts,
    ]);

    const [user, posts] = await Promise.all([
      responseUser.json(),
      responsePosts.json(),
    ]);

    return { user, posts };
  } catch (error) {
    console.error(error);
  }
}

// loadTodo().then((res) => console.log(res));

async function init() {
  const res = await loadTodo();
  console.log(res);
}

init();
