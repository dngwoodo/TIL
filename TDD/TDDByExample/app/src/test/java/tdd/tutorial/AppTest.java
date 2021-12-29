/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package tdd.tutorial;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AppTest {
    @Test void testMultiplication() {
        Dollar five = new Dollar(5);

        // assertEquals(10, product.amount);
        assertEquals(new Dollar(10), five.times(2));
        assertEquals(new Dollar(15), five.times(3));
    }

    @Test void testEquality() {
        // 두 객체의 값이 같으면, 같은 객체
        // 삼각측량을 사용한 이유
        // 리팩토링을 어떻게 해야될지 모를 때 사용.
        assertEquals(new Dollar(5), new Dollar(5));
        assertNotEquals(new Dollar(5), new Dollar(6));

        assertEquals(new Franc(5), new Franc(5));
        assertNotEquals(new Franc(5), new Franc(6));

        assertNotEquals(new Dollar(5), new Franc(5));
    }

    @Test void testFrancMultiplication() {
        Franc five = new Franc(5);

        // assertEquals(10, product.amount);
        assertEquals(new Franc(10), five.times(2));
        assertEquals(new Franc(15), five.times(3));
    }

    // 통화 개념을 도입하기 위한 테스트 코드.
    @Test void testCurrency() {
        // Dollar, Franc의 생성자를 동일하게 만들자!.
        assertEquals("USD", Money.dollar(1).currency());
        assertEquals("CHF", Money.franc(1).currency());
    }
}