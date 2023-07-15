{
  //Union Types : or

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const title: TileSize = 8;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginResult = SuccessState | FailState;

  function login(): LoginResult {
    return {
      response: {
        body: '로그인',
      },
    };
  }

  //printLoginResult(state)
  //success -> body
  //fail ->reason
  function printLoginResult(state: LoginResult) {
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
