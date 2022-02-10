package tdd.tutorial;

import java.util.HashMap;
import java.util.Map;

public class Bank {
  Map<String, Integer> rates = new HashMap<>();

  public Money reduce(Expression source, String to) {
    return source.reduce(this, to);
  }

  public String generateKey(String from, String to) {
    return from + "-" + to;
  }

  public void addRate(String from, String to, Integer rate) {
    rates.put(generateKey(from, to), rate);
  }

  public int rate(String from, String to) {
    if(from.equals(to)) {
      return 1;
    }

    return rates.get(generateKey(from, to));
  }
}

