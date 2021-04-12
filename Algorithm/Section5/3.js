// 연속 부분수열 1

// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.

// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.

// ▣ 입력예제 1
// 8 6
// 1 2 1 3 1 1 1 2

// ▣ 출력예제 1
// 3

// 푼 시간: 20분
// 연속부분수열: 수열이란 연속된 수의 순서 있는 나열이다. 연속부분수열이란 원소를 하나 이상 연속하여 선택한 부분수열을 의미
// https://makefortune2.tistory.com/149 참고

// 내 풀이: O(n2) 이므로 투포인터를 써서 O(n)으로 바꿔야 함.
// function solution(m, arr) {
//   let answer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j + 1];
//       if (sum === 6) {
//         answer += 1;
//         break;
//       }
//       if (sum > 6) {
//         break;
//       }
//     }
//   }

//   return answer;
// }

// let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// 강의 풀이
// function solution(m, arr) {
//   let answer = 0;
//   let lt = 0;
//   let sum = 0; // 4
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

// 다시 풀어본 풀이: 머릿속에 잘 익지 않았기 때문에 꼭 다시 풀어보자
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  n = arr.length;
  sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) {
      answer++;
    }
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
