const numbers = [2, 3, 5, 7, 9];
// const output = [];
// for(const number of numbers){
//     const doubled = number * 2 ;
//     output.push(doubled);
// }

// console.log(output);


function getDobled (numbers){
    const output = [];
for(const number of numbers){
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

// function doubleIt(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = getDobled(numbers);
console.log(result);

const makedoubleIt = numbers.map(doubleIt);
const makedoubleItDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
const fiveTimes = [1,3,4,5,6].map(x => x * 5);
console.log(fiveTimes);
// console.log(makeDouble2);
// console.log(makedoubleIt);
// console.log(makedoubleItDirect);
/*
purpose
1. get an array 
2. for every elements of the array do something
3. store the result in an array 
4. return the result array
*/