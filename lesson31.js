//Browser > HTTP request > API
//API > HTTP response > Browser
const URL = 'https://jsonplaceholder.typicode.com/users';

//HTTP METHODS
//GET - для получения данных
//POST - для создания данных (указывается Content-Type header, отправляется body)
//PUT - для полной замены данных
// const updatedUser = {
//   id: 1,
//   name: 'Alex',
//   age: 15,
// }
//PATCH - для частичного изменения ресурса
// const updatedUser = {
//   age: 15
// }
//DELETE - для удаления данных
//OPTION - для получения допустимых параметров взаимедействия с сервером

//HTTP STATUSES
//1xx - информационные ответы
//2xx - успешные ответы
//200 - успешно выполнен запрос
//201 - ресурс создан
//204 - сервер не возвращает тело ответа
//3xx - перенаправления
//304 - ресурс не изменен
//4хх - ошибки на стороне клиента (неправильно отправили запрос)
//400 - bad request
//401 - не авторизован
//403 - нет прав
//404 - not found
//5хх - ошибка на строне сервера
//503 - сервис не доступен

//XMLHttpRequest

// Отправить запрос за пользователями и для каждого вывести в
// консоль name . Используем объект XMLHttpRequest , url запроса —
// https://jsonplaceholder.typicode.com/users
// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.responseType = 'json';

// xhr.addEventListener('load', () => {
//   // const users = JSON.parse(xhr.responseText);
//   // console.log(users);

//   if (xhr.status >= 200 && xhr.status < 300) {
//     const users = xhr.response;
//     users.forEach((user) => console.log(user.name));
//   } else {
//     console.warn('HTTP request error', xhr.status);
//   }
// });

// xhr.addEventListener('error', () => {
//   console.error('Smth went wrong');
// });

// xhr.send();

//PROMISES
// function getMessage() {
//   setTimeout(() => {
//     return 'DONE';
//   }, 100);
// }

// const result = getMessage();

// console.log(result); //undefined

// const promise = new Promise((resolve, reject) => {
//   //async code
//   setTimeout(() => {
//     const sum = 2 + 5;
//     resolve(sum);
//     // reject('ERROR');
//   }, 1000);

//   //reject('DONE')
// });
// console.log(promise);

//pending > resolve() > fulfilled
//pending > reject() > rejected

// promise
//   .then((res) => {
//     console.log(res);

//     throw new Error('some error');

//     return 'some string';
//   })
//   .then((newRes) => console.log(newRes))
//   .catch((error) => {
//     console.log('some error', error);
//   })
//   .finally(() => {
//     console.log('promise finished');
//   });

//FETCH API
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Ошибка запроса. Статус' + response.status);
//     }

//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const request = new Request('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
// });

// fetch(request)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Ошибка запроса. Статус' + response.status);
//     }

//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'New post',
//     body: 'Post content',
//     userId: 1,
//   }),
// };

// fetch('https://jsonplaceholder.typicode.com/users', options);

// Отправить запрос за постами и для каждого отрисовать карточку.
// Карточка состоит из заголовка, в который передаем title поста, и
// параграфа с body поста. Используем функцию fetch , а url запроса —
// https://jsonplaceholder.typicode.com/posts.
// Предусмотреть обработку ошибок, например, если нет соединения с
// интернетом, то вместо карточек выводим блок с текстом «Что-то
// пошло не так, попробуйте позже!»

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// const postsContainer = document.getElementById('posts');

// function createPostCard(post) {
//   const cardContainer = document.createElement('div');
//   const cardBody = document.createElement('div');
//   const cardTitle = document.createElement('h5');
//   const cardText = document.createElement('p');

//   cardContainer.classList.add('card', 'text-bg-primary', 'mb-3');
//   cardBody.classList.add('card-body');
//   cardTitle.classList.add('card-title');
//   cardText.classList.add('card-text');

//   cardContainer.style = 'max-width: 18rem;';
//   cardTitle.textContent = post.title;
//   cardText.textContent = post.body;

//   cardBody.append(cardTitle, cardText);
//   cardContainer.append(cardBody);

//   return cardContainer;
// }

// function renderPosts(posts) {
//   postsContainer.innerHTML = '';

//   const fragment = document.createDocumentFragment();

//   posts.forEach((post) => {
//     const card = createPostCard(post);
//     fragment.append(card);
//   });

//   postsContainer.append(fragment);
// }

// function renderError() {
//   postsContainer.innerHTML = '';

//   const errorElement = document.createElement('p');

//   errorElement.classList.add('h1');
//   errorElement.textContent = 'Что-то пошло не так. Попробуй позже!';

//   postsContainer.append(errorElement);
// }

// fetch(POSTS_URL)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Ошибка запроса. Статус ' + response.status);
//     }

//     return response.json();
//   })
//   .then((posts) => {
//     renderPosts(posts);
//   })
//   .catch((error) => {
//     console.log(error);
//     renderError();
//   });

// const newPost = {
//   title: 'New post',
//   body: 'Post content',
//   userId: 1,
// };

// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     title: 'New post',
//     body: 'Post content',
//     userId: 1,
//   }),
// });

//FormData
// const formData = new FormData();

// formData.append('title', 'New post');
// formData.append('body', 'Post content');
// formData.append('userId', '1');

// const data = Object.fromEntries(formData.entries());

// const form = document.querySelector('#post-form');

// const formData = new FormData(form);

// const data = Object.fromEntries(formData.entries());
// console.log(data);

//multipart/form-data
// Необходимо отправить данные из формы при помощи http-запроса с
// методом POST. Используем функцию fetch , url —
// https://jsonplaceholder.typicode.com/posts.
// Сформировать данные для отправки поможет объект FormData ,
// который необходимо передать в параметр body функции fetch .
// Обратите внимание, что в форме нет значения для userId , его вам
// надо добавить самим при помощи метода formData.append .
// Так же обязательным в этом случаем будет параметр headers .
// Образец объекта с параметрами запроса:
// const options = {
// method: 'POST',
// body: // formData object,
// headers: {
// 'Content-Type': 'application/json;charset=utf-8'
// }
// }
// В консоль вывести ответ сервера, он представляет собой объект с
// отправленными данными + свойство id со значением 101. Если
// видите другой результат, то запрос выполнен некорректно

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

const form = document.querySelector('#post-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append('userId', '1');

  const postData = Object.fromEntries(formData.entries());

  const options = {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  };

  fetch(POST_URL, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Smth went wrong');
      }

      return res.json();
    })
    .then((newPost) => console.log(newPost))
    .catch((err) => {
      console.error(err);
    });
});
