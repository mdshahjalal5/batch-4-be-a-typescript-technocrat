{
  //t: constraints
  //t: When defining a generic type or function, you can specify that the type parameter must extend a certain type or interface. This way, you can enforce that only types that match the constraints can be passed to your generic.
  //
  //t: constraints syntax
  function functionName<T extends SomeType>(param: T): T {
    // function body
  }
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string },
  >(
    student: T,
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr. Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
