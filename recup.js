// 1. var let const
//    break up with var
const numbers = [12, 43, 453, 32];
let salary = 450;
salary = 455;

// 2. default parameters
function calculateSalary( salary, tax =0.35,  bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. Template string
const elementHtml = `
<div>
    <h3> Name: </h3>
    <p> Address: </p>
    <p> Salary: ${calculateSalary (10000, 0, 0)} </p>
    <p> Others: ${numbers[2]} </p>j

</div>
`

// Arrow functions
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread 
const ages = [12, 33, 14, 22, 42,]
const newAges = [...ages, 32, 543,32];
console.log(...newAges);

// 6. destructuring 
const {z, y ,x} = {z: 23, y: 23, x:64, name: 'sakib al hassan', salary: 555553};
const [a, b, ...c] = [23, 43, 23, 243, 23,]

console.log(c);