// map, forEach, Filter, find, reduce

const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
    // console.log( previous, current,);
    return previous + current
}, 0);
// console.log(total);


const number = [1, 2, 3, 4, 5];
const totalAll = number.reduce((previ, curr) => {
 console.log(previ, curr);
 return previ + curr;
}, 0)