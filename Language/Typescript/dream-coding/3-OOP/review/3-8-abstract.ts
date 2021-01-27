export {}

type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
}

interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeansGram: number = 0;

    constructor(coffeeBeansGram: number) {
        this.fillCoffeeBeans(coffeeBeansGram)
    }

    fillCoffeeBeans(beans: number) {
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeansGram += beans
    }

    clean() {
        console.log('cleaning the machine...🧹');
    }

    private grindBeans(shots: number) {
        console.log(`grinding beans for ${shots}`);
        if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(){
        console.log('heating up... 🔥');
        
    }

    // * abstract는 구현사항을 적지 않는다.
    // * 추상 클래스는 구현부를 적을 수도 있고 안 적을 수도 있다.
    // * 이제 이 클래스를 상속한다면 무조건 extract 메서드를 구현해야 한다.
    protected abstract extract(shots:number): CoffeeCup; // 참고로 private와 abstract는 같이 사용 될 수 없다.

    makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots) // 여기에 사용되기 된다.
    }
}

class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number) {
        super(beans);
    }
    private steamMilk(): void {
        console.log('Steaming some milk... 🥛');
    }
    // 오버라이딩, abstract method이기 때문에 무조건 구현해주어야 한다.
    protected extract(shots: number): CoffeeCup {
        this.steamMilk();
        return {
            shots,
            hasMilk: true,
        }
    }
}

const latteMaker = new CaffeLatteMachine(32);
console.log(latteMaker.makeCoffee(2));
// grinding beans for 2
// heating up... 🔥
// Steaming some milk... 🥛
// { shots: 2, hasMilk: true }

latteMaker.clean();
latteMaker.fillCoffeeBeans(39);
latteMaker.makeCoffee(2);