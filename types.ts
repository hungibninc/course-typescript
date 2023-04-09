const today = new Date();
console.log(today.getMonth());
today.setFullYear(1998, 6, 1);
console.log(today.getMonth() + ' ' + today.getFullYear());

const person = {
  age: 20
};

class Color {}
const red = new Color();
