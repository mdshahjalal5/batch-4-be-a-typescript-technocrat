class Student3 {
  name: string;
  age: number;
  roll: number;
  isTalented: boolean;
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

const said = new Student3("Abusaid", 13, 1, true);
console.log(said, "[1;31msaid in 4.1.class-instancepr.ts at line 20[0m");

const jamal = new Student3("Md. Jamal Ahmed", 19, 39, false);
console.log(jamal, "[1;31mjamal in 4.1.class-instancepr.ts at line 23[0m");
const kamal = new Student3("Md. Kamal Uddin", 18, 2, true);
kamal.speciality<string>("Patriotism");

//t: parameter properties

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
