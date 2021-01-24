export {}

type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
}

interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram, class level, 클래스 마다 생성, private 때문에 외부에서 보이지 않음.
    private coffeeBeansGram: number = 0; // instance(object) level, 오브젝트 마다 생성

    constructor(coffeeBeansGram: number) {
        this.fillCoffeeBeans(coffeeBeansGram)
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
        if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) { // static이 붙은 아이는 this를 쓰지 않고 CoffeeMachine로 접근해야 함.
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT; // 커피콩 넣은 만큼 전역 커피콩을 빼줌
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
        this.grindBeans(shots); // 그라인더로 커피콩 갈기
        this.preheat(); // 커피 기계 예열 시키기
        return this.extract(shots) // 커피 추출
    }
}

// MilkFrother, SugarProvider 인터페이스를 이용하여 coupling 되어 있던 관계들을 decoupling 시킬 수 있다.
interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
}

interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
}

// 싸구려 우유 거품기 클래스, 설탕 제조기 클래스를 만들어서 의존성 주입을 통해 필요한 곳에서 땡겨다 쓸 수 있게 만들어 놓는다.
// 이것을 Composition 이라고 한다.
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
class CandySugarMixer implements SugarProvider{
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
class CaffeLatteMachine extends CoffeeMachine {
    // * milkFrother: CheapMilkSteamer <- 애를 의존성 주입(dependency injection)이라고 한다.
    constructor(
        beans: number, 
        readonly serialNumber: string, 
        private milkFrother: MilkFrother
    ) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        // 자식 클래스에서 생성자를 따로 구현하는 경우에는 부모의 생성자도 실행시켜줘야 한다.
        super(beans); // 부모 생성자에 필요한 매개변수도 넣어줘야 한다.
    }
    // 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots); // 부모의 makeCoff 메서드를 쓰기 위해서 super를 이용
        return this.milkFrother.makeMilk(coffee);
    }
}

class SweetCoffeeMaker extends CoffeeMachine {
    // * sugar: CandySugarMixer <- 애를 의존성 주입(dependency injection)이라고 한다.
    constructor(private beans:number, private sugar: SugarProvider) {
        super(beans)
    }
    makeCoffee(shots: number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return this.sugar.addSugar(coffee);
    }
}

class SweetCaffeLatteCoffeeMaker extends CoffeeMachine {
    // 정리

    // 설명 및 장점
    // SweetCaffeLatteCoffeeMaker 이 클래스는 우유를 어떻게 만드는지, 설탕을 어디서 어떻게 가져와서 추가하는 지 전혀 신경 쓰지 않는다.
    // 즉, 이 클래스는 이 설탕이 사탕을 부셔서 만든 설탕인지도 모른다.
    // 이렇게 필요한 기능을 외부에서 가져와서 주입(injection) 받음으로서 composition을 사용해서 필요한 기능을 재사용 할 수가 있다.
    // Composition은 코드의 재사용성을 매우 높여준다.

    // 단점
    // 하지만 치명적인 단점은 주입된 CheapMilkSteamer, CandySugarMixer와 너무 밀접하게 coupling 되어져 있다.
    // 나중에 다른 Steamer나 SugarMixer로 바꾸게 되면 CheapMilkSteamer, CandySugarMixer을 사용하는 클래스들을 전부 업데이트는 해주어야 한다.
    // 즉, 클래스와 클래스들끼리 잘 알고 지내는 것은 매우 좋지 못하다.
    constructor(
        private beans: number, 
        private milk: MilkFrother,
        private sugar: SugarProvider
    ) {
        super(beans);
    }
    // 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        return this.milk.makeMilk(sugarAdded);
    }
}

const cheapMilkSteamer = new CheapMilkSteamer();
const candySugar = new CandySugarMixer();
const sweetMachine = new SweetCoffeeMaker(12, candySugar);
const latteMachine = new CaffeLatteMachine(12, 'S-1101', cheapMilkSteamer);
const sweetLatteMachine = new SweetCaffeLatteCoffeeMaker(
    12,
    cheapMilkSteamer,
    candySugar
)
