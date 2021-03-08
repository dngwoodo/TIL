// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고,
// 만들 수 없으면 ”NO"를 출력한다.

// * 내 풀이: 피타고라스 생각함.
// function solution(a, b, c) {
//   let answer = "YES";
//   let longest;
//   const other = [];

//   if (a > b) {
//     longest = a;
//     other.push(b);
//   } else {
//     longest = b; // longest = 4
//     other.push(a); // other = [3]
//   }

//   if (c > longest) {
//     other.push(longest); // [3,4]
//     longest = c; // longest = 5
//   }

//   answer =
//     other[0] * other[0] + other[1] * other[1] === longest * longest
//       ? "YES"
//       : "False";

//   return answer;
// }

// console.log(solution(4, 4, 5));

// * 풀이: 피타고라스를 생각했지만 문제 의도는 그냥 변 2개의 합이 가장 긴 한 변보다 길면 된다.
function solution(a, b, c) {
  let answer = "YES",
    max;

  // a,b,c중에 max값을 구함
  // a,b,c 합한 값 total을 구함
  // total - max <= max이면 NO 반환 <- 즉 변 2개의 합이 가장 긴 한 변보다 짧다는 것
  let total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (total - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
