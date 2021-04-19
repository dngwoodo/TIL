// 쇠막대기
// 문제 pdf 참조

// • 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다.
// • 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.
// • 각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.
// • 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.

// 푼 시간: 1시간
// 내 풀이
// 문제점: 무작정 코딩부터 하지말고 규칙부터 찾자
function solution(s) {
  let answer = 0;
  const stack = [];

  // i - 1번째가 "("라면 레이저를 쏘는 곳이므로 pop 시키고 stack의 갯수만큼 answer를 증가시킨다
  // i - 1번째가 ")"라면 레이저의 끝점이므로 pop 시키고 answer에 1을 증가시킨다
  for (i = 0; i < s.length; i++) {
    if (s[i] === ")" && s[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else if (s[i] === ")" && s[i - 1] === ")") {
      stack.pop();
      answer++;
    } else stack.push(s[i]);
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

// 강의 풀이
// function solution(s) {
//   let answer = 0;
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push("(");
//     else {
//       stack.pop();
//       if (s[i - 1] === "(") answer += stack.length;
//       else answer++;
//       //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
//     }
//   }
//   return answer;
// }

// let a = "()(((()())(())()))(())"; // 꿀팁: 이렇게 입력이 되어 있는 문제는 대부분 stack 문제임
// console.log(solution(a));
