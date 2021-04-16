// 올바른 괄호

// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

// ▣ 입력설명
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.

// ▣ 출력설명
// 첫 번째 줄에 YES, NO를 출력한다.

// ▣ 입력예제 1
// (()(()))(()
// ▣ 출력예제 1
// NO

// 푼 시간: 30분

// 내 풀이: 이렇게 멍청하게 stack을 사용할 거 였으면 stack을 안쓰고 한 for문안에서 전부 처리해주는게 좋아보임
// function solution(s) {
//   let answer = "YES";
//   const stack = [];
//   let prev = ")";
//   let count = 0;
//   for (x of s) {
//     stack.push(x);
//   }

//   console.log(stack);
//   for (i = 0; i < s.length; i++) {
//     const current = stack.pop();
//     if (i === 0 && current !== ")") return "NO";
//     if (i === s.length && current !== "(") return "NO";
//     if (current === ")") count++;
//     if (current === "(") count--;
//     prev = current;
//   }
//   if (count !== 0) return "NO";

//   return answer;
// }

// let a = "(())))";
// console.log(solution(a));

// 강의 풀이: stack을 하나 생성하고 "("일때는 push하고 ")"일때는 pop을 하면서 비교
function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      // NOTE: 아직 값이 남아 있는데 length가 0이면 괄호가 이상한 것
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  // NOTE: 마지막 stack의 length가 0이여야지 정확하게 맞아 떨어진 것
  if (stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
