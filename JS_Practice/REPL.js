// class Governor {
//     static stateOf () {
//         return ['New Jersey', 'California', 'Florida'];
//     }
//     constructor(age, affiliation, popularity) {
//         this.age = age;
//         this.affiliation = affiliation;
//         this.popularity = popularity;
//     }
//    pledge () {
//     return `I am a ${this.affiliation}`;
//    }
//     getSpecs() {
//         return `age ${this.age}, affiliation ${this.affiliation}, popularity ${this.popularity}`
//     } 
//     } 
// console.log(Governor.getSpecs())


class Person {
    constructor(eyeColor, hairColor, age) {
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
    geteyeColor() {
        return `${this.eyeColor}`
    }
    gethairColor() {
        return `${this.hairColor}`
    }
    getage() {
        return `${this.age}`
    }
}

const worker = new Person("Brown", "Brown", 54);
console.log(worker.getage());

class PostalWorker extends Person {
    constructor (eyeColor, hairColor, age, name) {
      super(eyeColor, hairColor, age);
      this.name = name;
    }
    getMail () {
      console.log(`${this.name} just dropped off a letter!`);
    }
    getAppearance () {
      console.log(`'${this.name} has ${this.hairColor} hair.`);
    }
}
    const mailLady = new PostalWorker("Blue", "Blonde", 30, "Samantha");
  console.log(mailLady);
    const mailMan = new PostalWorker("Green", "Black", 53, "Harold");
  console.log(mailLady);

  
  
  class Chef extends Person {
    constructor (eyeColor, hairColor, age, skill) {
      super(eyeColor, hairColor, age);
      this.skill = skill;
    }
    getExperience () {
      console.log(`The ${this.skill} has been working here since he was ${this.age} years old`);
    }
    getAppearance () {
      console.log(`'${this.skill} has ${this.hairColor} hair and ${this.eyeColor} eyes.`);
    }
}
    const headChef = new Chef("Grey", "Ginger", 41, "Thomas");
  console.log(headChef);
    const sousChef = new Chef("Brown", "Black", 32, "Debbie");
  console.log(sousChef);