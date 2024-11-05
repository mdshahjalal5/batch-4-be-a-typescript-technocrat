//
//w: 05/11/2024  07:58 AM Tue GMT+6  Sharifpur, Gazipur, Dhaka
//t: Class: Template for objects.It defines properties and actions (methods) the objects will have
class Student3 {
  name: string;
  age: number;
  roll: number;
  isTalented: boolean;
  //t:A constructor is a special function in a class. It runs when an instance is created and sets up initial values
  constructor(name: string, age: number, roll: number, isTalented: boolean) {
    this.name = name;
    this.roll = roll;
    this.age = age;
    this.isTalented = isTalented;
  }
  speciality<T>(values: T): void {
    console.log(
      `I am ${this.name},  my  speciality is awesome talented: ${this.isTalented}, my value is ${values}`,
    );
  }
}
//t: An instance is an actual object created from a class. Each instance has its own set of properties and methods from the class.
//t: instance
const said = new Student3("Abusaid", 13, 1, true);
console.log(said, "[1;31msaid in 4.1.class-instancepr.ts at line 20[0m");

const jamal = new Student3("Md. Jamal Ahmed", 19, 39, false);
console.log(jamal, "[1;31mjamal in 4.1.class-instancepr.ts at line 23[0m");
const kamal = new Student3("Md. Kamal Uddin", 18, 2, true);
kamal.speciality<string>("Patriotism");
//
//
//
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  showIntro(): void {
    console.log(`${this.model}, year: ${this.year}, make: ${this.make}`);
  }
}
const toyota = new Car("Toyota", "9bfgh110", 2023);
console.log(toyota, "[1;31mtoyota in 4.1.class-instancepr.ts at line 41[0m");

//t: parameter properties
//t:In TypeScript, parameter properties are a shorthand syntax used in the constructor of a class to declare and initialize class properties in a more concise way. This feature allows you to define and initialize class properties directly in the constructor's parameter list without needing to explicitly declare them in the class body.How Parameter Properties Work When you prefix a constructor parameter with an access modifier (public, private, or protected), TypeScript automatically creates a class property with that name and initializes it with the value passed to the constructor.
//

class Person {
  //w: parameter properties:  as  I mention the modifier type inside the constructor I do not delclare it before the constructor ts automatically do this while compiler
  //p: public, private, protected these are modifier type

  constructor(
    public name: string,
    public age: number,
  ) {}
  inroduce(): void {
    console.log(`I am ${this.name}, I am ${this.age} years old.`);
  }
}

const person1 = new Person("Shah", 3);
console.log(person1, "[1;31mperson1 in 4.1.class-instancepr.ts at line 69[0m");
