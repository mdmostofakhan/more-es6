// syntactic sugar

class Instructor {
    name;
    team = 'Web team'
    designation = 'Web Course Instructor'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    StartSupportSesstion(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

const ammir =new Instructor('mostofa', 'Dhaka');
console.log(ammir);
ammir.StartSupportSesstion('9.00');
ammir.creatQuiz(6);

const solaiman =new Instructor('solaimen khan', 'Gazipur');
console.log(solaiman);