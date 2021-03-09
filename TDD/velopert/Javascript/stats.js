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

// 숫자를 비교하기 위해선 comparFunction이 들어가야 한다.
exports.sort = (numbers) => numbers.sort((a, b) => a - b);

exports.median = (numbers) => {
  const { length } = numbers; // 5
  const middle = Math.floor(length / 2); // 2 <- 배열의 요소는 0
  return length % 2
    ? numbers[middle] // 홀수 일 때, numbers[2]
    : (numbers[middle - 1] + numbers[middle]) / 2; // 짝수 일 때, (numbers[1] + numbers[2]) / 2
};
