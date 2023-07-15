{
  const num: number = -6;

  const string: string = 's';

  const boal: boolean = true;

  //undefined 데이터 타입이 결정되지 않음
  let name: string | undefined;
  let age: number | undefined;

  name = undefined;
  name = 'yujin';
  age = undefined;
  age = 25;

  function find(): number | undefined {
    return undefined;
  }

  //null 데이터 타입이 없음
  let person: string | null;

  //unknown 알수없음 ❌
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  //any 암거나 가능^^ ❌
  let anything: any = 0;
  anything = 'hello';

  //void 함수에서 아무런 값도 return 하지 않으면, 변수에 쓰면 undefined 밖에 안되서 ❌
  function print(): void {
    console.log('hello');
    return;
  }

  //never 절대 return 불가능을 명시해줌
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {} // 도달할수없는코드
  }

  //object ❌ 원시타입을 제외한 모든 오브젝트 타입 가능
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'yujin' });
  acceptSomeObject({ animal: 'dog' });
}
