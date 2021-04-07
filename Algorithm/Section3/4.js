// 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명 X
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

// ▣ 출력설명 X
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

// ▣ 입력예제 1
// teachermode e

// ▣ 출력예제 1
// 10121012210

// 내 풀이
// function solution(s, t) {
//   let answer = [];
//   let tindex = []; // 1, 5, 10
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === t) tindex.push(i);
//   }

//   for (let i = 0; i < s.length; i++) {
//     const a = tindex.findIndex((index) => index >= i);
//     const first = a === 0 ? tindex[a] : tindex[a - 1]; // 1
//     const second = tindex[a]; // 1
//     const result = Math.min(Math.abs(i - first), Math.abs(i - second));
//     answer.push(result);
//   }
//   answer = answer.join("");
//   return answer;
// }

// let str = "teachermode";
// console.log(solution(str, "e"));

// 강의 풀이
// ---------------> 여기로 포문을 한번 돌고
// <--------------- 이렇게 포문을 한번 돌면서 min값 비교
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++; // 1001
      answer.push(p); // 1001
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
