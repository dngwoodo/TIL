package tdd.tutorial;

public class Money implements Expression {
    protected int amount;
    String currency;

    public Money(int number, String currency) {
        amount = number;
        this.currency = currency;
    }

    // 외부에서 franc, dollar 생성자를 직접 사용하는 경우를 없애기 위해서.
    // 외부 참조를 없앴다라고 한다. 이렇게 하면 Money라는 곳에 공통적으로 묶기 쉬워진다.
    // 팩토리 메소드
    public static Money dollar(int number) {
        return new Money(number, "USD");
    }

    // 팩토리 메소드
    public static Money franc(int number) {
        return new Money(number, "CHF");
    }

    @Override
    public boolean equals(Object object) {
        Money money = (Money) object;

        // 파라미터로 들어온 클래스랑 (object)
        // 현재 클래스 랑 비교를 해야되는거죠.

        return currency.equals(money.currency)  && amount == money.amount;
    }

    // 1. 냅다 times의 반환값을 Money로 만듦
    // - equals의 테스트가 깨지면서 times에 대한 테스트도 깨짐.
    // - equals랑 times테스트를 쪼갯어야 했나?
    // - 빨간막대인 상태에서는 다른일을 해야되나 ?
    // times를 수정하다가 equals의 문제를 찾음
    // 보수적으로 접근하자면 우선 초록막대로 돌아가고
    // equals부터 변경하는 테스트 코드 및 구현을 하고
    // 다시 times로 넘어간다.
    // 2. Franc, Dollar의 times 생김새가 똑같아짐.
    // 3. Money로 뺄 수 있게 됨.
    public Money times(int multiplier) {
        return new Money(amount * multiplier, currency);
    }

    public String currency() {
        return currency;
    }

    public Expression plus(Money addend) {
        return new Sum(this, addend);
    }

    public Money reduce(Bank bank, String to) {
        return new Money(amount / bank.rate(this.currency, to), to);
    }
}
