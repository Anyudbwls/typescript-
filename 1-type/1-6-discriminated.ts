{
  type SuccessState = {
    result: 'Success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'Fail';
    reason: string;
  };
  type LoginResult = SuccessState | FailState;

  function login(): LoginResult {
    return {
      result: 'Success',
      response: {
        body: '로그인',
      },
    };
  }

  //printLoginResult(state)
  //success -> body
  //fail ->reason
  function printLoginResult(state: LoginResult) {
    if (state.result === 'Success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
