/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
// const invoices = require('./invoices.json');
// const plays = require('./plays.json');

// 함수 추출하기
function amountFor(perf, play) {
  let thisAmount = 0; // 공연료

  switch (play.type) {
    case 'tragedy':
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return thisAmount;
}

function statement(invoice, plays) {
  let totalAmount = 0; // 전체 공연료
  let volumeCredits = 0; // 포인트
  let result = `Statement for ${invoice.customer}\n`;
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFactionDigits: 2,
  });

  for (const perf of invoice.performances) {
    const play = plays[perf.playID]; // e.g) { "name": "Hamlet", "type": "tragedy" }
    const thisAmount = amountFor(perf, play);

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (play.type === 'comedy') volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다
    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;
}

// invoices.forEach((invoice) => {
//   console.log(statement(invoice, plays));
//   console.log('------------------------------------------');
// });

module.exports = {
  statement,
  amountFor,
};
