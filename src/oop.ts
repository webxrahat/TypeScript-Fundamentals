// OOP in Typescript

class Animal {
  name: string;
  type: "mammal" | "bird" | "fish";

  constructor(name: string, type: "mammal" | "bird" | "fish") {
    this.name = name;
    this.type = type;
  }
}
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name, "mammal");
    this.breed = breed;
  }

  bark(): string {
    return `${this.name} says Woof!`;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.bark());
console.log(`My dog is a ${myDog.type}.`);

class Cat extends Animal {
  color: string;

  constructor(name: string, color: string) {
    super(name, "mammal");
    this.color = color;
  }

  meow(): string {
    return `${this.name} says Meow!`;
  }
}

const myCat = new Cat("Whiskers", "Tabby");
console.log(myCat.meow());
console.log(`My cat is a ${myCat.color} ${myCat.type}.`);

class Fish extends Animal {
  waterType: "freshwater" | "saltwater";

  constructor(name: string, waterType: "freshwater" | "saltwater") {
    super(name, "fish");
    this.waterType = waterType;
  }

  swim(): string {
    return `${this.name} is swimming in ${this.waterType} water.`;
  }
}

const myFish = new Fish("Goldie", "freshwater");
console.log(myFish.swim());
console.log(`My fish is a ${myFish.type}.`);
