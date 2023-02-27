const numbers = [12, 2, 34, 54, 21, 6, 55, 32, 7, 9, 89];
const bigNums = numbers.filter(num => num > 20);
const tony = numbers.filter( n => n < 12);
// console.log(bigNums);
// console.log(tony);




const products = [
    {id: 1, name: 'laptop', price: 55555},
    {id: 1, name: 'mobile', price: 65555},
    {id: 1, name: 'watch', price: 3555},
    {id: 1, name: 'itap', price: 45555}
]

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 1000);
const expensive = products.filter(product => product.price > 10000);
console.log(expensive);