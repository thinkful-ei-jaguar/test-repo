/* eslint-disable strict */

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative.');
  }
  return 2019 - age;
}

try {
  const greet = createGreeting('Brittany', -3);
} catch (e) {
  console.log(e);
};

function createGreeting(name, age) {
  if (!name || !age) {
    throw new Error('Arguments not valid.');
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

const greeting = createGreeting('Brit/Nghi', 8);
console.log(greeting);

