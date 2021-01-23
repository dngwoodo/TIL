export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

const BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram
let coffeeBeansGram: number = 0;

function makeCoffee(shots: number): CoffeeCup{
    if(coffeeBeansGram < shots * BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
    }
    coffeeBeansGram -= shots * BEANS_GRAM_PER_SHOT; // 커피콩 넣은 만큼 전역 커피콩을 빼줌
    return {
        shots,
        hasMilk: false,
    }
}

coffeeBeansGram += 3 * BEANS_GRAM_PER_SHOT;
const coffee = makeCoffee(2);
console.log(coffee)
