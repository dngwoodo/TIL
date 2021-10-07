const { amountFor } = require('./output-performance-fee');

describe('amountFor', () => {
  describe('tragedy type', () => {
    beforeEach(() => {
      given('perf', () => ({ playID: 'hamlet', audience: 20 }));
      given('play', () => ({ name: 'Hamlet', type: 'tragedy' }));
    });

    it('returns basic amount', () => {
      expect(amountFor(given.perf, given.play)).toBe(40000);
    });

    context('with more than 30 audience', () => {
      beforeEach(() => {
        given('perf', () => ({ playID: 'hamlet', audience: 55 }));
      });

      it('returns added amount', () => {
        expect(amountFor(given.perf, given.play)).toBe(65000);
      });
    });
  });

  describe('comedy type', () => {
    beforeEach(() => {
      given('perf', () => ({ playID: 'as-like', audience: 10 }));
      given('play', () => ({ name: 'As You Like It', type: 'comedy' }));
    });

    it('returns basic amount', () => {
      expect(amountFor(given.perf, given.play)).toBe(33000);
    });

    context('with more than 20 audience', () => {
      beforeEach(() => {
        given('perf', () => ({ playID: 'as-like', audience: 30 }));
      });

      it('returns added amount', () => {
        expect(amountFor(given.perf, given.play)).toBe(54000);
      });
    });
  });

  describe('other types', () => {
    beforeEach(() => {
      given('perf', () => ({ playID: 'as-like', audience: 10 }));
      given('play', () => ({ name: 'As You Like It', type: 'xxxx' }));
    });

    it('throws error', () => {
      expect(() => amountFor(given.perf, given.play)).toThrowError('알 수 없는 장르: xxxx');
    });
  });
});
