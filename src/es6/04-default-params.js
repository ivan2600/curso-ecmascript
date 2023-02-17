function newUser(name, age, country) {
  var name = name || 'Ivan';
  var age = age || 31;
  var country = country || 'Argentina';
  console.log(name, age, country);
}

newUser();
newUser('Facundo', 45, 'Argentina');

function newAdmin(name = 'Ivan', age = 31, country = 'Argentina'){
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'Colombia');