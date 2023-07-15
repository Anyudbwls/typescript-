{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id) {
  //   //code
  //   //code
  //   // code ..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function tsFetchNum(id: string): Promise<number> {
  //   //code
  //   //code
  //   //code ..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //Optinal parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('안', '유진');
  printName('김씨');
  printName('이씨', undefined);

  //default parameter
  function defaultMessage(message: string = 'hello 기본메세지') {
    console.log(message);
  }
  defaultMessage();

  //rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(4, 5));
  console.log(addNumbers(2, 5, 10));
  console.log(addNumbers(4004, 539));
}
