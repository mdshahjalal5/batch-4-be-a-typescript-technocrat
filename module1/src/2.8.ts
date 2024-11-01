//t: destructuring

const user = {
  id: 345,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Persian",
  },
  contactNo: "0170000000",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName: midName },
} = user;

console.log(midName, "2.8.ts", 17);
//t: array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

//t: , ,  Skips the first two items, assigns "ross" to bestFriend, and collects the others ["rachel", "monica", "phoebe"] in rest.
const [, , bestFriend, ...others] = myFriends;
console.log(others, "2.8.ts", 25);
//t: [ 'rachel', 'monica', 'phoebe' ] "rest" 2.8.ts 25
