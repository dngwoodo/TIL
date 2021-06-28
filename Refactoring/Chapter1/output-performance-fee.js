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

  function htmlStatement(invoice, plays) {
    return renderHTML(createStatementData(invoice, plays));
  }

  function renderHTML(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";

    for (let perf of data.performances) {
      result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
      result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }

    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em>credits</p>`;

    return result;
  }

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
