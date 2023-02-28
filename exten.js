// syntactic sugar
class TemMember {
    name;
    location;
    constructor (name, location){
        this.name = name
        this.location = location;
    }
    privedFeedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TemMember{
    team = 'Web team'
    designation = 'Web Course Instructor'
    constructor(name, location){
       super(name, location)
    }
    StartSupportSesstion(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}


class Dvelopare extends TemMember {
   
    team = 'Web team'
    designation = 'Web Course Instructor'

    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`plase develop the ${feature}`)
    }
    developarequiz(version){
        console.log(`please release the version ${version}`)
    }
    privedFeedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}


 const alia = new Dvelopare(`Alia Bhatt`, 'Dhaka', 'React');
 console.log(alia);
 alia.privedFeedBack();
