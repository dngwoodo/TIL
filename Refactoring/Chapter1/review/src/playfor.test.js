const PLAYS = require('./fixtures/plays');

function playFor(performance) {
  return PLAYS[performance.playId];
}

module.exports = playFor;

describe('playFor', () => {
  it('returns play information', () => {
    given('performance', () => ({ playId: 'hamlet', audience: 55 }));
    expect(playFor(given.performance)).toEqual({ name: 'Hamlet', type: 'tragedy' });

    given('performance', () => ({ playId: 'as-like', audience: 35 }));
    expect(playFor(given.performance)).toEqual({ name: 'As You Like It', type: 'comedy' });

    given('performance', () => ({ playId: 'othello', audience: 40 }));
    expect(playFor(given.performance)).toEqual({ name: 'Othello', type: 'tragedy' });
  });
});
