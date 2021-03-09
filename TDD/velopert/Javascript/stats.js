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

exports.mode = (numbers) => {
  const counts = new Map();
  numbers.forEach((number) => {
    // number = 1, 2, 2, 3, 4
    const count = counts.get(number) || 0; // 해당 number(key)의 갯수(value) 가져오기, 없으면 0
    counts.set(number, count + 1); // 해당 number(key)의 갯수(value)를 1증가시킴
  });
  const maxCount = Math.max(...counts.values()); // Math.max(1,2,1,1)
  const modes = [...counts.keys()].filter(
    // [1,2,3,4].find()를 쓰면 find를 쓰면 해당 요소를 그대로 뽑아줌
    // [1,2,3,4].filter 쓰면 새로운 배열 반환
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
