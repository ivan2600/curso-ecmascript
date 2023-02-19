async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(26);
  yield await Promise.resolve(36);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Creeping Death');

async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['Nicole', 'Tamara', 'Jessi']);

console.log('After');