// Minus One
        //function minusOne(num) {
        //     console.log(num - 1);
        //     }

        // console.log(minusOne(1000));

// Make a sentence
        // function makeSentence(param1, param2, param3) {
        //   console.log(param1 + ' really need a ' + param2 + ' as soon as ' + param3 + '.');
        // }
        // makeSentence('I', 'nap', 'possible');

// Get last Array Element
        // function getLastElement(arr) {
        //     const array = [arr]
        //     const lastelem = arr[arr.length - 1]; 
        //     console.log(lastelem)   
        // }
        // getLastElement([1, 2, 3, 4, 5, 6]);



class Hamster {
        constructor(owner = '', name, price = 15) {
            this.owner = owner;
            this.name = name;
            this.price = price;
        }
        wheelRun() {
            console.log("squeak squeak");
        }
        eatFood() {
            console.log("nibble nibble");
        }
        getPrice() {
            return this.price;
        }
        } 
        // const hammy = new Hamster('Timmy', 'Gus');
        // console.log(hammy);

class Person {
        constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
                this.name = name;
                this.age = age;
                this.height = height 
                this.weight = weight;
                this.mood = mood;
                this.hamsters = hamsters;
                this.bankAccount = bankAccount
        }
        getName() {
                return this.name;
        }
        getAge() {
                return this.age
        }
        getWeight() {
                return this.weight;
        }
        greet () {
                return console.log(`Hi! My name is ${this.name}!`)
        }
        eat () {
                this.weight += 10;
                this.mood += 15;
        }
        exercise (fat) {
                this.weight -= fat;
        }
        ageUp (num) {
                this.age += num;
                this.height += (num / 5);
                this.weight *= (num / 2);
                this.mood -= num;
                this.bankAccount += num * 10;
        }
        buyHamster(hamster) {
                this.hamsters.push(hamster);
                this.mood += 10;
                this.bankAccount -= hamster.getPrice();
        }
}

let timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5)
timmy.ageUp(9);
let gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
gus.name = "Gus"
timmy.ageUp(15);
timmy.eat(2)
timmy.exercise(2);

console.log(timmy)



// class Dinner {
//         constructor(appetizer, entree, dessert) {
//                 this.appetizer = appetizer;
//                 this.entree = entree;
//                 this.dessert = dessert;
//         }
// }

// class Chef extends Dinner {
//         constructor(appetizer, entree, dessert, drink,) {
//                 super(appetizer, entree, dessert);
//                 this.drink = drink;
//         }
//        getDinner() {
//                 console.log(`Lets start the night off with a light ${this.appetizer} dish.`);
//                 console.log(`Lets follow up with ${this.entree} from the main course menu.`);
//                 console.log(`Lets end the night with our signature ${this.dessert} bowl.`);
//                 console.log(`Enjoy you meal! Would you like a ${this.drink} with that?`);
//         }
// }      

// const italian = new Chef ('Calamari', 'Spaghetti with meatballs', 'Rasberry gelato', 'water');
// const american = new Chef ('Garden salad', 'Burger', 'Fudge brownie', "Pepsi");
// const westAfrican = new Chef ('Fufu', 'Okra soup', 'Bofrot', 'Malta');

// westAfrican.getDinner()


