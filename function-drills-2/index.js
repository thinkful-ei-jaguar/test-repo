/* eslint-disable strict */
function jediName(firstName, lastName){
  let jediN;
  return lastName.slice(0,3) + firstName.slice(0,2);
}

console.log(jediName('nghi','tran'));