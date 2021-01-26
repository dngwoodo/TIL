export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT = 7; // 메모리를 아끼기 위해서 CoffeeMachine 클래스 안에서만 존재함.
    constructor(public coffeeBeansGram: number) {}

    static makeMachine(coffeeBeansGram: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeansGram);
    }

    makeCoffee(shots: number): CoffeeCup{
        if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        }
    }
}