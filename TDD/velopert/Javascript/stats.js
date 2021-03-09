// 두번째 절차 : 테스트 케이스 성공시키기
exports.max = (numbers) => {
  return Math.max(...numbers);
};

exports.min = (numbers) => {
  let result = numbers[0];
  numbers.forEach((number) => {
    if (number < result) {
      result = number;
    }
  });
  return result;
};
