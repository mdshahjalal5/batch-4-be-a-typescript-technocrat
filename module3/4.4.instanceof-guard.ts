{
  //t: instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am mewaing");
    }
  }

  // smart way te handle korar jnne chaile amra function bebohar krte pari
  const isDog2 = (animal: Animal) => {
    return animal instanceof Dog;
  };
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  //t: In TypeScript, simply checking if a type guard returns true or false is not enough to access specific methods or properties of derived classes. We need more safety through explicit type checks to ensure that the methods we want to use actually exist on the object. This practice maintains type safety, prevents runtime errors, and clarifies code intent, allowing TypeScript to properly narrow down types and ensure that our code behaves as expected.

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");
  console.log(isDog2(dog));

  getAnimal(cat);

  //
}
