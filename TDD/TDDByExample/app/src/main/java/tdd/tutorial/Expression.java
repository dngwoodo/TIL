package tdd.tutorial;

interface Expression {
    Money reduce(Bank bank, String to);

     Expression plus(Expression money);
}

