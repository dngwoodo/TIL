const { statement } = require('./output-performance-fee');

const INVOICES = require('./fixtures/invoices');
const PLAYS = require('./fixtures/plays');

describe('statement', () => {
  it('returns statement', () => {
    expect(statement(INVOICES[0], PLAYS)).toBe(
      'Statement for BigCo\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트: 47점\n',
    );
  });
});
