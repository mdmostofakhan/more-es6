const numbers = [12, 24, 44, 66, 87, 88];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(num => num /3);
// console.log(half);
// console.log(thirds);

const friends = ['Mostofa', 'Tania', 'Isrsfil', 'Rubel shikder'];
const friendsGroup = friends.map(f => f[0]);
// console.log(friendsGroup);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 55555},
    {id: 1, name: 'mobile', price: 665555},
    {id: 1, name: 'watch', price: 3555},
    {id: 1, name: 'itap', price: 45555}
]

// const items = products.map(product => console.log(product.name));

const items = products.map(product => product.price);
const name = products.map(p => p. name);
// console.log(items);
console.log(name);