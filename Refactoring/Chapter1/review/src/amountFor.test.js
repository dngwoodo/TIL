const playFor = require('./playFor.test');

function amountFor(performance) {
  let result = 0; // 공연료

  switch (playFor(performance)?.type) {
    case 'tragedy':
      result = 40000;
      if (performance.audience > 30) {
        result += 1000 * (performance.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (performance.audience > 20) {
        result += 10000 + 500 * (performance.audience - 20);
      }
      result += 300 * performance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${performance.playId}`);
  }

  return result;
}

module.exports = amountFor;

describe('amountFor', () => {
  describe('tragedy type', () => {
    beforeEach(() => {
      given('perf', () => ({ playId: 'hamlet', audience: 20 }));
    });

    it('returns basic amount', () => {
      expect(amountFor(given.perf)).toBe(40000);
    });

    context('with more than 30 audience', () => {
      beforeEach(() => {
        given('perf', () => ({ playId: 'hamlet', audience: 55 }));
      });

      it('returns added amount', () => {
        expect(amountFor(given.perf)).toBe(65000);
      });
    });
  });

  describe('comedy type', () => {
    beforeEach(() => {
      given('perf', () => ({ playId: 'as-like', audience: 10 }));
    });

    it('returns basic amount', () => {
      expect(amountFor(given.perf)).toBe(33000);
    });

    context('with more than 20 audience', () => {
      beforeEach(() => {
        given('perf', () => ({ playId: 'as-like', audience: 30 }));
      });

      it('returns added amount', () => {
        expect(amountFor(given.perf)).toBe(54000);
      });
    });
  });

  describe('other types', () => {
    beforeEach(() => {
      given('perf', () => ({ playId: 'xxxx', audience: 10 }));
    });

    it('throws error', () => {
      expect(() => amountFor(given.perf)).toThrowError('알 수 없는 장르: xxxx');
    });
  });
});
