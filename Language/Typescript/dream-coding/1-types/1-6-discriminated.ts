export {}
{
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(): LoginState{
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    }

    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState){
        // 공통적인 속성을 이용하여 구분한다. 여기서는 state.result을 사용하였다.
        if(state.result === 'success'){
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}