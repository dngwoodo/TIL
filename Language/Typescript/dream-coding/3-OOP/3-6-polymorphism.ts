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

class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup{
        const coffee = super.makeCoffee(shots);
        return {
            ...coffee,
            hasSugar: true,
        }
    }
}

const machines = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S-1101'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S-1101'),
    new SweetCoffeeMaker(16),
] 

// 여기서 알 수 있는 점은 하나의 인터페이스나 동일한 부모 클래스를 상속하게 되면 어떤 클래스인지 구분하지 않고 공통된 API를 호출 할 수 있다는 것이 큰 장점이다.
machines.forEach(machine => {
    console.log('-----------------------');
    // 현재 machines의 타입이 CoffeeMachine[] 이다. 동일한 CoffeeMachine 클래스를 상속했기 때문이다.
    // 그렇기 때문에 밑에 보이는 것처럼 CoffeeMachine에서 사용할 수 있는 메서드를 전부 사용 가능하다.
    machine.makeCoffee(1);
    machine.fillCoffeeBeans(45);
    machine.clean();
})

const machines2: CoffeeMaker[]= [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S-1101'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'S-1101'),
    new SweetCoffeeMaker(16),
] 

machines2.forEach(machine => {
    console.log('-----------------------');
    // 현재 machines의 타입이 CoffeeMaker[] 이기 때문에 makeCoffee만 사용 가능하다.
    machine.makeCoffee(1);
    machine.fillCoffeeBeans(45); // error, Property 'fillCoffeeBeans' does not exist on type 'CoffeeMaker'.ts(2339)
    machine.clean(); // error, Property 'fillCoffeeBeans' does not exist on type 'CoffeeMaker'.ts(2339)
})