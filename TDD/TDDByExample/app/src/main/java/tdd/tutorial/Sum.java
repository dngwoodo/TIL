package tdd.tutorial;

public class Sum implements Expression {
    Expression augend;
    Expression addend;

    public Expression plus (Expression expression) {
        return null;
    }

    public Sum(Expression augend, Expression addend) {
        this.augend = augend; // dollar 5
        this.addend = addend; // fran 10
    }

    public Money exchangeRateCalculation(Bank bank, Expression money, String to) {
        return money.reduce(bank, to);
    }

    public Money reduce(Bank bank, String to) {
        int amount = exchangeRateCalculation(bank, augend, to).amount  + exchangeRateCalculation(bank, addend, to).amount;

        return new Money(amount, to);
    }
}
