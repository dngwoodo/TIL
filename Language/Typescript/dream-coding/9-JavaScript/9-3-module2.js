// import sum, { fakeFunc as changeFakeFunc } from './9-3-module1.js' // export default이기 때문에 이름을 자기가 쓰고 싶은걸로 사용 가능. export는 as를 활용하면 가능

// console.log(sum(1,2)); // 3
// changeFakeFunc(); // fakeFunc

import * as caculator from './9-3-module1.js'
console.log(caculator.default(1,2)); // 3
caculator.fakeFunc(); // faceFunc

