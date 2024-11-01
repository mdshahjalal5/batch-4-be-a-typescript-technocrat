// Type Alias

type Student = {
  name: string;
  age: number;
  contactNo?: string;
  gender: string;
  address: string;
};

const student1: Student = {
  name: "Mezba",
  age: 50,
  gender: "male",
  contactNo: "0170000000",
  address: "ctg",
};

const student2: Student = {
  name: "Mir",
  age: 40,
  gender: "male",
  address: "dhk",
};

const student3: Student = {
  name: "Mir",
  age: 40,
  gender: "male",
  address: "dhk",
};

type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "Persian";
const isAdmin: IsAdmin = true;

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
console.log("add", "2.9.ts", 42);
console.log("ami", "2.9.ts", 42);