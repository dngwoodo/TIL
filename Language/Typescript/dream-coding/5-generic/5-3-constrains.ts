interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!`);
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const dongwoo = new FullTimeEmployee();
const yugesh = new PartTimeEmployee();
dongwoo.workFullTime();
yugesh.workPartTime();

const dongwooAfterPay = pay(dongwoo);
const yugeshAfterPay = pay(yugesh);
/**
 * error
 * 왜냐하면 pay 함수의 return 값이 인터페이스 Employee이기 때문이다. 
 * Employee는 pay 메서드만 들고 있다.
 * type assertion을 사용하면 해결 할 수 있다. dongwooAfterPay.workFullTime() as FullTimeEmployee; <- 하지만 사용하지 않는 것이 좋다.
 */
// dongwooAfterPay.workFullTime(); // error
// yugeshAfterPay.workPartTime();  // error