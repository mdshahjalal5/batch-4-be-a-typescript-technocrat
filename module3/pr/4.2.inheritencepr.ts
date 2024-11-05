//t: Base class representing a generic Employee with shared properties
class Employee {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
  work(hours: number) {
    console.log(`${this.name} works for ${hours} hours.`);
  }
}

//t: Manager inherits from Employee and has additional responsibility
//
class Manager extends Employee {
  teamSize: number;
  constructor(name: string, id: number, teamSize: number) {
    super(name, id);
    this.teamSize = teamSize;
  }
  manageTeam() {
    console.log(`${this.name} manages a team of ${this.teamSize} members`);
  }
}

const manager = new Manager("ismail", 3938, 5);
// console.log(manager, "[1;31mmanager in 4.2.inheritencepr.ts at line 28[0m");
manager.work(3);
const manager2 = new Manager("shah", 3386, 10);
console.log(manager2, "[1;31mmanager2 in 4.2.inheritencepr.ts at line 31[0m");
manager2.manageTeam();
manager2.work(3);
