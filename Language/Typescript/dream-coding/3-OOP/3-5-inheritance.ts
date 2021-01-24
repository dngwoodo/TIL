export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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

class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, readonly serialNumber: string) {
        // Constructors for derived classes must contain a 'super' call.ts(2377)
        // 자식 클래스에서 생성자를 따로 구현하는 경우에는 부모의 생성자도 실행시켜줘야 한다.
        super(beans); // 부모 생성자에 필요한 매개변수도 넣어줘야 한다.
    }
    private steamMilk(): void {
        console.log('Steaming some milk... 🥛');
    }
    // 오버라이딩
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots); // 부모의 makeCoff 메서드를 쓰기 위해서 super를 이용
        this.steamMilk();
        return {
            ...coffee,
            hasMilk: true,
        }
    }
}

const latteMachine = new CaffeLatteMachine(23, 'S-1022');
const coffee = latteMachine.makeCoffee(1);
console.log(coffee);
console.log(latteMachine.serialNumber); // 접근 가능, readonly이기 때문에 변경 불가
