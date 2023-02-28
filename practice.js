const numbers = [3, 8, 9, 8, 5];
const doubled = num => num * 2;
const makeDouble = numbers.map(doubled);
// console.log(makeDouble);

const makedoubleIt = numbers.map(num => num * 2);
// console.log(makedoubleIt);

const fiveTimes = [1, 4, 6, 4, 8].map (x => x * 5);
// console.log(fiveTimes);

// const fiveTimes = [1,3,4,5,6].map(x => x * 5);
// console.log(fiveTimes);

const products = [
    { id : 34, name: 'mobile', price: 666666, job: 'developer' },
    { id : 34, name: 'itap', price: 12066, job: 'developer' },
    { id : 34, name: 'laptop', price: 300666, job: 'developer' },
    { id : 34, name: 'samsung', price: 190666, job: 'developer' },
]

const items = products.map(product => product);
// console.log(items);

const friends = ['tania', 'taramin', 'taremk', 'thuni'];
const friendName = friends.map(frined => frined[0]);
console.log(friendName);
