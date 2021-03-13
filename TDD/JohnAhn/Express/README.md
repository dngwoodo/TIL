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
