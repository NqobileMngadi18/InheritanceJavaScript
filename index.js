/* 1. Create a class Animal with the properties (name,age) */

// This is a class animal
class Animal {
    constructor(name, age ) {
        this.name = name;
        this.age = age;
        
    }
}
const myAnimal = new Animal ("Elephant", 12);
console.log(myAnimal.name);
console.log(myAnimal.age)

/* 2. Create a class Mammal that extends Animal and has a property (warmblooded:boolean)
and has a function feeds() with a parameter type. */

// This is a Mammal class extended from Animal class
class Mammal extends Animal {
    constructor(name, age, warmBlooded) {
        super(name, age)
        this.warmBlooded = warmBlooded;
    }

    feeds(type) {
        console.log(`${this.name} feeds its kids with ${type}.`);    
    }
}
const Elephant = new Mammal ("Elephant", 12, true);

console.log(Elephant.name);     
console.log(Elephant.age); 
console.log(Elephant.warmBlooded);

Elephant.feeds("milk");

/* 3. Create a class Dog that extends Mammal and has a property (breed) and has a function
describe(). */

// This is Dog class extended from Mammal class
class Dog extends Mammal {
    constructor(name, age, warmBlooded, breed) {
        super(name, age, warmBlooded)
        this.breed = breed;
    }
// Function
    describe() {
        console.log(`${this.name} is a ${this.breed} dog, aged ${this.age}, and it is ${this.warmBlooded ? 'warm-blooded' : 'cold-blooded'}.`);
    }
}

const myDog = new Dog ("Bob", 9, true, "Golden retriever");

myDog.describe ();
myDog.feeds ("milk")

/*4. Create a class Bird that extends Animal and has a property (wingspan) and has a
function hatchEggs() that takes a parameter period . */

// This is a Bird class extended from Aniaml class
class Bird extends Animal {
    constructor(name, age, wingSpan) {
        super(name, age)
        this.wingSpan = wingSpan;
    }
// Function
    hatchEggs(period) {
        console.log(`${this.name} hatches its eggs after ${period} days.`);
    }
}

const parrot = new Bird("Parrot", 5, "30cm");

console.log(parrot.name);  
console.log(parrot.age);       
console.log(parrot.wingSpan); 

parrot.hatchEggs(21);

/* 5. Create a class Parrot that extends Bird that has a property (canTalk:boolean) and
function speaks() that takes a parameter words. */

// This is a Parrot class extended from a Bird class
class Parrot extends Bird {
    constructor(name, age, wingSpan, canTalk) {
        super(name, age, wingSpan)
        this.canTalk = canTalk;
    }
// Function
    speaks(words) {
        if (this.canTalk) {
            console.log(`${this.name} says: "${words}"`);    
        } else {
            console.log(`${this.name} cannot talk.`);
        }
    }   
}

const talkingParrot = new Parrot("Kiwi", 3, "30cm", true);
const quietParrot = new Parrot("Coco", 2, "28cm", false);

talkingParrot.speaks("Hello! I am a smart bird.");  
quietParrot.speaks("Can you hear me?");    

/* 6. Create several instances of Dogs, Parrots for each calling the functions feeds showing
what they eat, describe,hatcheggs and speaks. */

// Dogs
const dog1 = new Dog("Bob", 23, true, "German Shepherd");
const dog2 = new Dog("Terrel", 14, true, "Labrador");

dog1.describe();
dog1.feeds("milk");

dog2.describe();
dog2.feeds("dog food");

// Parrots
const parrot1 = new Parrot("Sizwe", 3, "30cm", true);
const parrot2 = new Parrot("Melon", 2, "25cm", false);

parrot1.hatchEggs(21);
parrot1.speaks("Hello, I am Sizwe!");

parrot2.hatchEggs(19);
parrot2.speaks("Can you hear me?");

/* 7. Create a class Home that has the property (pets=[]) and functions addPets and listPets()
that has all the parrots and dogs in task 6 */

// Home class
class Home {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  listPets() {
    console.log("List of Pets in Home:");
    this.pets.forEach((pet, index) => {
      console.log(`${index + 1}. ${pet.name} (${pet.constructor.name})`);
    });
  }
}

// Home instance
const myHome = new Home();

// Added pets 
myHome.addPet(dog1);
myHome.addPet(dog2);
myHome.addPet(parrot1);
myHome.addPet(parrot2);

// All pets
myHome.listPets();
