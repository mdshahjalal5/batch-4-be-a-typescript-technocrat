{
  //t: mapped types
  //h:02/11/2024  02:05 PM Sat GMT+6  Sharifpur, Gazipur, Dhaka
  const arrOfNumbers: number[] = [1, 4, 5];

  // const arrOfStrings : string[] = ['1','4','5']
  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString(),
  );
  console.log(arrOfStrings);

  type AreaNumberRename = {
    height: number;
    width: number;
  };

  type Height = AreaNumberRename["height"]; // look up type
  // type AreaString = {
  //   height: string;
  //   width: string
  // }
  // keyof AreaNumber => "height"|"width"

  // T => {height:string;width:number}
  // key => T["width"]
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
