// 1. optinal chaining
// student.marks.math.

// must 
// 2. map filter.find

// 3. (optional): forEach, reduce ( advenced)

// 4. class 
// 5. (optional) inhertance, supre

// 6.  (must) prototaypical inheritance.




const numbers = [3, 5, 6, 44, 33, 75, 35, 86, 77];
const total = numbers.filter(n => n > 20);
console.log(total);

const student = {
    id: 34,
    name: 'mostofa',
    class: 5,
    marks: {
        physice : 65,
        math : 76,
        chemistry: 76,
    }
}

// const totalMark = student.name;
const subject = 'chemistry'
const mark2 = student.marks[subject];
// console.log(totalMark);
// console.log(mark2);


const num = [3, 54, 75, 75 , 65, ];
const totalAll = num.map(n => n +1);
console.log(totalAll);

const digit = ['Mostofa', 'Rubel', 'Israfil', 'Yachin khan']
// const totalDigit = digit.map(number => number [0]);
const totalDigit = digit.map(number => number.length);
console.log(totalDigit);

const pixtNum = [3, 5, 54, 25,  45, ,20]
const pixtTotal = pixtNum.find( n => n % 10 === 0);
console.log(pixtTotal);

const user = {
    id: 34, 
    name: 'mostofa',
    class: 'ten',
    address: {
        unit: ' dhaka',
        hme: 'tejgon',
        seocnd: 'mirpur',
        rode : 45,
    }
}



const {x, y, z} = {x: 1, y1: 2, z: 3};