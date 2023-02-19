const regex = /\b(apple)+\b/g;
const fruit = 'apple, orange, kiwi, apple, anana';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
};

