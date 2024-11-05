//w: 05/11/2024 06:27 PM Tue GMT+6 Sharifpur, Gazipur, Dhaka
//
//
type RegulrUser = {
  name: string;
  age: number;
};

type PremiumUser = {
  name: string;
  age: number;
  subscriptionLevel: "premium";
};

const printUserInfo = (user: RegulrUser | PremiumUser) => {
  if ("subscriptionLevel" in user) {
    console.log(
      `${user.name}, Age:${user.age}, subscriptionLevel: ${user.subscriptionLevel}`,
    );
  } else {
    console.log(`User ${user.name}, Age: ${user.age},`);
  }
};
const regularUser: RegulrUser = {
  name: "Jamal",
  age: 30,
};

const premiumUser = {
  name: "iyakub",
  age: 33,
  subscriptionLevel: "premium",
};
printUserInfo(regularUser);
printUserInfo(premiumUser);
