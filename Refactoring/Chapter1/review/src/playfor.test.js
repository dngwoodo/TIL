const { playFor } = require('./output-performance-fee');

const PLAYS = require('./fixtures/plays');

describe('playFor', () => {
  it('returns play information', () => {
    given('performance', () => ({ playId: 'hamlet', audience: 55 }));
    expect(playFor(given.performance, PLAYS)).toEqual({ name: 'Hamlet', type: 'tragedy' });

    given('performance', () => ({ playId: 'as-like', audience: 35 }));
    expect(playFor(given.performance, PLAYS)).toEqual({ name: 'As You Like It', type: 'comedy' });

    given('performance', () => ({ playId: 'othello', audience: 40 }));
    expect(playFor(given.performance, PLAYS)).toEqual({ name: 'Othello', type: 'tragedy' });
  });
});
