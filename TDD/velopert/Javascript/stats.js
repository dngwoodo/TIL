// 두번째 절차 : 테스트 케이스 성공시키기
exports.max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((n) => {
    if (n > result) {
      result = n;
    }
  });
  return result;
};
