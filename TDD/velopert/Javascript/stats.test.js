// 첫번째 절차: 실패 테스트 케이스 작성
const stats = require("./stats");

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });

  it("gets minimum value", () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });

  it("gets average value", () => {
    expect(stats.average([1, 2, 3, 4])).toBe(2.5);
  });
});
