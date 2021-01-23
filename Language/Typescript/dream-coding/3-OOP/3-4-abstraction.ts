export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

// public
// private <- 외부 접근 불가
// protected <- 외부 접근 불가, 부모를 상속한 자식 클래스에서는 접근 가능
class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram, class level, 클래스 마다 생성, private 때문에 외부에서 보이지 않음.
    private coffeeBeansGram: number = 0; // instance(object) level, 오브젝트 마다 생성

    // constructor에 private를 붙이게 되면 인스턴스를 만들 수 없다.
    // 그래서 makeMachine 메서드를 이용하여 인스턴스를 만들게 된다.
    constructor(coffeeBeansGram: number){
        this.fillCoffeeBeans(coffeeBeansGram)
    }

    static makeMachine(coffeeBeansGram: number): CoffeeMachine {
        return new CoffeeMachine(coffeeBeansGram);
    }

    // 이제부터 이 메서드를 이용하여 내부의 private 멤버 변수를 변경해준다.
    // private는 외부에서 접근이 불가능 하기 때문이다.
    fillCoffeeBeans(beans: number){
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeansGram += beans
    }

    // * 내 클래스를 사용하는 사용자가 fillCoffeeBeans, makeCoffee 2가지만 볼 수 있게 private을 써서 안보이게 해준다. (grindBeans, preheat, extract)
    // * 이것이 추상화임.
    private grindBeans(shots: number){
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

    makeCoffee(shots: number): CoffeeCup{
        this.grindBeans(shots); // 그라인더로 커피콩 갈기
        this.preheat(); // 커피 기계 예열 시키기
        return this.extract(shots) // 커피 추출
    }
}

// constructor가 public일 때
const maker = new CoffeeMachine(30);
maker.makeCoffee(2); 