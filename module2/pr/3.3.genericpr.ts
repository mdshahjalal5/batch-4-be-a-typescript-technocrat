{
  type ApiResponse<T> = {
    status: number;
    message: string;
    data: T;
  };

  const userResponse: ApiResponse<{ name: string; age: number }> = "ami ";
  console.log(
    userResponse,
    "[1;31muserResponse in 3.3.genericpr.ts at line 9[0m",
  );
}
