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


#### Resources
[moduke.exports와 exports의 차이점](https://programmingsummaries.tistory.com/340)
[call by value vs call by reference](https://codingplus.tistory.com/29)