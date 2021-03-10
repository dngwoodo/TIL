// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// 입력
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// 출력
// 첫 줄에 가운데 문자를 출력합니다.

// * 내 풀이
// function solution(s) {
//   let answer;
//   // 짝수
//   if (s.length % 2 === 0) {
//     answer =
//       s.split("")[Math.floor(s.length / 2) - 1] +
//       s.split("")[Math.floor(s.length / 2)];
//   }

//   // 홀수
//   if (s.length % 2 === 1) {
//     answer = s.split("")[Math.floor(s.length / 2)];
//   }
//   return answer;
// }

// console.log(solution("study123"));

// * 강의 풀이
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  // substring = 첫번째 인자 ~ 두번째 인자 - 1 요소까지 반환
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  // s[2] ~ s[3]이므로 s[2]만 뽑겠다는 의미(u 반환)
  else answer = s.substring(mid - 1, mid + 1); // s[2]~s[4]이므로 s[2],s[3]를 뽑겠다는 의미(study1일시 ud 반환)
  return answer;
}

console.log(solution("study"));
