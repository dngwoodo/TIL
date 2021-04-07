// 문자열 압축

// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을
// 압축하는 프로그램을 작성하시오. 단 반복횟수가 1인 경우 생략합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

// ▣ 출력설명
// 첫 줄에 압축된 문자열을 출력한다.

// ▣ 입력예제 1
// KKHSSSSSSSE

// ▣ 출력예제 1
// K2HS7E

// 푼 시간: 20분(slice때문에 15분씀)

// function solution(s) {
//   let answer = "";
//   let cnt = 1;
//   for (let i = 0; i < s.length; i++) {
//     // ! if else 조건문을 서로 바꿨으면 코드가 좀 더 줄었을 것.
//     if (s[i - 1] && s[i] === s[i - 1]) {
//       cnt++;

//       if (cnt === 2) {
//         answer += cnt; // count가 2이상일때부터 answer에 장착
//       } else {
//         answer = answer.slice(0, -1);
//         answer += cnt;
//       }
//     } else {
//       cnt = 1;
//       answer += s[i];
//     }
//   }

//   return answer;
// }

// let str = "KKHSSSSSSSE";
// console.log(solution(str));

// 강의 풀이: if else 조건 순서를 생각해서 걸면 로직이 길어질일이 줄어든다.
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    // * 전꺼랑 비교하는게 아니라 후꺼랑 비교를 함
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i]; // 반복된 마지막 letter을 answer에 추가
      if (cnt > 1) answer += String(cnt); // cnt를 문자열로 변환해서 뒤에 추가
      cnt = 1; // 1로 초기화
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
