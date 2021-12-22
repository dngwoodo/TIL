package tdd.tutorial;

public class Money {
    protected int amount;

    @Override
    public boolean equals(Object object) {
        Money money = (Money) object;

        // 파라미터로 들어온 클래스랑 (object)
        // 현재 클래스 랑 비교를 해야되는거죠.

        return getClass().equals(money.getClass()) && amount == money.amount;
    }
}
