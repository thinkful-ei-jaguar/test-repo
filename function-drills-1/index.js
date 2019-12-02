/* eslint-disable strict */

funtion getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

const greeting = createGreeting('Brit/Nghi', 8);
console.log(greeting);

