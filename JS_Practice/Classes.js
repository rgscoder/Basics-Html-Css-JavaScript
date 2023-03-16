// Assignment 1
class Cat {
    constructor(age, color, attitude, fluffiness) {
    this.age = age;
    this.color = color;
    this.attitude = attitude;
    this.fluffiness = fluffiness;
}
getage() {
        return `${this.age}`;
}
getcolor() {
        return `${this.color}`;
}
getattitude() {
        return `${this.attitude}`;
        }
getfluffiness() {
        return `${this.fluffiness}`;
        }
}
const fatCat = new Cat("Ancient", "Orange", "Bad", "Very")
const smallCat = new Cat("Kitten", "Calico", "None", "Yes")

console.log(fatCat)

// // Assignment 1 Alt
// class Cat {
//     constructor(age, color, attitude, fluffiness) {
//     this.age = age;
//     this.color = color;
//     this.attitude = attitude;
//     this.fluffiness = fluffiness;
// }
// getSpecs() {
//     return `age ${this.age}, color ${this.color}, attitude ${this.attitude}, fluffiness ${this.fluffiness}`
// }
// }
// const fatCat = new Cat("Ancient", "Orange", "Bad", "Very")
// const smallCat = new Cat("Kitten", "Calico", "None", "Yes")

// console.log(smallCat.getSpecs());

// // Assignment 2
// class Pirates {
//         constructor(piratename, age, bounty) {
//        this.piratename = piratename;
//         this.age = age;
//         this.bounty = bounty;
//     }

// getname() {
//         return "My name is ${this.piratename}";
// }
// getage() {
//         return "Arrg! I am ${this.age} years old";
// }
// getbounty() {
//         return "My bounty is ${this.bounty} berries!";
// }
// }
// const blackb = new Pirates("Black Beard", "40", "3,996,000,000")
// const whiteb = new Pirates("White Beard", "72", "5,046,000,000")


// // Assignment 2 Bonus
// // class Pirates {
// //         constructor(piratename, age, bounty) {
// //        this.piratename = piratename;
// //         this.age = age;
// //         this.bounty = bounty;
// //     }

// // getname() {
// //         return "My name is ${this.piratename}";
// // }
// // getage() {
// //         return "Arrg! I am ${this.age} years old";
// // }
// // getbounty() {
// //         return "My bounty is ${this.bounty} berries!";
// // }
// // }
// // const x = new Pirates("Black Beard", "40", "3,996,000,000")
// // const y = new Pirates("White Beard", "72", "5,046,000,000")

// // const jollyRoger = ["Black Beard", "Van", "Doc"]
// // const blackPearl = ["White Beard", "Marco", "Ace"]

// // for (let i = 0; i < jollyRoger.length; i++) {
// //         console.log(`piratename ${jollyRoger[i]}, age ${x.getage()}, bounty ${x.getbounty()}`
// //         );
// // }

// // for (let i = 0; i < blackPearl.length; i++) {
// //         console.log(`piratename ${blackPearl[i]}, age ${y.getage()}, bounty ${y.getbounty()}`
// //         );
// // }