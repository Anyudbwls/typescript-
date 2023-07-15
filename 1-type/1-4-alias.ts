{
  //Type Aliases

  type Text = string;
  const name: Text = 'yujin';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'yujin',
    age: 12,
  };

  //String Literal Types
  type Name = 'name';
  let yujinName: Name;
  yujinName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
