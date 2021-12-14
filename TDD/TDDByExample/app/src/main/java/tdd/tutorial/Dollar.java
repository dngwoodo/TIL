package tdd.tutorial;

// ~~$5 * 2 = $10~~
// amount를 private으로 만들기
// ~~Dollar 부작용?~~
// Money 반올림

// 기본적인 개념은 다 알고시작해야된다.
// 그래야 다음 할일이 생각난다.
// 방향성을 정해졌을때 TDD로 작업하는 방식, 흐름을 익히는거에 우선은 집중하자.

public class Dollar {
    public int amount;

    Dollar(int number){
        amount = number;
    }

    public Dollar times(int multiplier) {
        return new Dollar(amount * multiplier);
    }
}
