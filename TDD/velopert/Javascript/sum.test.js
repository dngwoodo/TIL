const sum = require("./sum");

// test or it을 사용가능. it을 사용하면 첫번째 인자를 영어로 작성 할 시 "말이 되게" 작성 가능함
it("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
