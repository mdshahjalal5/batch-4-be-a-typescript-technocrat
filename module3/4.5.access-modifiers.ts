{ //
//p:  private: Properties or methods marked as private are only accessible within the class they are defined in. They are not accessible from subclasses (child classes) or outside the class. This is useful when you want to strictly control access to certain properties or methods so they aren’t accessible or modifiable by anything outside the class itself, including subclasses.


//t:  protected: Properties or methods marked as protected are accessible within the class they are defined in and in any subclasses (child classes). They are not accessible from outside the class hierarchy (meaning, they can’t be accessed directly on an instance of the class). This is useful when you want a property or method to be modifiable by subclasses but still keep it inaccessible from outside code.
    
  // t: access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    //
   //
    //
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

   public  addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

   public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this.
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}
