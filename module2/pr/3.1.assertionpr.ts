{
  let value: any = "Assalamu alaikum, Ami shahjalal, ";
  let length3 = (value as string).length;
  // console.log(length3, "[1;31mlength3 in assertionpr.ts at line 4[0m");

  let value1: any = "hello world";
  // console.log(value1, "[1;31mvalue1 in assertionpr.ts at line 7[0m");
  let length1: number = (<string>value).length;
  // console.log(length1, "[1;31mlength1 in assertionpr.ts at line 9[0m");

  const value3: unknown = "hello world3";

  const length4 = (<string>value3).length;

  // console.log(length4, "[1;31mlength4 in assertionpr.ts at line 14[0m");
  //
  //
  //
  //
  //
}
