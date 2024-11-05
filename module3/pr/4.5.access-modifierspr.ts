{
  //
  //
  //
  //
  // t: Class with access modifiers to control visibility of properties and methods

  class BankAccount {
    // t: public readonly id can be accessed anywhere, but can't be changed after initialization
    public readonly id: number;

    // t: public name is accessible and modifiable from anywhere
    public name: string;

    // t: private _balance can only be accessed within the class itself, so direct access outside is restricted
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      // t: Initializing properties using constructor parameters
      this.id = id;
      this.name = name;
      this._balance = balance; // setting initial balance
    }

    // t: public addDeposit method allows modification of balance, accessible from outside the class
    public addDeposit(amount: number) {
      this._balance += amount; // add to balance
    }

    // t: public getBalance method provides read-only access to _balance, but does not allow direct modification
    public getBalance() {
      return this._balance; // access balance value
    }
  }

  // t: Subclass StudentAccount inherits from BankAccount and can access public methods and properties of BankAccount
  class StudentAccount extends BankAccount {
    // t: test method demonstrating inheritance; can access methods like addDeposit and getBalance, but not _balance directly
    test() {
      // Example usage:
      console.log("Account Balance:", this.getBalance()); // can access getBalance
      this.addDeposit(10); // can call addDeposit
    }
  }

  // t: Creating a new instance of BankAccount
  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  // t: Accessing public methods to modify and retrieve balance
  goribManusherAccount.addDeposit(20); // adding 20 to balance
  const myBalance = goribManusherAccount.getBalance(); // retrieving balance
  console.log(myBalance); // Output: 40 (initial 20 + 20 deposit)

  //
  //
  //
  //
  //
  //
  //
  //
  //
  {
    // t: Library system where each Book has a unique ID and an internal stock count

    class Book {
      public readonly id: number; // Unique identifier, cannot be changed
      public title: string;
      private _stock: number; // Internal stock count, accessible only within the class

      constructor(id: number, title: string, stock: number) {
        this.id = id;
        this.title = title;
        this._stock = stock;
      }

      public addStock(amount: number) {
        this._stock += amount; // Increase stock
      }

      public getStock(): number {
        return this._stock; // Get current stock count
      }
    }

    class DigitalBook extends Book {
      public fileSize: number; // File size in MB

      constructor(id: number, title: string, stock: number, fileSize: number) {
        super(id, title, stock);
        this.fileSize = fileSize;
      }
    }
    const ebook = new DigitalBook(101, "E-Book Title", 50, 5);
    ebook.addStock(20);
    console.log(ebook.getStock()); // Output: 70
  }

  {
    // t: Online Store Item management with price, name, and stock count

    class StoreItem {
      public name: string;
      protected _price: number; // Price accessible to subclasses but not outside

      constructor(name: string, price: number) {
        this.name = name;
        this._price = price;
      }

      public getPrice(): number {
        return this._price;
      }
    }

    class DiscountedItem extends StoreItem {
      private discount: number; // Discount rate, specific to DiscountedItem

      constructor(name: string, price: number, discount: number) {
        super(name, price);
        this.discount = discount;
      }

      public getDiscountedPrice(): number {
        return this._price * (1 - this.discount);
      }
    }
    const saleItem = new DiscountedItem("Laptop", 1000, 0.1);
    console.log(saleItem.getDiscountedPrice()); // Output: 900
  }

  {
    // t: Employee system with base Employee class and specialized Manager subclass

    class Employee {
      public name: string;
      private _salary: number; // Only accessible within the class

      constructor(name: string, salary: number) {
        this.name = name;
        this._salary = salary;
      }

      public getSalary(): number {
        return this._salary;
      }
    }

    class Manager extends Employee {
      private _bonus: number;

      constructor(name: string, salary: number, bonus: number) {
        super(name, salary);
        this._bonus = bonus;
      }

      public getTotalCompensation(): number {
        return this.getSalary() + this._bonus;
      }
    }
    const manager = new Manager("Alice", 50000, 5000);
    console.log(manager.getTotalCompensation()); // Output: 55000
  }

  {
    // t: Car Rental system with base Vehicle class and ElectricCar subclass

    class Vehicle {
      public readonly vin: string; // Vehicle Identification Number, unique and immutable
      public model: string;

      constructor(vin: string, model: string) {
        this.vin = vin;
        this.model = model;
      }
    }

    class ElectricCar extends Vehicle {
      private batteryCapacity: number; // Battery capacity in kWh

      constructor(vin: string, model: string, batteryCapacity: number) {
        super(vin, model);
        this.batteryCapacity = batteryCapacity;
      }

      public getBatteryCapacity(): number {
        return this.batteryCapacity;
      }
    }
    const myElectricCar = new ElectricCar("123ABC", "Tesla Model S", 100);
    console.log(myElectricCar.getBatteryCapacity()); // Output: 100
  }

  {
    // t: University Staff system with base Staff class and Professor subclass

    class Staff {
      public name: string;
      private _salary: number; // Accessible only within Staff

      constructor(name: string, salary: number) {
        this.name = name;
        this._salary = salary;
      }

      public getSalary(): number {
        return this._salary;
      }
    }

    class Professor extends Staff {
      public subject: string;

      constructor(name: string, salary: number, subject: string) {
        super(name, salary);
        this.subject = subject;
      }

      public giveLecture(): string {
        return `${this.name} is giving a lecture on ${this.subject}`;
      }
    }
    const professor = new Professor("Dr. Smith", 70000, "Physics");
    console.log(professor.giveLecture()); // Output: Dr. Smith is giving a lecture on Physics
  }
}
