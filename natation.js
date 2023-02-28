const student = {
    id: 23,
    name: 'mostofa',
    marks: {
        mathe: 75 ,
        physice: 54,
        chemistry: 88,
    },
}
// const mark = student.marks;
// const math = student.mathe;

const chemistry = student['marks'] ['physice'];
const subject = 'mathe';
const marks2 = student.marks[subject];
console.log(chemistry);