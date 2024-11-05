class BankAccount {
  //p: `id` is a public and readonly property, set once in the constructor and cannot be changed afterward.
  public readonly id: number;

  //p: `name` is a public property that can be accessed and modified outside the class.
  public name: string;

  //p: `_balance` is a protected property, accessible within the class and its subclasses, but not from outside.
  protected _balance: number;

  //p: Constructor initializes the `id`, `name`, and `_balance` properties when creating a new instance of `BankAccount`.
  constructor(id: number, name: string, balance: number) {
    this.id = id; //p: Sets the readonly `id` property from the constructor parameter.
    this.name = name; //p: Sets the `name` property from the constructor parameter.
    this._balance = balance; //p: Sets the initial balance using the constructor parameter.
  }

  //p: Setter method for `deposit`, which allows adding funds to `_balance`.
  set deposit(amount: number) {
    this._balance = this.balance + amount; //p: Adds the `amount` to the current balance, updating `_balance`.
  }

  //p: Getter method for `balance`, which returns the current `_balance`.
  get balance() {
    return this._balance; //p: Returns the value of `_balance` for external access.
  }
}

//p: Creates a new `BankAccount` instance with an id, name, and initial balance of 50.
const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

//p: Uses the `deposit` setter to add 50 to the balance.
goribManusherAccount.deposit = 50;

//p: Accesses the `balance` property using the getter, which returns `_balance`.
const myBalance = goribManusherAccount.balance;

//p: Logs the current balance (50 + 50) to the console, outputting 100.
console.log(myBalance); // Output: 100
