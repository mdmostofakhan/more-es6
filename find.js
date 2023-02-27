const numbers = [12, 5,  34, 45, 30, 6, 55, 32, 7, 9, 89];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    {id: 1, name: 'laptop', price: 55555},
    {id: 1, name: 'mobile', price: 65555},
    {id: 1, name: 'watch', price: 3555},
    {id: 1, name: 'itap', price: 45555}
]

const cheps = products.find(product => product.price > 700)
console.log(cheps);