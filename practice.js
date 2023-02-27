const numbers = [3, 8, 9, 8, 5];
const doubled = num => num * 2;
const makeDouble = numbers.map(doubled);
console.log(makeDouble);

const makedoubleIt = numbers.map(num => num * 2);
console.log(makedoubleIt);

const fiveTimes = [1, 4, 6, 4, 8].map (x => x * 5);
console.log(fiveTimes);

// const fiveTimes = [1,3,4,5,6].map(x => x * 5);
// console.log(fiveTimes);