// 재귀함수를 이용한 이진수 출력

// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.

// ▣ 입력설명
// 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.

// ▣ 출력설명
// 첫 번째 줄에 이진수를 출력하세요.

// ▣ 입력예제 1
// 11
// ▣ 출력예제 1
// 1011

// 푼 시간: 25분
// function solution(n) {
//   let answer = "";
//   function DFS(L) {
//     if (L / 2 === 0) {
//       if (L % 2 === 0) return;
//       else {
//         answer += L % 2;
//         return;
//       }
//     }
//     DFS(parseInt(L / 2));
//     answer += L % 2;
//   }

//   DFS(n);
//   return answer;
// }

// console.log(solution(8));

// 강의 풀이: 코드가 훨씬 깔끔함
function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += L % 2;
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(8));
