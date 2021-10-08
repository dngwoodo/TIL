/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
// const invoices = require('./invoices.json');
// const plays = require('./plays.json');

const amountFor = require('./amountFor.test');
const playFor = require('./playFor.test');

function statement(invoice, plays) {
  let totalAmount = 0; // 전체 공연료
  let volumeCredits = 0; // 포인트
  let result = `Statement for ${invoice.customer}\n`;
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFactionDigits: 2,
  });

  for (const performance of invoice.performances) {
    // 포인트를 적립한다.
    volumeCredits += Math.max(performance.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (playFor(performance).type === 'comedy') volumeCredits += Math.floor(performance.audience / 5);

    // 청구 내역을 출력한다
    result += ` ${playFor(performance).name}: ${format(amountFor(performance, playFor(performance)) / 100)} (${
      performance.audience
    }석)\n`;
    totalAmount += amountFor(performance, playFor(performance));
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;
}

// invoices.forEach((invoice) => {
//   console.log(statement(invoice, plays));
//   console.log('------------------------------------------');
// });

module.exports = { statement };
