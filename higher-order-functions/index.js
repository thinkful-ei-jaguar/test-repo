function repeat(fn, n) {
    for (let i = 1; i <= n; i++) {
        fn();
    }
};

function hello() {
    console.log('Hello world');
};

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr, fn) {
    // TASK: Define your function here
    let newArr = [];
    arr.forEach(el => {
        if (fn(el) === true) {
            newArr.push(el);
        }
    })
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function (location) {
        warningCounter++;
        console.log(warningCounter
        );
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    };
};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const icebergWarning = hazardWarningCreator('Iceburg ahead.');
const trafficConeWarning = hazardWarningCreator('Traffic Cones Nearby.');

rocksWarning('Main Street');
icebergWarning('Atlantic Ocean');
trafficConeWarning('I95');
trafficConeWarning('I95');
trafficConeWarning('I95');

function filterArr(arr) {
    let filteredArr = arr.filter(a => a[0] >= 0 && a[1] >= 0);
    let totalSteps = arr.map(a => Math.abs(a[0]) + Math.abs(a[1]));
    console.log(filteredArr);
    console.log(totalSteps);
};

function trackedSteps(arr) {
    arr.forEach(a => {
        let firstDigit = Math.abs(a[0]);
        let step;
        if (firstDigit === 1) {
            step = `step`;
        } else {
            step = `steps`;
        }
        console.log(`Movement #1: ${Math.abs(a[0])} ${step}
        Movement #2: ${Math.abs(a[1])} steps`);
    });
}

const decoder = string => {
    let arr = string.split(' ');
    let decoded = arr.reduce((accum, word) => accum + (word.length === 3 ? ' ' : word[word.length - 1].toUpperCase()), '');
    console.log(decoded);
};


