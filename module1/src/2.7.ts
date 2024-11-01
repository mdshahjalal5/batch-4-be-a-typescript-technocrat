{
  //t: spread operator
  // rest oprator
  // destructuring

  //learn spread operatoe

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tanmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };
  //t:spread operator in objects
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  console.log(mentorList, "2.7.ts", 27);
  //t: learn rest opeartor
  // In JavaScript and TypeScript, the rest parameter (...) allows you to pass an indefinite number of arguments to a function, which it collects into an array. This is useful when the exact number of arguments isn’t known in advance, enabling you to handle multiple arguments dynamically. Example: const greetFriends = (...friends: string[]) => { friends.forEach((friend: string) => console.log(`Hi ${friend}`)); }; greetFriends("Abul", "kabul", "babul", "ubul", "labul"); Here, (...friends: string[]) is the rest parameter. It collects all arguments into the 'friends' array, enabling dynamic handling of the arguments.
  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul", "ubul", "labul");

  const restParams = (...params: string[]) => {
    const resParam = params;
    params.push("another");
    console.log(resParam, "params", "2.7.ts", 42);
  };
  restParams("ami", "tmi");
}
