{
  //w: 05/11/2024 11:12 PM Tue GMT+6 Sharifpur, Gazipur, Dhaka
  //
  //
  //
  //w: Demonstrating polymorphism using `Person`, `Student`, and `Developer` classes

  class Person {
    //w: Default sleep method for `Person`
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }
  class Student extends Person {
    //w: Override `getSleep` to provide specific behavior for `Student`
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    //w: Override `getSleep` to provide specific behavior for `Developer`
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  //w: This function accepts any `Person` type and calls its `getSleep` method
  const getSleepingHours = (param: Person) => {
    param.getSleep(); //w: Executes `getSleep` based on actual object type
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1); // Output: I am sleeping for 8 hours per day
  getSleepingHours(person2); // Output: I am sleeping for 7 hours per day
  getSleepingHours(person3); // Output: I am sleeping for 6 hours per day

  //w: Polymorphism with shapes and areas calculation

  class Shape {
    //w: Base `getArea` method with default return of 0
    getArea(): number {
      return 0;
    }
  }

  //w: Circle class extending Shape, representing a circle with radius
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super(); //w: Calls Shape's constructor
      this.radius = radius;
    }

    //w: Override `getArea` to calculate area of the circle
    getArea(): number {
      return Math.PI * this.radius * this.radius; //w: Area formula for a circle
    }
  }

  //w: Rectangle class extending Shape, representing a rectangle with height and width
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super(); //w: Calls Shape's constructor
      this.height = height;
      this.width = width;
    }

    //w: Override `getArea` to calculate area of the rectangle
    getArea(): number {
      return this.height * this.width; //w: Area formula for a rectangle
    }
  }

  //w: Function that takes any Shape type and calls its `getArea` method
  const getShapeArea = (param: Shape) => {
    console.log(param.getArea()); //w: Outputs area based on the specific shape object
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1); // Output: 0 -> Default area of Shape
  getShapeArea(shape2); // Output: 314.159... -> Area of Circle with radius 10
  getShapeArea(shape3); // Output: 200 -> Area of Rectangle with height 10 and width 20
}
