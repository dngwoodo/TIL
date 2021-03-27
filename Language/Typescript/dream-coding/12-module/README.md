#### module.exports, exports의 차이점
- module.exports와 exports의 관계
  - 예제
    ```js
    // module.js
    exports.aaa = function (a,b) { return a + b }
    exports.bbb = function (c,d) { return a + b }

    // index.js
    const { aaa, ddd } = require("./module.js");
    aaa(1,3);
    bbb(5,2);
    ```
    ```js
    // 위와 같다
    // module.js
    module.exports.aaa = function (a,b) { return a + b }
    module.exports.bbb = function (c,d) { return a + b }

    // index.js
    const { aaa, ddd } = require("./module.js");
    aaa(1,3);
    bbb(5,2);
    ```
  - 설명
    ```js
    // 관계
    const module = { exports: {} }
    const exports = module.exports; // module.exports를 참조
    return module.exports // 리턴 되는 값은 module.exports
    ```
    여기서 중요한점은 exports를 이용하여 exports.add = (() => {}) 이렇게 추가하면 modulex.exports는 바뀐다.<br />
    왜나하면 call by reference로 참조하고 있기 때문이다.<br />
    하지만 module.exports에 { add: () => {} } 이렇게 주게 되면 새로운 객체를 준것이므로 exports 예전값인 {} 로 바뀐것이 없다.<br />

#### CommonJS & ES6 Module System
- CommonJS vs ES6 Module System
  ```js
  // module.js
  exports.a = 'a'; // { a: 'a'}
  exports.b = 'b'; // { a: 'a', b: 'b' }
  module.exports = function() { } // function () {} 로 값이 덮어 씌워짐

  // index.js
  const { a, b } = require('./module.js'); // a,b는 undefined
  const sum = require('./module.js'); // function () {}
  ```
  ```js
  // module.js
  // 방법 1
  const a ='a'; // 선언
  export { a }; // export

  // 방법 2
  export const b = 'b'; // 선언 + export

  // 방법 3
  export default () => {} // export default는 모듈에 하나밖에 존재하지 않으므로 변수명 필요없음.

  // index.js - 불러올 때
  // module.exports는 값을 덮어씌워버리지만 es6 모듈시스템에선 둘은 다른 객체이므로 상관X
  import { a, b } from './module'; // a, b
  import add from './module'; // () => {}
  import { default as add, a, b } from './module'; // () => {}, a, b
  import * as user from './module' // user.default, user.a, user.b 사용가능
  ```

#### module.exports를 ES6 Module System에서 불러오는 법
  - 예제 및 설명
    ```js
    // module.js
    module.exports = function() {}

    // index.js
    import * as hi from './module'; 
    // export default일때만 import hi from './module'이 가능하다.
    // export default와 module.exports는 다른 것이기 때문에 이렇게 사용해야 한다.
    // 하지만 tsconfig.json에서 esModuleInterop를 사용하면 module.exports를 export default 문법처럼 사용가능하게 해준다.(import hi from './module')
    // esModuleInterop의 내부적인 동작은 다음에 알아보도록 한다.
    ```
#### Resources
[moduke.exports와 exports의 차이점](https://programmingsummaries.tistory.com/340)</br>
[call by value vs call by reference](https://codingplus.tistory.com/29)</br>
[Typescript 기초 학습 10.기초문법8_모듈화(인프런_Zerocho님 강의 학습 의식의 흐름대로 노트 정리)](https://okayoon.tistory.com/entry/Typescript-%EA%B8%B0%EC%B4%88-%ED%95%99%EC%8A%B5-10%EA%B8%B0%EC%B4%88%EB%AC%B8%EB%B2%958%EB%AA%A8%EB%93%88%ED%99%94%EC%9D%B8%ED%94%84%EB%9F%B0Zerocho%EB%8B%98-%EA%B0%95%EC%9D%98-%ED%95%99%EC%8A%B5-%EC%9D%98%EC%8B%9D%EC%9D%98-%ED%9D%90%EB%A6%84%EB%8C%80%EB%A1%9C-%EB%85%B8%ED%8A%B8-%EC%A0%95%EB%A6%AC)