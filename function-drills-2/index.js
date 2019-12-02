/* eslint-disable strict */
function jediName(firstName, lastName) {
  let jediN;
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('nghi', 'tran'));


function beyond(num) {
  if (Number.isFinite(num) && num > 0) {
    console.log('To infinity');
  } else if (Number.isFinite(num) && num < 0) {
    console.log('To negative inifinity');
  } else if (num === 0) {
    console.log('Staying home.');
  } else {
    console.log('And beyond');
  }
}

function decode(encodedWord) {

  let char;
  switch (encodedWord[0]) {
  case 'a':
    char = encodedWord[1];
    break;
  case 'b':
    char = encodedWord[2];
    break;
  case 'c':
    char = encodedWord[3];
    break;
  case 'd':
    char = encodedWord[4];
    break;
  default:
    char = ' ';
    break;
  }

  return char;
}

let words = 'craft block argon meter bells brown croon droop';
let listOfWords = words.split(' ');
for (let i = 0; i < listOfWords.length; i++) {
  console.log(decode(listOfWords[i]));
}

function daysInMonth(month, leapYear = false) {
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days.`;
    break;
  case 'February': {
    if (leapYear) {
      return 'February has 29 days.';
    } else {
      return 'February has 28 days.';
    }
    break;
  }
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days.`;
    break;
  default:
    return 'Must provide a valid month.';
  }
}

console.log(daysInMonth('January'));


function game(num) {
  // 1 is rock
  // 2 is paper
  // 3 is scissors
  if(num !== 1 && num && 2 && num !== 3) {
    throw new Error('Not a valid number.');
  }
  const randomNo = Math.floor(Math.random() * 3) +1;
  let result;

  switch(num,randomNo){
  case (1,3):
  case (3,2):
  case (2,1):
    result = 'Player 1 wins';
    break;
  case (3,1):
  case (2,3):
  case (1,2):
    result = 'Player 2 wins';
    break;
  case (1,1):
  case (2,2):
  case (3,3):
    result = 'Its a tie!';
    break;
  }
  return result;
}

console.log(game(3));