package tdd.tutorial;

public class Money {
    protected int amount;
    String currency;

    public Money(int number, String currency) {
        amount = number;
        this.currency = currency;
    }

    // 외부에서 franc, dollar 생성자를 직접 사용하는 경우를 없애기 위해서.
    // 외부 참조를 없앴다라고 한다. 이렇게 하면 Money라는 곳에 공통적으로 묶기 쉬워진다.
    // 팩토리 메소드
    public static Dollar dollar(int number) {
        return new Dollar(number);
    }

    // 팩토리 메소드
    public static Franc franc(int number) {
        return new Franc(number, "CHF");
    }

    @Override
    public boolean equals(Object object) {
        Money money = (Money) object;

        // 파라미터로 들어온 클래스랑 (object)
        // 현재 클래스 랑 비교를 해야되는거죠.

        return getClass().equals(money.getClass()) && amount == money.amount;
    }

    public String currency() {
        return currency;
    }
}

