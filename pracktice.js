// class Instructor {
//     name;
//     team = 'Web team'
//     desition = 'My desition callss'
//     location;
//     constructor(name, location){ 
//         this.name = name;
//         this.location = location;
//      }
//     startSectionTiem(time){
//         console.log(`my perfect time ${time}`)
//     }
//     startQuiz(module){
//         console.log(`please the start quiz ${module}`)
//     }
// }

// const tonni = new Instructor('Mostofa', 'Dhaka');
// console.log(tonni);
// tonni.startSectionTiem('6:00');
// tonni.startQuiz(6)

// const nameAdderss = new Instructor('mostofa', 'mirpur');
// console.log(nameAdderss);

class wevDeveloper {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    international(job){
        console.log(` How to the internainal jov ${job}`);
    }
}

class JobPlasement extends wevDeveloper {
    tech;
    team = 'new group'
    disingtion = 'i have a  debeloper'
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    getFeatback(version){
        console.log(`this is a pixt version ${version})`)
    }
    myDreamiphone(iphone){
        console.log(`my dream phone ${iphone}`);
    }
    
}

const watch = new JobPlasement('Mostofa', 'Quter', 'tan tana');
console.log(watch);
watch.myDreamiphone('iphone');
watch.getFeatback('daraz')

