export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

// 추상화를 위해서 interface를 사용하는 경우이다.
// 1. interface를 쓰게 되면 interface 이름에 I라는 prefix를 붙이는 경우나
// 2. class 이름 뒤에 CoffeeMachineImpl 이런식으로 붙이는 경우가 있다.
// 3. interface에는 구현부가 빠져 있다.
// 4. interface에 정의해둔 프로퍼티, 메서드는 implements한 class에서 무조건 구현해야 한다.
interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number): void;
    clean(): void;
}

// public
// private <- 외부 접근 불가
// protected <- 외부 접근 불가, 부모를 상속한 자식 클래스에서는 접근 가능
class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
    private static BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram, class level, 클래스 마다 생성, private 때문에 외부에서 보이지 않음.
    private coffeeBeansGram: number = 0; // instance(object) level, 오브젝트 마다 생성

    // constructor에 private를 붙이게 되면 인스턴스를 만들 수 없다.
    // 그래서 makeMachine 메서드를 이용하여 인스턴스를 만들게 된다.
    constructor(coffeeBeansGram: number) {
        this.fillCoffeeBeans(coffeeBeansGram)
    }

    static makeMachine(coffeeBeansGram: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeansGram);
    }

    // 이제부터 이 메서드를 이용하여 내부의 private 멤버 변수를 변경해준다.
    // private는 외부에서 접근이 불가능 하기 때문이다.
    fillCoffeeBeans(beans: number) {
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeansGram += beans
    }

    clean() {
        console.log('cleaning the machine...🧹');
    }

    // * 내 클래스를 사용하는 사용자가 fillCoffeeBeans, makeCoffee 2가지만 볼 수 있게 private을 써서 안보이게 해준다. (grindBeans, preheat, extract)
    // * 이것이 추상화임.
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

const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
maker.fillCoffeeBeans(32);
maker.makeCoffee(2);

console.log('--------------------------------')
// maker2는 인터페이스를 타입으로 지정했기 때문에 인터페이스 안에 들어있는 프로퍼티, 메서드만 나오게 된다.
const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
maker2.fillCoffeeBeans(32); // CoffeeMaker 인터페이스에 정의가 되어 있지 않기 때문에 에러가 난다.
maker2.makeCoffee(2);
maker2.clean();

class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
        const coffee = this.machine.makeCoffee(2); // 2 shots
        console.log(coffee); // extract <- pulling 2 shots, { shots: 2, hasMilk: false }
    }
}

class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
        const coffee = this.machine.makeCoffee(2); // 2 shots
        console.log(coffee); // extract <- pulling 2 shots, { shots: 2, hasMilk: false }
        this.machine.fillCoffeeBeans(45);
        this.machine.clean();
    }
}

console.log('--------------------------------')
const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
const amateur = new AmateurUser(maker3);
const pro = new ProBarista(maker3)
amateur.makeCoffee();
console.log('--------------------------------')
pro.makeCoffee();

/**
 * 정리
 * 1. CoffeeMachine은 CommercialCoffeeMaker, CoffeeMachine 2가지를 implements 하고 있다.
 * 2. 현재 AmateurUser, ProBarista 클래스는 CoffeeMachine의 인스턴스를 생성자 매개변수로 받고 있다.
 * 3. 하지만 AmateurUser, ProBarista 클래스 안에서 매개변수를 각각 CoffeeMaker, CommercialCoffeeMaker 인스턴스로 타입을 정해두었다.
 * 4. CoffeeMachine은 CommercialCoffeeMaker, CoffeeMachine 2가지를 implements 했지만 사용하는 곳에서 2개 인터페이스 중 1개로  타입을 정하게 되면 해당 인터페이스안에 있는 메서드, 프로퍼티만 사용가능하다.
 * 5. 그래서 pro는 makeCoffee, fillCoffeeBeans, clean 메서드 까지 사용할 수 있는 반면 amateur는 makeCoffee 밖에 사용하지 못한다.
 * 6. AmateurUser, ProBarista는 machine이 얼마나 복잡하게 만들어졌는지 알 필요없이 인터페이스에 규약된 메서드, 프로퍼티만 사용하면 된다. 이것이 추상화이다.
 */