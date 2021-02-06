'use strict';

class Car {
    engine = 0;
    move() {
        const engine = this.engine + 1;
        console.log(engine);
    }
}

const car = new Car();
car.move();

// 이 파일을 컴파일한 js파일이 브라우저의 Sources 탭에 보인다.
// 그래서 디버깅 하는게 매우 어려워진다.
// 그러므로 "sourceMap"라는 옵션을 true로 켜주면 된다.
// 그러면 .map이라는 파일이 생성된다. 
// map이라는 파일은 ts와 js를 연결하기 위한 모든 정보들이 들어있는 파일이다.
// 즉 ts로 작성한 코드의 어느부분이 js에서 어느 부분인지 알려주는 파일이다.


