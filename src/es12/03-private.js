// setters getters

class User {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const lololoper = new User('Larry', 23);
console.log(lololoper.uAge);
console.log(lololoper.uAge = 20);