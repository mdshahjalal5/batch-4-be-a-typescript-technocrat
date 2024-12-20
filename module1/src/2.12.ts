{
  //t: nullable types / unknown types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  searchName(null);

  //t: unknown  typeof
  //t: The unknown type in TypeScript enforces a rule that you must check the type of a variable before using it. This means that any variable declared as unknown cannot be directly accessed or manipulated without first confirming its type.
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  getSpeedInMeterPerSecond(null);

  function processInput(input: unknown) {
    // Type checking is mandatory before using `input`
    if (typeof input === "string") {
      console.log(`The string length is ${input.length}`);
    } else if (typeof input === "number") {
      console.log(`The square is ${input * input}`);
    } else {
      console.log("Unsupported type");
    }
  }

  processInput("Hello"); // The string length is 5
  processInput(10); // The square is 100
  processInput(true); // Unsupported type
  //t: never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("mushkil se error hogaya");
  let amraa = "hey ";
  //
}
