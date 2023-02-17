// arrays destructuring

let killEmAll = ['Hit the lights', 'Seek and Destroy'];

let [a, b] = killEmAll;

console.log(a, b);

// objects destructuring

let album = { title: 'Kill Em All', age: 1983 };

let { title, age } = album;

console.log(title, age);

// spread operator

let gender = { nombre: 'Thrash Metal', example: 'Megadeth'};
let topSong = 'Holy Wars';

let data = { id: 1, ...gender, topSong };

console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);

// example

function solution(json1 = {name: "Mr. Michi", food: "Pescado"}, json2 = {age: 12, color: "Blanco"}) {
  return {...json1, ...json2}
}
console.log(solution({
  name: "Bigotes",
  food: "Pollito"
}));
