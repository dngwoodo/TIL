const playFor = require('./playFor.test');

function volumeCreditsFor(performance) {
  let result = 0; // 포인트

  // 포인트를 적립한다.
  result += Math.max(performance.audience - 30, 0);

  // 희극 관객 5명마다 추가 포인트를 제공한다.
  if (playFor(performance).type === 'comedy') {
    result += Math.floor(performance.audience / 5);
  }

  return result;
}

module.exports = volumeCreditsFor;

describe('volumeCreditsFor', () => {
  it('returns points', () => {
    expect(volumeCreditsFor({ playId: 'hamlet', audience: 55 })).toBe(25);
    expect(volumeCreditsFor({ playId: 'hamlet', audience: 30 })).toBe(0);
    expect(volumeCreditsFor({ playId: 'hamlet', audience: 29 })).toBe(0);
    expect(volumeCreditsFor({ playId: 'hamlet', audience: 0 })).toBe(0);
  });

  context('with comedy type', () => {
    it('returns added points', () => {
      expect(volumeCreditsFor({ playId: 'as-like', audience: 55 })).toBe(36);
      expect(volumeCreditsFor({ playId: 'as-like', audience: 30 })).toBe(6);
    });
  });
});
