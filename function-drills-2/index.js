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