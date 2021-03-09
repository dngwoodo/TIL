// 두번째 절차 : 테스트 케이스 성공시키기
exports.max = (numbers) => {
  return Math.max(...numbers);
};

exports.min = (numbers) => {
  return Math.min(...numbers);
};

exports.average = (numbers) => {
  return numbers.reduce((acc, current, index, { length }) => {
    return acc + current / length;
  }, 0);
};
