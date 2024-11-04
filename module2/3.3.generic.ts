{
  //t: generic type
  //t:Generics in TypeScript allow you to create flexible, reusable components that can work with various data types. This is particularly useful for creating data structures or functions that can handle different types without rewriting code for each type.
  //
  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Mezba",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(30, 20);

  //t:generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}
