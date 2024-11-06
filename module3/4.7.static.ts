//w: 05/11/2024 10:45 PM Tue GMT+6 Sharifpur, Gazipur, Dhaka
{
  //w: static
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  Counter.decrement();
  // const instance3 = new Counter();
  console.log(Counter.increment());
  const counter1 = new Counter();
  console.log(counter1, "[1;31mcounter1 in 4.7.static.ts at line 28[0m"); //   //Counter {} counter1 in 4.7.static.ts at line 28
  //p: Static Access from Class, Not from Instance
  //w: counter1.increment; Property 'increment' does not exist on type 'Counter'. Did you mean to access the static member 'Counter.increment' instead?
}
