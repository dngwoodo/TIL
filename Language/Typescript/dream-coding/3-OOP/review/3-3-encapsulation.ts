export {}

type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT = 7;
    constructor(private coffeeBeansGram: number) {}

    static makeMachine(coffeeBeansGram: number) {
        return new CoffeeMachine(coffeeBeansGram)
    }

    makeCoffee(shots: number) {
        if(this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    // private는 외부에서 접근이 불가능하므로 fillCoffeeBeans 메서드를 활용하여 변경해준다.
    fillCoffeeBeans(beans: number) {
        if(beans < 0) {
            throw new Error('value for beans should be greater than 0');
        }
        this.coffeeBeansGram += beans
    }
}

// getter, setter ✨
class User {
    constructor(private firstName: string, private lastName: string) {};

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    get getFirstName(): string {
        return this.firstName;
    }

    set setFirstName(newFirstName) {
        if(newFirstName.length === 1) {
            throw new Error('성은 한 글자보다 더 길어야 합니다.');
        }
        this.firstName = newFirstName
    }
}

const user = new User('kim', 'dongwoo');
console.log(user.fullName()); // kim dongwoo

// user.firstName; // Property 'firstName' is private and only accessible within class 'User'.ts(2341)
console.log(user.getFirstName); // kim

// user.setFirstName = 'l'; // throw new Error('성은 한 글자보다 더 길어야 합니다.');
user.setFirstName = 'lee';
console.log(user.getFirstName); // lee

console.log(user.fullName()); // lee dongwoo
