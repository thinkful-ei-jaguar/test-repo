/* eslint-disable strict */

function filter(arr, fn) {
  let newArray = [];
  for (let i=0; i<arr.length; i++){
    if(fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// Test the filter function
let arr2 = [1,2,3,-2,-4,-10];
console.log(filter(arr2, num => num > 0 ? true : false)); 
  
// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
  
// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});
  
console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES











function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  
  return location => { 
    warningCounter++; 
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`);
  };
}

// testing hazard warning function
const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd'); // occurred 3 times








// Turtle movements
let turtleMove = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
// Filter for positive movements
console.log(turtleMove.filter(movement => movement[0] > 0 || movement[1] > 0 ));
// Add movements
let turtleMove2 = turtleMove.map(movement => movement[0] + movement[1]);
console.log(turtleMove2);
// Print out total movements
let count = 1;
turtleMove.forEach( movement => {
  console.log(`Movement #${count}: ${movement[0]+movement[1]} steps`);
  count++;
});






// Reduce exercise
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arrayInput = input.split(' ');

// Decode word
let decodedWord = arrayInput.reduce((acc, curr) => {
  // If length is 3, then put a space
  if(curr.length === 3){
    acc += ' ';
  }
  // Otherwise capitalize the last character
  else{
    acc += curr[curr.length-1].toUpperCase();
  }
  return acc;
  // Initialize the acc to empty string for concatenation
}, '');

console.log(decodedWord);
