export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

// public
// private <- 외부 접근 불가
// protected <- 외부 접근 불가, 부모를 상속한 자식 클래스에서는 접근 가능
class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // 1shot 당 커피콩 7gram, class level, 클래스 마다 생성, private 때문에 외부에서 보이지 않음.
    private coffeeBeansGram: number = 0; // instance(object) level, 오브젝트 마다 생성

    // constructor에 private를 붙이게 되면 인스턴스를 만들 수 없다.
    // 그래서 makeMachine 메서드를 이용하여 인스턴스를 만들게 된다.
    constructor(coffeeBeansGram: number){
        this.fillCoffeeBeans(coffeeBeansGram)
    }

    static makeMachine(coffeeBeansGram: number): CoffeeMaker {
        return new CoffeeMaker(coffeeBeansGram);
    }

    // 이제부터 이 메서드를 이용하여 내부의 private 멤버 변수를 변경해준다.
    // private는 외부에서 접근이 불가능 하기 때문이다.
    fillCoffeeBeans(beans: number){
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeansGram += beans
    }

    makeCoffee(shots: number): CoffeeCup{
        if(this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) { // static이 붙은 아이는 this를 쓰지 않고 CoffeeMaker로 접근해야 함.
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT; // 커피콩 넣은 만큼 전역 커피콩을 빼줌
        return {
            shots,
            hasMilk: false,
        }
    }
}

// 현재 3-2-class.ts의 문제점이 -34를 넣어도 오류가 나지 않음.
// const maker = new CoffeeMaker(-34);
// console.log(maker); // CoffeeMaker { coffeeBeansGram: -34 }

// constructor가 public일 때
const maker = new CoffeeMaker(30);

// constructor가 private일 때
CoffeeMaker.makeMachine(30);


// getter, setter ✨
class User{
    private internalAge = 4;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    get age(): number {
        return this.internalAge;
    }
    set age(num: number){
        if(num < 0){
            throw new Error('age는 0 보다 작을 수 없습니다.')
        }
        this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string){} // 이렇게 축약 가능
}

const user = new User('Steve', 'Jobs');
console.log(user.fullName) // Steve Jobs
user.age = -1; // throw new Error('age는 0 보다 작을 수 없습니다.')







