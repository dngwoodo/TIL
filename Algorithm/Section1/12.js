// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

// 조건
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

// 출력
// 첫 줄에 대문자로 통일된 문자열이 출력된다.

function solution(s) {
  let answer = "";
  // * 내 풀이
  s.split("").forEach((val) => {
    answer += val.toUpperCase();
  });

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// * 강의 풀이 - UTF-16 사용
// for (let x of str) {
//   let answer = "";
//   let num = x.charCodeAt(); // UTF-16코드
//   // 97 ~ 122까지 알파벳 소문자을 의미한다.
//   if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 22);
//   // String.fromCharCode = UTF-16코드를 받아서 문자열 반환(여기서는 대문자를 의미)
//   else answer += x;
// }
