// enahced object literals

function newUser(user, age, country, uId){
  return {
    user,
    age,
    country,
    id: uId
  }
}

console.log(newUser('Ivan', 31, 'Argentina', 26));