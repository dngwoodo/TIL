export {}

type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
}


interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

// 커피머신
class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;

    constructor(private coffeeBeansGram: number) {
        
    }

    static makeMachine(coffeeBeansGram: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeansGram);
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

    private extract(shots:number): CoffeeCup {
        console.log(`Pulling ${shots} shots... ☕️`);
        return {
            shots,
            hasMilk: false,
        }
    }

    makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots)
    }
}

// 라떼 커피머신
class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number) {
        super(beans);
    }

    private steamMilk(): void {
        console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number) {
        const coffee = super.makeCoffee(shots);
        this.steamMilk();
        return {
            ...coffee,
            hasMilk: true,
        }
    }
}

// 설탕 커피머신
class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return {
            ...coffee,
            hasSugar: true,
        }
    }
}

// 커피 머신기들 만들어서 변수에 넣기
const machines = [
    new CoffeeMachine(16),
    new CoffeeLatteMachine(16),
    new SweetCoffeeMaker(16),
]

// machines의 타입은 CoffeeMachine[] 이다.
// CoffMachine을 상속받았기 때문에 이 머신들은 makeCoffee, filleCoffeeBeans, clean 메서드를 호출 할 수 있다.
machines.forEach(machine => {
    machine.makeCoffee(1);
    machine.fillCoffeeBeans(45);
    machine.clean();
})

// 하지만 만약에 machines의 타입이 CoffeeMaker[] 이라면?
// makeCoffee 메서드만 호출 할 수  있다.

// 정리
// 다형성이라는 것은 상속을 통해 만들어진 자식 클래스들은 부모 클래스의 공통 메서드를 호출 할 수 있는 것이다.
// 하지만 변수에 인터페이스를 통해 타입을 제한하면 인터페이스에 정의된 메서드만 호출 할 수 있다.

