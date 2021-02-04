console.log(this);

function simpleFunc() {
    console.log(this);
}

window.simpleFunc();

class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    }
}

const counter = new Counter();
counter.increase(); // Counter {count: 0, increase: ƒ}

const caller = counter.increase;
caller(); // undefined, 즉 선언된 곳이 기준이 아니라 호출된 곳이 기준이되고 this가 정해진다.

// const caller = counter.increase.bind(counter); // counter를 this로 쓰겠다는 것
// caller(); // Counter {count: 0, increase: ƒ}

// 조심해야 될 것
// const나 let은 window 객체에 정의되지 않지만 var는 정의되기 떄문에 조심하자.

class Bob {}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {run: f}, 즉 선언된 곳이 기준이 아니라 호출된 곳이 기준이되고 this가 정해진다.