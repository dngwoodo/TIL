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

    constructor(
        coffeeBeansGram: number,
        private milk: MilkFrother,
        private sugar: SugarProvider
    ) {
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
        const coffee = this.extract(shots);
        const sugarAdded = this.sugar.addSugar(coffee);
        const milkAdded = this.milk.makeMilk(sugarAdded);
        return milkAdded;
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

class FancyMilkSteamer implements MilkFrother {
    private steamMilk():void {
        console.log('Fancy Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
        this.steamMilk();
        return {
            ...cup,
            hasMilk: true,
        }
    }
}

class ColdMilkSteamer implements MilkFrother {
    private steamMilk():void {
        console.log('Cold Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
        this.steamMilk();
        return {
            ...cup,
            hasMilk: true,
        }
    }
}

class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
        return cup;
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

class SugarMixer implements SugarProvider{
    private getSugar() {
        console.log('Getting some sugar from jar!!!!');
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

class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
        return cup;
    }
}

// Milk
const cheapMilkSteamer = new CheapMilkSteamer();
const fancyMilkSteamer = new FancyMilkSteamer();
const coldMilkMaker = new ColdMilkSteamer();
const noMilk = new NoMilk();

// Sugar
const candySugar = new CandySugarMixer();
const sugar = new SugarMixer();
const noSugar = new NoSugar();

// decoupling 시키기
const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
const fancyLatteMachine = new CoffeeMachine(12, fancyMilkSteamer, noSugar);
const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);

const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
const sweetMachine = new CoffeeMachine(12, noMilk, candySugar);

const sweetLatteMachine = new CoffeeMachine(
    12,
    cheapMilkSteamer, // 이제 여러가지 넣을 수 있음
    candySugar // 이제 여러가지 넣을 수 있음.
)
