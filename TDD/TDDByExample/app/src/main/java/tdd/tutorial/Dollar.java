package tdd.tutorial;

// ~~$5 * 2 = $10~~
// ~~amount를 private으로 만들기~~
// ~~Dollar 부작용?~~
// ~~Money 반올림~~
// ~~equals~~
// Equal null
// Equal object
// ~~equal 공통~~
// times 공통

// 기본적인 개념은 다 알고시작해야된다.
// 그래야 다음 할일이 생각난다.
// 방향성을 정해졌을때 TDD로 작업하는 방식, 흐름을 익히는거에 우선은 집중하자.

// 값 객체
public class Dollar extends Money{
    Dollar(int number, String currency){
        super(number, currency);
    }

    // times의 중복을 없애고 싶다.
    // currency를 어떻게 이용하면 뭔가 될 것 같다.
    // dollar, franc에 currency를 인자로 받아서 비슷한 모양을 만들어보자.
    // 그러면 뭔가 중복을 없앨 수 있을 것 같다 (?).

//        '' // character
//        "" // string
//        return 'C'; // 이 아이는 타입이 char이다. '' 여기에는 문자 1개만 들어갈 수 있다.
}
