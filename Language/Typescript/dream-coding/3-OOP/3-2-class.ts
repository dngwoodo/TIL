export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram, class level, 클래스 마다 생성
    coffeeBeansGram: number = 0; // instance(object) level, 오브젝트 마다 생성

    constructor(coffeeBeansGram: number){
        this.coffeeBeansGram = coffeeBeansGram;
    }

    static makeMachine(coffeeBeansGram: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeansGram);
    }

    makeCoffee(shots: number): CoffeeCup{
        if(this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) { // static이 붙은 아이는 this를 쓰지 않고 CoffeeMaker로 접근해야 함.
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT; // 커피콩 넣은 만큼 전역 커피콩을 빼줌
        return {
            shots,
            hasMilk: false,
        }
    }
}

const maker = new CoffeeMaker(32);
console.log(maker) // CoffeeMaker { coffeeBeansGram: 32 }

// 이렇게 static을 이용하면 해당 class를 사용해서 접근하게 된다.
// 대표적으로 Math 클래스가 있다.
const maker2 = CoffeeMaker.makeMachine(19)
console.log(maker2); // CoffeeMaker { coffeeBeansGram: 19 }
