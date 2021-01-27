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

// * MilkFrother, SugarProvider 인터페이스를 이용하여 coupling 되어 있던 관계들을 decoupling 시킬 수 있다.
interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
}

// 싸구려 우유 거품기
class CheapMilkSteamer implements MilkFrother {
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
class AutomaticSugarMixer implements SugarProvider {
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
// * 단점을 극복하기 위해서 특정 클래스가 아닌 interface를 활용한다. 내부 메서드, 프로퍼티만 다 구현되어있다면 OK이기 때문이다.
class CaffeLatteMachine extends CoffeeMachine {
    // * milkFrother: CheapMilkSteamer <- 이 아이를 의존성 주입(dependency injection)이라고 한다.
    constructor(
        beans: number, 
        readonly serialNumber: string, 
        private milkFrother: MilkFrother // MilkFrother로 클래스와 클래스끼리 커플링되어져 있던 관계를 깨버린다.
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
// * 단점을 극복하기 위해서 특정 클래스가 아닌 interface를 활용한다. 내부 메서드, 프로퍼티만 다 구현되어있다면 OK이기 때문이다.
class SweetCoffeeMaker extends CoffeeMachine {
    // * sugar: AutomaticSugarMixer <- 이 아이를 의존성 주입(dependency injection)이라고 한다.
    constructor(
        private beans:number, 
        private sugar: SugarProvider // SugarProvider 클래스와 클래스끼리 커플링되어져 있던 관계를 깨버린다.
    ) {
        super(beans)
    }
    makeCoffee(shots: number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return this.sugar.addSugar(coffee);
    }
}

// 정리
// 라떼 커피머신과 설탕 커피머신에 의존성 주입을 해준 것 까진 좋았지만
// 특정 class를 타입으로 지정해주었다. 
// 클래스와 클래스끼리 친해지면 매우 불편해진다. 왜나하면 의존하고 있는 클래스가 바뀌면 해당 클래스도 바껴야 되기 때문이다.
// 그러므로 타입을 interface를 사용하여 그 관계를 깨줘야 한다.
