// 첫번째 절차: 실패 테스트 케이스 작성
const stats = require("./stats");

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
});
