package tdd.tutorial;

public class Franc extends Money{
    Franc(int number, String currency){
        super(number, currency);
    }

    public Franc times(int multiplier) {
        return new Franc(amount * multiplier);
    }
}
