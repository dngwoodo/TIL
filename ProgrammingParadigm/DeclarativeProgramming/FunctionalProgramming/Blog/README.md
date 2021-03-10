### 함수형 프로그래밍
- 순수함수
- 특징
  - 불변성(Immutable)
  - 참조 투명성(Referential TransParency)
  - 일급 함수(First-class Function)
  - 게으른 평가(Lazy Evaluation)
- 장점

#### 순수 함수
- 순수 함수(Pure Functions)
  - 동일한 입력에 대해 항상 동일한 출력을 반환
  - 함수 내에서 외부 공유 변수를 사용하거나 함수 바깥의 상태에 영향을 주면 안됨
  - 디버그, 테스팅 쉬움
  - 참조 투명성(referentially transparent)덕분에, 메모이제이션(memoization) 최적화 기법 이용가능
  ```js
  // 순수 X
  // 반환값 없이 부가효과를 이용
  function addTaco(array) {
    array.push('taco');
  }

  // 순수 X
  // 인자 대신 공유 변수(globalArray) 이용
  function addTaco() {
    return [...globalArray, 'taco'];
  }

  // 순수 O
  function addTodo(array) {
    return [...array, 'taco']
  }
  ```

#### 특징
- 불변성(Immutability)
  - 어떤 값의 상태를(메모리에 이미 담긴 상태를) 변경하지 않는다라는 뜻
  - 객체나 배열의 경우도 불변하게 다룰 수 있다
  ```js
  // mutable
  const bands = ['Metallica', 'Queen'];
  bands.push('Nirvana')

  // immutable
  const someBands = ['Metallica', 'Queen'];
  const bands = [...someBands, 'Nirvana'];
  ```

- 참조 투명성(Referential TransParency)
  - 프로그램의 변경 없이도 어떤 표현식을 값으로 대체할 수 있다라는 뜻
  ```js
  const someName = 'Henry';

  function hello() {
    console.log(`Hello, ${someName}`);
  }
  ```
  ```js
  function hello(name) {
    console.log(`Hello, ${name}`);
  }

  function main() {
    // 이제 hello함수는 항상 일관적으로 반환한다. 참조에 투명해짐
    const helloString = hello('Henry');
    console.log(helloString)
  }
  ```

  - 일급 함수(First-class Function)
    - 대상(함수)을 함수의 매개변수로 넘길 수 있다.
    - 대상(함수)을 함수의 반환값으로 돌려줄 수 있다.
    - 대상(함수)을 변수나 자료구조에 담을 수 있다.
    ```ts
    type Func = (par: number) => string;
    
    function canBeParameter(func: Func) {
      // do Something
    }
    
    function canReturn(): Func {
      return (par) => par.toString();
    }
    
    const arr: Func[] = [
      (par) => par.toString(),
    ];
    ```

  - 게으른 평가(Lazy Evaluation)
    - 필요한 시점에 평가(Lazy Evaluation)
    ```js
    // 제네레이터 사용
    function* infiniteValue(acc = 0) {
      yield acc;
      yield* infiniteValue(acc + 1);
    }

    const iter = infiniteValue();
    console.log(iter.next().value); // 0
    console.log(iter.next().value); // 1
    console.log(iter.next().value); // 2
    console.log(iter.next().value); // 3
    console.log(iter.next().value); // 4
    ```

#### 장점
예측 가능한 코드가 되어 버그가 생길 확률이 줄고 더 안전한 프로그램을 만들 수 있다.


#### Resource
[[번역] JavaScript 함수형 프로그래밍 3단계로 설명하기](https://blog.ull.im/engineering/2019/04/07/functional-programming-with-javascript-in-3-steps.html)
[함수형 프로그래밍에 관해](https://medium.com/humanscape-tech/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%97%90-%EA%B4%80%ED%95%B4-7f6172599fc)