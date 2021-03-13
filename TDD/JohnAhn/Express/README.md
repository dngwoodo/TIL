### jest.fn()

jest.fn()를 이용하면 가짜 함수를 생성하므로 의존적인 부분을 해결할 수 있다.<br />
그리고 이 가짜함수는 이 함수에 의해서 어떤 일들이 발생했는 지, <br />
다른 코드들에 의해서 어떻게 호출되는지를 기억하기 때문에 이 함수가 내부적으로 어떻게 사용되는지 검증할 수도 있다.(Spy 역할)

```js
const mockFunction = jest.fn();

// call
mockFunction();
mockFunction("hello"); // 인자를 넘겨 줄 수도 있다.

// return
mockFunction.mockReturnValue("가짜 함수 반환");
console.log(mockFunction); // 가짜 함수 반환

// test
mockFunction(); // 2번 실행
mockFunction("hello"); // 1번 실행
expect(mockFunction).toBeCallWith("hello"); // hello라는 인자와 호출되었는 지 테스트
expect(mockFunction).toBeCallTimes(2); // 2번 실행 되었는지 테스트
```

#### 통합 테스트

통합 테스트는 모듈을 통합하는 단계에서 수행하는 테스트이다.<br/>
단위 테스트를 먼저 수행하여 모듈들이 잘 작동되는 것을 확인했다면<br/>
이제 이 모듈들을 연동하여 테스트를 수행한다.<br/>
이렇게 연동해서 테스트하는 것이 통합테스트이다.<br/>

<strong>통합 테스트를 하는 이유</strong>

1. 모듈들이 상호 작용이 잘 이루어지는지 검증하기 위해서
1. 통합하는 과정에서 발생할 수 있는 오류를 찾기 위해서

#### Supertest

nodejs http 서버를 테스트하기 위해 만들어진 모듈<br/>
supertest모듈을 이용해서 통합 테스트를 쉽게 구현 가능<br/>
