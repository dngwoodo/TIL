package tdd.tutorial;

public class Franc extends Money{
    Franc(int number){
        amount = number;
    }

    public Franc times(int multiplier) {
        return new Franc(amount * multiplier);
    }
}
