/* eslint-disable strict */
function jediName(firstName, lastName) {
  let jediN;
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('nghi', 'tran'));


function beyond(num) {
  if (Number.isFinite(num) && num > 0) {
    console.log("To infinity");
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
  switch(encodedWord[0]) {
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
let listOfWords = words.split(" ");
for (let i=0; i<listOfWords.length; i++) {
  console.log(decode(listOfWords[i]));
}