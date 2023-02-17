// declarando
// class User {};
// Instancia de una clase
// const newUser = new User ();

class User {
  // metodos
  greeting() {
    return 'Hello';
  }
};

const ivan = new User();
console.log(ivan.greeting());
const pepito = new User();
console.log(pepito.greeting());

class User {
  // constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
};

const lolo = new User();

// this
class User {
  // constructor
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new User('Ana');
console.log(ana.greeting);

// setters getters

