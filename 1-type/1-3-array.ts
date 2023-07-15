{
  //Array
  const fruits: string[] = ['🍅', '🍓'];
  const scores: Array<number> = [1, 2, 3];

  function printArrays(fruits: readonly string[]) {}

  //Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 23];
  student[0];
  student[1];

  const [name, age] = student;
}
