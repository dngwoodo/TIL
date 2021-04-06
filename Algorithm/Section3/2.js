// 유효한 팰린드롬

// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
// 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
// 알파벳 이외의 문자들의 무시합니다.

// ▣ 입력설명
// 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

// ▣ 입력예제 1
// found7, time: study; Yduts; emit, 7Dnuof

// ▣ 출력예제 1
// YES

// 푼 시간: 12분

// 내 풀이: 문자열 비교기 때문에 그냥 reverse시켜서 비교하면 되는걸 멍청하게 한글자씩 비교함.
// function solution(s) {
//   let answer = "YES";
//   const str = s.toLowerCase();
//   const pattern = /[a-z]/i;
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (
//       pattern.test(str[i]) &&
//       pattern.test(str[str.length - 1 - i]) &&
//       str[i] !== str[str.length - 1 - i]
//     ) {
//       answer = "NO";
//       break;
//     }
//   }
//   return answer;
// }

// let str = "found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

// 강의 풀이
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, ""); // a~z 알파벳 아닌애들은 ''로 변환
  if (s.split("").reverse().join("") !== s) return "NO"; // reverse시키고 문자열 비교
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
