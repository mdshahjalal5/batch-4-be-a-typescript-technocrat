{
  //
  //t: type assertions let you explicitly tell the compiler the specific type of a value. They're particularly useful in cases where TypeScript can't automatically infer the correct type or when you need to override its inference

  //t: type assertion
  let anything: any;

  anything = "Next Level Web Development";

  anything = 222;

  //t:(anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000");

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
