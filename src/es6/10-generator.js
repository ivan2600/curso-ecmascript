function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Mustaine', 'Hammet', 'Ulrich', 'Ellefson', 'Trujillo']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);