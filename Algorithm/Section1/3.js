// 연필 개수
// 연필 1 다스는 12자루입니다.
// 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

// * 풀이: 나머지가 있으면 걔들도 줘야 되기 때문에 올림해줘야 된다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math 여기서 Math api 참고
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12); // 올림
  return answer;
}

console.log(solution(178));
