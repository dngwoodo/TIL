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

// 싸구려 우유 거품기
class CheapMilkSteamer {
    private steamMilk():void {
        console.log('Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
        this.steamMilk();
        return {
            ...cup,
            hasMilk: true,
        }
    }
}

// 설탕 제조기
class AutomaticSugarMixer {
    private getSugar() {
        console.log('Getting some sugar from candy 🍭');
        return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
        const sugar = this.getSugar();
        return {
            ...cup,
            hasSugar: sugar
        }
    }
}


// 라떼 커피머신
// CheapMilkSteamer라는 클래스에 의존한다.(의존성 주입 사용)
// CheapMilkSteamer 클래스가 바뀌면 CaffeLatteMachine도 바뀔 수 있다.(단점)
class CaffeLatteMachine extends CoffeeMachine {
    // * milkFrother: CheapMilkSteamer <- 이 아이를 의존성 주입(dependency injection)이라고 한다.
    constructor(
        beans: number, 
        readonly serialNumber: string, 
        private milkFrother: CheapMilkSteamer // 의존성 주입, CheapMilkSteamer로 만든 인스턴스를 넣어주면 된다.
    ) {
        super(beans);
    }
    // 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        return this.milkFrother.makeMilk(coffee);
    }
}

// 설탕 커피머신
// AutomaticSugarMixer 클래스에 의존한다.(의존성 주입 사용)
// AutomaticSugarMixer 클래스가 바뀌면 CaffeLatteMachine도 바뀔 수 있다.(단점)
class SweetCoffeeMaker extends CoffeeMachine {
    // * sugar: AutomaticSugarMixer <- 이 아이를 의존성 주입(dependency injection)이라고 한다.
    constructor(
        private beans:number, 
        private sugar: AutomaticSugarMixer // 의존성 주입, CheapMilkSteamer로 만든 인스턴스를 넣어주면 된다.
    ) {
        super(beans)
    }
    makeCoffee(shots: number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return this.sugar.addSugar(coffee);
    }
}

// 정리
// 현재 설탕은 사탕을 부셔서 만들고 있다.
// 하지만 라떼 커피머신과 설탕 커피머신은 milk와 sugar가 어디서 어떻게 만들어졌는지 신경쓰지 않는다.
// 그러므로 재사용성이 매우 높다.

// 하지만 CheapMilkSteamer, SweetCoffeeMaker가 클래스 네임이 변경되면 이 아이들이 의존성 주입된 클래스들을 전부 업데이트 해주어야 한다.
// 이처럼 클래스끼리 친한 것은 좋지 않다.