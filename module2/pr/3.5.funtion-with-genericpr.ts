//t: 03/11/2024  11:32 PM Sun GMT+6  Sharifpur, Gazipur, Dhaka

type name = string;
type price = number;
const createCartItem = <T extends string, Q extends string>(
  nam: T,
  price: Q,
): [T, Q] => {
  return [nam, price];
};
const item1 = createCartItem("lapotop", "40,000");
console.log(
  item1,
  "[1;31mitem1 in 3.5.funtion-with-genericpr.ts at line 12[0m",
);

const item2 = createCartItem("phone", "20,000");
const addLastUpadted = <T>(profile: T) => {
  const lastUpdate = new Date();
  return {
    ...profile,
    lastUpdate,
  };
};
interface UserProfile {
  username: string;
  email: string;
}
const userProfile = {
  username: "js_dev",
  email3: "dev@.com",
  email: "dev@.com",
};
const updatedProfile = addLastUpadted<UserProfile>(userProfile);
console.log(
  updatedProfile,
  "[1;31mupdatedProfile in 3.5.funtion-with-genericpr.ts at line 30[0m",
);
