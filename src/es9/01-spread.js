const user = { username: 'iveat', age: 31, country: 'AR', };
const { username, ...values } = user;
console.log(username);
console.log(values);