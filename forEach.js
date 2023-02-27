const friends = ['Mostofa', 'Tania', 'Isrsfil', 'Rubel shikder'];
friends.forEach(friend => {

});


const products = [
    {id: 1, name: 'laptop', price: 55555},
    {id: 1, name: 'mobile', price: 665555},
    {id: 1, name: 'watch', price: 3555},
    {id: 1, name: 'itap', price: 45555}
]

// products.forEach (f => console.log(f.name));

const girlfriend = [{pixt: 'tania', roll: 45, bf: 'mostofa',}];
const girldTop = girlfriend.map(gild => gild ,[0]);
// console.log(girldTop);


// const numbers = [22, 43, 43, 23,];
// const number = numbers.map( x => x +2);
// console.log(number);

let numbers = [22, 43, 43, 23,];
const number = numbers.map( x => x +2);
console.log(...number);