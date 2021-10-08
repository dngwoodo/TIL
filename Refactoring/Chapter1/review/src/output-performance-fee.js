/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
// const invoices = require('./invoices.json');
// const plays = require('./plays.json');

// 변수 인라인하기 할 때 사용
function playFor(performance, plays) {
  return plays[performance.playId];
}

// 함수 추출하기
function amountFor(perf, play) {
  let result = 0; // 공연료

  switch (play.type) {
    case 'tragedy':
      result = 40000;
      if (perf.audience > 30) {
        result += 1000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      result = 30000;
      if (perf.audience > 20) {
        result += 10000 + 500 * (perf.audience - 20);
      }
      result += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }

  return result;
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
    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if (playFor(perf.playID, plays).type === 'comedy') volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다
    result += ` ${playFor(perf.playID, plays).name}: ${format(amountFor(perf, playFor(perf.playID, plays)) / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += amountFor(perf, playFor(perf.playID, plays));
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
  playFor,
};
