// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 입력
// 첫 줄에 문자열이 입력됩니다

// 출력
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

function solution(s) {
  let answer = "";
  // * 내 풀이
  // answer = Array.from(new Set(s)).join("");

  // * 강의 풀이
  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i])); // indexOf는 첫번째 인자로 넣어준 문자를 문자열에서 찾아서 index 반환(제일 첫번째꺼 반환)
    if (s.indexOf(s[i]) === i) answer += s[i]; // 그래서 만약 현재 i와 indexOf의 index를 비교해서 다르면 중복된 것이므로 answer에 추가 X
  }
  return answer;
}
console.log(solution("ksekkset"));
