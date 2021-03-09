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
    expect(stats.average([1, 2, 3])).toBe(2);
  });

  describe("medain", () => {
    // 오름차순으로 정렬
    it("sorts the array", () => {
      expect(stats.sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    // 배열 길이 홀수 중앙 값 테스트
    it("gets the median for odd length", () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });

    // 배열 길이 짝수 중앙 값 테스트
    it("gets the median for even length", () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });
});
