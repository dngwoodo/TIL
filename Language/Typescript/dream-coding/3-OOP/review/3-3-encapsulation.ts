export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT = 7;
    constructor(private coffeeBeansGram: number) {}

    static makeMachine(coffeeBeansGram: number) {
        return new CoffeeMachine(coffeeBeansGram)
    }

    makeCoffee(shots: number) {
        if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }
}