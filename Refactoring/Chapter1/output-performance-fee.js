const invoices = require("./invoices.json");
const plays = require("./plays.json");
const createStatementData = require("./createStatementData.js");

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFactionDigits: 2,
    }).format(aNumber / 100);
  }
}

invoices.forEach((invoice) => {
  console.log(statement(invoice, plays));
  console.log("------------------------------------------");
});
