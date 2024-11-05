{
  //h: Defining the base class 'Animal'
  class Animal {
    name: string; //t: Property to hold the name of the animal

    constructor(name: string) {
      this.name = name; //t: Initialize the name property
    }

    //h: Method to display the animal's name
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  //p: Defining the derived class 'Dog' that extends 'Animal'
  class Dog extends Animal {
    breed: string; //t: New property specific to Dog

    constructor(name: string, breed: string) {
      super(name); //t: Call the parent constructor to set the name
      this.breed = breed; //t: Initialize the new breed property
    }

    //t: Overriding the speak method for Dog
    speak() {
      console.log(`${this.name} barks.`); //t: Custom behavior for Dog
    }
  }

  //t: Creating an instance of Dog
  const myDog = new Dog("Buddy", "Golden Retriever");

  console.log(myDog instanceof Dog); // true: myDog is an instance of Dog
  console.log(myDog instanceof Animal); // true: myDog is also an instance of Animal
  console.log(myDog instanceof Object); // true: myDog is an instance of Object

  //t: Accessing properties and methods
  console.log(myDog.name); // "Buddy" (inherited from Animal)
  console.log(myDog.breed); // "Golden Retriever" (defined in Dog)
  myDog.speak(); // "Buddy barks."

  //t: Defining another derived class 'Cat'
  class Cat extends Animal {
    lives: number; //t: New property specific to Cat

    constructor(name: string, lives: number) {
      super(name); //t: Call the parent constructor to set the name
      this.lives = lives; //t: Initialize the new lives property
    }

    //t: Overriding the speak method for Cat
    speak() {
      console.log(`${this.name} meows.`); //t: Custom behavior for Cat
    }
  }

  //t: Creating an instance of Cat
  const myCat = new Cat("Whiskers", 9);

  console.log(myCat instanceof Cat); // true: myCat is an instance of Cat
  console.log(myCat instanceof Animal); // true: myCat is also an instance of Animal
  console.log(myCat instanceof Object); // true: myCat is an instance of Object

  //t: Accessing properties and methods
  console.log(myCat.name); // "Whiskers" (inherited from Animal)
  console.log(myCat.lives); // 9 (defined in Cat)
  myCat.speak(); // "Whiskers meows."

  //t: Demonstrating the instanceof operator with built-in types
  const date = new Date();

  console.log(date instanceof Date); // true: date is an instance of Date
  console.log(date instanceof Object); // true: date is an instance of Object
  console.log(date instanceof Array); // false: date is not an instance of Array

  //t: Edge case: Checking against null and undefined
  const notAnObject = null;

  //t: Conclusion: Instances of child classes are always instances of their parent classes
}
