const x = {};
const y = {};
console.log(x); // { __proto__ }
console.log(y); // // { __proto__ }

console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //     console.log('making...☕️');
    // }
}

CoffeeMachine.prototype.makeCoffee = () => {
    console.log('making...☕️');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
};

// 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
LatteMachine.prototype.constructor = LatteMachine;
console.dir(LatteMachine);

const latteMachine = new LatteMachine(123);
latteMachine.makeCoffee();