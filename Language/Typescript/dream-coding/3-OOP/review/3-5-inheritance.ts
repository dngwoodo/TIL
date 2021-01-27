export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

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

// CoffeeMachine 클래스를 사용하여 CoffeeLatteMachine을 만들어보자.
// 상속을 사용한다. (extends)
// 상속을 사용하게 되면 무조건 부모 클래스의 constructor을 실행시켜야 한다. super을 사용한다.
class CoffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number) {
        super(beans); // beans는 부모 클래스의 constructor 매개변수로 사용하기 위해 필요하다.
    }

    private steamMilk(): void {
        console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number) {
        const coffee = super.makeCoffee(shots); // 부모 클래스의 makeCoffee를 호출하여 커피를 만들고
        this.steamMilk(); // 라떼머신이기 때문에 우유를 끓이는 메서드를 호출한다.
        return {
            ...coffee,
            hasMilk: true, // 우유를 끓였기 때문에 true로 변환시키고 반환해준다.
        }
    }
}

// 상속 했기 때문에 fillCoffeeBeans, clean도 사용할 수 있다. makeCoffee는 오버라이딩 되어있음.
const maker: CoffeeLatteMachine = new CoffeeLatteMachine(30)
maker.makeCoffee(2)
maker.fillCoffeeBeans(50)
maker.clean()








