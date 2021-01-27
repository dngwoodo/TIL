export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
}

interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number): void;
    clean(): void;
}
class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
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

// 커피 메이커는 이제 clean, fillCoffeeBeans, makeCoffee을 사용할 수 있다.
// grind, preheat, extract는 내부적으로 알아서 동작하는 것이기 때문에 사용자는 몰라도 된다.
// 애들을 내부적으로 숨기는 것을 추상화라고 한다.
// 추상화를 구현하는 방법은 interface를 사용할 수 도 있고 private를 사용할 수 도 있지만 interface를 사용하면 좀 더 편리하다.
const maker: CoffeeMachine =  CoffeeMachine.makeMachine(32); // makeCoffee를 쓰면 내부적으로 grind, preheat, extract를 사용한다. 이것이 추상화이다.
maker.clean()
maker.fillCoffeeBeans(30)
maker.makeCoffee(2)

// 자, 이제 아마추어와 프로가 이 기계의 기능을 숙련도에 따라 사용하게 해보자.
class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() { // 아마추어는 makeCoffee 밖에 못씀
        const coffee = this.machine.makeCoffee(2); // makeCoffee를 쓰면 내부적으로 grind, preheat, extract를 사용한다. 이것이 추상화이다.
        console.log(coffee);
    }
}

class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() { // 프로는 makeCoffee, fillCoffeeBeans, clean 까지 사용 가능
        const coffee = this.machine.makeCoffee(2);
        console.log(coffee);
        this.machine.fillCoffeeBeans(45);
        this.machine.clean();
    }
}

const amateur = new AmateurUser(maker);
amateur.makeCoffee(); // 아마추어는 makeCoffee 밖에 안쓴다. 숙련도가 낮기 때문.

const pro = new ProBarista(maker);
pro.makeCoffee(); // 프로는 makeCoffee를 하면 fillCoffeeBeans, clean 까지 사용한다. 숙련도가 높기 때문






