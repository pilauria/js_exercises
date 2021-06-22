// A function that returns a promise

// from
movePlayer(100, 'Left)')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));
// to
async function playerStart() {
  const firstmove = await movePlayer(100, 'Left');
  await movePlayer(400, 'Left');
  await movePlayer(10, 'Left');
  await movePlayer(330, 'Left');
}

// from
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log);

// to
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
  urls.map(url => {
    console.log(url);
    return fetch(url).then(resp => {
      console.log(resp);
      return resp.json();
    });
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log('error'));

//to
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooops', err);
  }
};
